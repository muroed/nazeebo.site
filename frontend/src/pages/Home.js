import React from 'react';
import Contact from '../components/Contact';
import GitHubProjects from '../components/GitHubProjects';

const Home = () => {
  return (
    <div>
      <h1>Даниил Донецков - DevOps Engineer</h1>
      <p>Привет! Меня зовут Даниил, и я — DevOps-инженер. Моя работа — это проектирование и реализация задач в сфере DevOps, где я помогаю командам улучшать процессы разработки и развертывания. Мне нравится создавать решения, которые делают инфраструктуру стабильной, надежной и масштабируемой.</p>
      <p>Когда я не за компьютером, я активно провожу время — волейбол, походы и путешествия помогают мне перезарядиться и находить новые идеи. Я увлекаюсь автомобилями, люблю настольные игры и кулинарию, а еще мне важно создавать уютную атмосферу дома, где каждая деталь приносит тепло и комфорт.</p>
      <p>Мой путь в DevOps начался довольно неожиданно. С детства меня не сильно привлекали технологии — я больше увлекался компьютерными играми. В школе я учился достаточно неплохо, но когда пришло время выбирать профессию, решил пойти в прикладную инженерию. Мне хотелось создавать что-то необычное и полезное. Однако учеба в инженерном университете давалась сложно, и вскоре я понял, что это не совсем то, чего я ожидал.</p>
      <p>Тогда я решил самостоятельно изучать IT-сферу. Меня увлекли возможности, которые технологии предоставляют для решения реальных задач. Постепенно я погрузился в мир DevOps, осваивая инструменты, подходы к автоматизации и работе с инфраструктурой. Самообучение стало для меня настоящим вызовом и одновременно увлекательным процессом, который привел меня к тому, кто я есть сейчас — DevOps-инженеру с горящим желанием постоянно развиваться и улучшать свои навыки.</p>
      <p>Добро пожаловать в мой мир технологий и увлечений!</p>
      <GitHubProjects />
      <Contact />
    </div>
  );
};

export default Home;