# Dockerfile for Backend (FastAPI)

# Используем базовый образ python
FROM python:3.10

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем зависимости
COPY requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Копируем исходный код
COPY . .

# Открываем порт для FastAPI
EXPOSE 8000

# Команда для запуска FastAPI
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]