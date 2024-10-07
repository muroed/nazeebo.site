from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from ..models import Article
from ..schemas import ArticleCreate
from ..database import get_db

router = APIRouter()

@router.get("/articles")
def get_articles(search: str = Query(None), db: Session = Depends(get_db)):
    if search:
        # Ищем статьи, содержащие строку в заголовке или содержании
        articles = db.query(Article).filter(
            Article.title.ilike(f"%{search}%") |
            Article.content.ilike(f"%{search}%")
        ).all()
    else:
        articles = db.query(Article).all()
    return articles

@router.post("/articles")
def create_article(article: ArticleCreate, db: Session = Depends(get_db)):
    new_article = Article(title=article.title, content=article.content)
    db.add(new_article)
    db.commit()
    db.refresh(new_article)
    return new_article