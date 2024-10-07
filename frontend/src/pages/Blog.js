import React, { useState, useEffect } from 'react';
import NewArticleForm from '../components/NewArticleForm';

const Blog = () => {
  const [articles, setArticles] = useState([]);

  // Функция для получения всех статей
  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/articles');
      const data = await response.json();
      setArticles(data);
    } catch (err) {
      console.error('Error fetching articles:', err);
    }
  };

  // Функция для обработки новой статьи
  const handleNewArticle = (newArticle) => {
    setArticles([...articles, newArticle]); // Добавляем новую статью к уже существующим
  };

  // Получаем статьи при загрузке компонента
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {/* Форма для создания новой статьи */}
      <NewArticleForm onArticleCreated={handleNewArticle} />
      
      {/* Список статей */}
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;