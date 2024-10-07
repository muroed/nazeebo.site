import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error('Error fetching articles:', err));
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;