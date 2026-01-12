<template>
  <section id="why-freelance" class="why-freelance">
    <div class="container">
      <h2 class="section-title">Pourquoi choisir un freelance</h2>
      <p class="section-description">
        Travailler avec un développeur indépendant signifie une relation directe et une réactivité sans égale. 
        Vous bénéficiez d'une attention personnalisée et d'une flexibilité sur mesure pour votre futur outil digital.
      </p>
      
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="icon-wrapper">
            <span>💬</span>
          </div>
          <h3 class="benefit-title">Communication directe</h3>
          <p class="benefit-description">Échanges directs sans intermédiaire pour une meilleure compréhension de vos besoins.</p>
        </div>
        
        <div class="benefit-card">
          <div class="icon-wrapper">
            <span>⚡</span>
          </div>
          <h3 class="benefit-title">Réactivité maximale</h3>
          <p class="benefit-description">Réponses rapides et adaptations immédiates à vos demandes et changements.</p>
        </div>
        
        <div class="benefit-card">
          <div class="icon-wrapper">
            <span>🎯</span>
          </div>
          <h3 class="benefit-title">Attention personnalisée</h3>
          <p class="benefit-description">Votre projet reçoit toute l'attention qu'il mérite, du début à la fin.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Logique du composant
</script>

<style scoped lang="scss">
.why-freelance {
  font-family: 'Roboto', sans-serif;
  padding: 5rem 2rem;
  background-color: #d5e8ff;
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 968px) {
    min-height: auto;
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.section-description {
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
}

.benefit-card {
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d5e8ff;
  border-radius: 50%;
  
  span {
    font-size: 2.5rem;
  }
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.benefit-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}
</style>
