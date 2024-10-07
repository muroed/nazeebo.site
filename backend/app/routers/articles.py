from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas, crud
from ..database import get_db

router = APIRouter()

# Маршрут для создания новой статьи
@router.post("/articles", response_model=schemas.Article)
def create_article(article: schemas.ArticleCreate, db: Session = Depends(get_db)):
    return crud.create_article(db=db, article=article)

# Маршрут для получения всех статей
@router.get("/articles", response_model=list[schemas.Article])
def get_articles(db: Session = Depends(get_db)):
    return db.query(models.Article).all()