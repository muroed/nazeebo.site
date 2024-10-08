import { useState, useEffect } from "react";
import NewArticleForm from "../../components/NewArticleForm";
import { Box } from "@mui/material";

function Blog() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Добавляем состояние для поиска

  const fetchArticles = async () => {
    const response = await fetch(
      `http://localhost:8000/api/articles?search=${searchTerm}`
    );
    const data = await response.json();
    setArticles(data);
  };

  const handleNewArticle = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetchArticles();
  }, [searchTerm]); // Теперь будет вызывать fetchArticles при изменении searchTerm

  return (
    <Box flex={1}>
      <h1>Blog</h1>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <NewArticleForm onArticleCreated={handleNewArticle} />
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default Blog;
