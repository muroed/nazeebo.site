from fastapi import FastAPI
from app.routers import articles
from app.database import engine
from app.models import Base

# Создаем все таблицы, если их нет
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Подключаем роутер для работы со статьями блога
app.include_router(articles.router)