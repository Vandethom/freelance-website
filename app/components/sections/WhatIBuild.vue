<template>
  <section id="services" class="what-i-build">
    <div class="container">
      <div class="left-content">
        <h2 class="section-title">Ce que je construis pour vous</h2>
        <button class="btn-discover">Découvrir</button>
      </div>
      
      <div class="right-content">
        <div class="feature-item">
          <div class="icon-placeholder">
            <span>⚙️</span>
          </div>
          <div class="feature-text">
            <h3 class="feature-title">Développement web sur mesure</h3>
            <p class="feature-description">Sites construits selon vos besoins spécifiques, sans compromis.</p>
          </div>
        </div>
        
        <div class="feature-item">
          <div class="icon-placeholder">
            <span>📈</span>
          </div>
          <div class="feature-text">
            <h3 class="feature-title">Optimisation de sites existants</h3>
            <p class="feature-description">Amélioration de performance et de visibilité pour votre présence actuelle.</p>
          </div>
        </div>
        
        <div class="feature-item">
          <div class="icon-placeholder">
            <span>🤝</span>
          </div>
          <div class="feature-text">
            <h3 class="feature-title">Accompagnement technique continu</h3>
            <p class="feature-description">Support et maintenance pour assurer la pérennité de vos solutions digitales.</p>
          </div>
        </div>

        <div class="feature-item">
          <div class="icon-placeholder">
            <span>✨</span>
          </div>
          <div class="feature-text">
            <h3 class="feature-title">Sites sur mesure</h3>
            <p class="feature-description">Développement web adapté à votre vision, sans compromis sur la qualité ni la performance.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Logique du composant
</script>

<style scoped lang="scss">
.what-i-build {
  background-color: #d5e8ff;
  font-family: 'Roboto', sans-serif;
  padding: 5rem 2rem;
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
  display: flex;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 3rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
}

.left-content {
  flex: 0 0 40%;
  
  @media (max-width: 968px) {
    flex: 1;
    text-align: center;
  }
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.btn-discover {
  padding: 0.75rem 2rem;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #1873cc;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}

.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 0;
  position: relative;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 3.25rem 0;
  text-align: left;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 40px;
    bottom: -2.2rem;
    width: 1.5px;
    height: 4.5rem;
    background-color: #c5bbbb;

    @media (max-width: 480px) {
      display: none;
    }
  }

  @media (max-width: 968px) {
    max-width: 400px;
    padding: 2rem 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1.5rem 0;
  }
}

.feature-text {
  flex: 1;
}

.icon-placeholder {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  span {
    font-size: 2.5rem;
  }
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.feature-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #ddd;

  @media (max-width: 968px) {
    width: 80%;
    height: 1px;
    margin: 1rem 0;
  }
}
</style>
