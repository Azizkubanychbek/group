# Anteyko Group Website

Веб-сайт для Anteyko Group с функциональной формой обратной связи.

## Структура проекта

- `src/` - Frontend React приложение
- `server.js` - Backend Express сервер
- `env.example` - Пример конфигурации окружения

## Установка и запуск

### 1. Frontend (React)

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

Frontend будет доступен по адресу: http://localhost:5173

### 2. Backend (Express)

```bash
# Создайте файл .env на основе env.example
cp env.example .env

# Установите зависимости для backend
npm install express cors body-parser nodemailer dotenv

# Запустите сервер
node server.js
```

Backend будет доступен по адресу: http://localhost:3001

## Конфигурация Email

В файле `.env` настройте следующие параметры:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=recipient@example.com
```

**Важно:** Для Gmail используйте App Password, а не обычный пароль.

## API Endpoints

- `POST /api/contact` - Отправка сообщения через форму
- `GET /health` - Проверка состояния сервера

## Функциональность

- Многоязычный интерфейс (RU, EN, ZH)
- Адаптивный дизайн
- Форма обратной связи с валидацией
- Отправка email через SMTP
- Анимации и интерактивные элементы

## Технологии

- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend:** Node.js, Express, Nodemailer
- **Email:** SMTP через Gmail
