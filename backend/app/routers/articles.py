from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.crud import get_articles

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/api/articles")
def read_articles(db: Session = Depends(get_db)):
    articles = get_articles(db)
    return articles