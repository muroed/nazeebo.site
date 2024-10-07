# Dockerfile for Frontend (React)

# Используем Node.js образ для сборки фронтенда
FROM node:18 AS build

# Рабочая директория
WORKDIR /app

# Копируем package.json и yarn.lock и устанавливаем зависимости
COPY package.json yarn.lock ./
RUN yarn install

# Копируем все файлы и создаем сборку
COPY ./ ./
RUN yarn build

# Используем Nginx для сервировки статических файлов
FROM nginx:alpine

# Копируем собранные файлы из предыдущего шага
COPY --from=build /app/build /usr/share/nginx/html

# Копируем файл конфигурации сайта
COPY nginx-site.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]