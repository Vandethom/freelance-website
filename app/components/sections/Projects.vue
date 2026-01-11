<template>
  <section id="projets" class="projects">
    <div class="container">
      <h2 class="section-title">Mes projets réalisés</h2>
      <p class="section-subtitle">Découvrez quelques-unes de mes réalisations</p>
      
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image">
            <img :src="project.image" :alt="project.title">
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="btn btn-project">
              Voir le projet
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Données des projets - À personnaliser avec vos vrais projets
const projects = ref([
  {
    id: 1,
    title: 'Projet E-commerce',
    description: 'Site e-commerce moderne avec paiement sécurisé et gestion des stocks.',
    image: '/images/project1.jpg',
    tags: ['Vue.js', 'Node.js', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Application Web',
    description: 'Application web responsive pour la gestion de projets en équipe.',
    image: '/images/project2.jpg',
    tags: ['Nuxt', 'TypeScript', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 3,
    title: 'Site Vitrine',
    description: 'Site vitrine élégant pour une entreprise de services professionnels.',
    image: '/images/project3.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#'
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    description: 'Interface de visualisation de données en temps réel avec graphiques interactifs.',
    image: '/images/project4.jpg',
    tags: ['Vue.js', 'Chart.js', 'API REST'],
    link: '#'
  }
]);
</script>

<style scoped lang="scss">
.projects {
  background-color: #d5e8ff;
  font-family: 'Roboto', sans-serif;
  padding: 5rem 2rem;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.project-card {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.75rem;
}

.project-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background-color: #e3f2fd;
  color: #1e90ff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.btn-project {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #1e90ff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #1873cc;
    transform: scale(1.02);
  }
}
</style>
