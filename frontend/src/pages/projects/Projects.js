import GitHubProjects from '../../components/GitHubProjects';
import './Projects.css'; // Импортируем файл стилей (создайте, если он нужен)

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Мои Проекты</h1>
      <GitHubProjects />
    </div>
  );
};

export default Projects;