# Инструкции по деплою

## 1. Деплой на GitHub

1. Создайте новый репозиторий на GitHub
2. Добавьте remote origin:
```bash
git remote add origin https://github.com/your-username/anteyko-group.git
git branch -M main
git push -u origin main
```

## 2. Деплой Frontend на Vercel

1. Перейдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите ваш репозиторий
5. Настройте проект:
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Добавьте переменные окружения:
   - `VITE_BACKEND_URL`: URL вашего backend на Render
7. Нажмите "Deploy"

## 3. Деплой Backend на Render

1. Перейдите на [render.com](https://render.com)
2. Войдите через GitHub
3. Нажмите "New +" → "Web Service"
4. Подключите ваш репозиторий
5. Настройте сервис:
   - Name: `anteyko-backend`
   - Environment: `Node`
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`
6. Добавьте переменные окружения:
   - `EMAIL_HOST`: `smtp.gmail.com`
   - `EMAIL_PORT`: `587`
   - `EMAIL_USER`: ваш Gmail
   - `EMAIL_PASS`: ваш App Password
   - `EMAIL_FROM`: ваш Gmail
   - `EMAIL_TO`: `info@anteyko.com`
   - `NODE_ENV`: `production`
   - `PORT`: `10000`
7. Нажмите "Create Web Service"

## 4. Обновление Frontend URL

После деплоя backend на Render:
1. Скопируйте URL вашего backend (например: `https://anteyko-backend.onrender.com`)
2. Обновите файл `src/config.ts`:
```typescript
export const PRODUCTION_BACKEND_URL = 'https://anteyko-backend.onrender.com';
```
3. Замените `BACKEND_URL` на `PRODUCTION_BACKEND_URL` в `src/App.tsx`
4. Сделайте коммит и push
5. Vercel автоматически пересоберет и задеплоит проект

## 5. Проверка работы

1. Откройте ваш сайт на Vercel
2. Перейдите в раздел "Контакты"
3. Заполните форму и отправьте сообщение
4. Проверьте, что email пришел на `info@anteyko.com`

## Важные замечания

- Для Gmail используйте App Password, а не обычный пароль
- Убедитесь, что CORS настроен правильно
- Backend на Render может "засыпать" при отсутствии активности
- Для production рекомендуется использовать платные планы
