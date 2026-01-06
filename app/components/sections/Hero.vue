<template>
  <section id="hero" class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Bienvenue chez moi</h1>
      <p class="hero-subtitle">
        Créons ensemble votre présence digitale remarquable.
      </p>
      <p>
        Je construis des sites webs et applications modernes qui donnent du poids à votre entreprise. Chaque projet reçoit l'attention qu'il mérite, du concept à la mise en production.
      </p>
      <div class="hero-buttons">
        <a href="#contact" class="btn btn-primary">Nous contacter</a>
        <a href="#services" class="btn btn-secondary">Découvrir nos services</a>
      </div>
    </div>
    <div class="hero-images">
      <img src="/images/main-image.jpg" alt="Image principale" class="main-image" />
      <img src="/images/overlay-image.jfif" alt="Image superposée" class="overlay-image" />
    </div>
  </section>
</template>

<script setup lang="ts">
// Logique du composant Hero
</script>

<style scoped lang="scss">
.hero {
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1e90ff;
  color: white;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
}

.hero-content {
  flex: 0 0 60%;
  max-width: 50%;
  text-align: left;
  padding-right: 4rem;
  z-index: 10;

  @media (max-width: 968px) {
    max-width: 100%;
    flex: 1;
    padding-right: 0;
    text-align: center;
    margin-bottom: 2rem;
  }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }
}

.hero-images {
  flex: 0 0 40%;
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 968px) {
    flex: 0 0 50vh;
    height: 50vh;
    width: 100%;
  }
}

.main-image {
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.overlay-image {
  position: absolute;
  width: 60%;
  height: 50%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  border: 4px solid white;
  left: -20%;
  bottom: 10%;
  z-index: 2;

  @media (max-width: 968px) {
    left: -10%;
    width: 50%;
    height: 40%;
  }
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;

  &-primary {
    background-color: white;
    color: #667eea;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
  }

  &-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background-color: white;
      color: #667eea;
      transform: translateY(-2px);
    }
  }
}
</style>
