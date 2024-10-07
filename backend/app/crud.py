from sqlalchemy.orm import Session
from app.models import Article

def get_articles(db: Session):
    return db.query(Article).all()