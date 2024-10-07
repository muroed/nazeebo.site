from fastapi import FastAPI
from .database import engine
from . import models
from .routers import articles
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Разрешить запросы с фронтенда
    allow_credentials=True,
    allow_methods=["*"],  # Разрешить все методы (POST, GET, и т.д.)
    allow_headers=["*"],
)
# Создание всех таблиц
models.Base.metadata.create_all(bind=engine)

# Подключение маршрутов для статей
app.include_router(articles.router, prefix="/api")
