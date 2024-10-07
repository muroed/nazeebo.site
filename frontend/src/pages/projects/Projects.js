import { Box } from "@mui/material";
import GitHubProjects from "../../components/GitHubProjects";

const Projects = () => {
  return (
    <Box display="flex" flex={1} flexDirection="column">
      <Box width="100%">
        <h1>Мои Проекты</h1>
        <GitHubProjects />
      </Box>
    </Box>
  );
};

export default Projects;
