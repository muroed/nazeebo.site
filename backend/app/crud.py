from sqlalchemy.orm import Session
from app.models import Article
from app.schemas import ArticleCreate

def get_articles(db: Session):
    return db.query(Article).all()


def create_article(db: Session, article: ArticleCreate):
    db_article = Article(title=article.title, content=article.content)
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article