import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './componets/Header';

function App () {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAppProject() {
    //projects.push(`Novo projeto ${Date.now()}`);
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);
    //console.log(projects)
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Willian Barreto"
    });

    const project = response.data;
    
    setProjects([...projects, project])
  }

  return (
  <>
    <Header title="Projects" />
    <ul>
  {projects.map(project => <li key={project.id}>{project.title}</li>)}
    </ul>

  <button type="button" onClick={handleAppProject}>Adicionar projeto</button>
  </>
  );
}

export default App;