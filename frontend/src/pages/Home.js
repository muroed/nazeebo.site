import React from 'react';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <h1>Даниил Донецков - DevOps Engineer</h1>
      <p>Привет! Я — DevOps-инженер, который помогает командам улучшать процессы разработки и развертывания.</p>
      <p>Когда я не за компьютером, я увлекаюсь волейболом, походами и путешествиями. Также я увлекаюсь автомобилями, настольными играми и кулинарией.</p>
      <Contact />
    </div>
  );
};

export default Home;