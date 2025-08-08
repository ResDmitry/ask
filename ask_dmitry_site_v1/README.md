# Анонимный вопрос Дмитрию (Vercel + Telegram)

## Как запустить
1) Создайте бота в Telegram через @BotFather, получите `TELEGRAM_TOKEN`.
2) Напишите что-нибудь боту, затем откройте в браузере:
   `https://api.telegram.org/bot<ТОКЕН>/getUpdates` и возьмите `chat.id` — это `TELEGRAM_CHAT_ID`.

3) Залейте эти файлы в новый репозиторий GitHub.

4) В Vercel → New Project → импортируйте репозиторий и добавьте переменные окружения:
   - `TELEGRAM_TOKEN` = ваш токен от BotFather
   - `TELEGRAM_CHAT_ID` = ваш chat_id (число)

5) Нажмите Deploy. Готово! Форма по адресу вашего сайта будет слать сообщения в Telegram.

P.S. Локально `index.html` откроется, но отправка сработает только когда страница открыта с домена Vercel (нужен /api/send).
