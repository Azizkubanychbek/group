import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const app = express();

// Middlewares
const allowedOrigins = [
  'http://localhost:5173', // для разработки
  'https://localhost:5173',
  'https://www.anteyko.com', // ваш основной домен
  'https://anteyko.com', // без www
  'https://labs-liard.vercel.app', // ваш Vercel домен
  process.env.FRONTEND_URL // для продакшена
].filter(Boolean);

app.use(cors({ 
  origin: function (origin, callback) {
    // Разрешаем запросы без origin (например, Postman)
    if (!origin) return callback(null, true);
    
    // Разрешаем запросы с разрешенных доменов
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    
    // Разрешаем все домены для разработки
    if (process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    
    // В продакшене разрешаем только указанные домены
    return callback(null, true); // временно разрешаем все
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Обработка preflight запросов
app.options('*', cors());

app.use(bodyParser.json());

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // Gmail + 587 = false
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/contact route
app.post("/api/contact", async (req, res) => {
  const { fullName, email, company, projectDetails } = req.body;

  console.log("📩 Form data received:", req.body);

  // Формируем письмо
  const mailOptions = {
    from: `"Website Contact Form" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: `New message from ${fullName}`,
    text: `
Full Name: ${fullName}
Email: ${email}
Company: ${company || "Not provided"}
Project Details:
${projectDetails}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email", error });
  }
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is running" });
});

// Start server
app.listen(process.env.PORT || 3001, () => {
  console.log(`🚀 Server is running on port ${process.env.PORT || 3001}`);
  console.log(`📧 Email will be sent to: ${process.env.EMAIL_TO}`);
  console.log(`🌐 CORS enabled for: ${process.env.CORS_ORIGIN || "*"}`);
});
