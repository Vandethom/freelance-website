<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Contactez-moi</h2>
      <p class="section-subtitle">
        Une question ? Un projet en tête ? N'hésitez pas à me contacter.
      </p>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <div class="icon">
              <span>📧</span>
            </div>
            <div class="info-text">
              <h3>Email</h3>
              <a href="mailto:thomas.vandenbussche@outlook.com">thomas.vandenbussche@outlook.com</a>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">
              <span>💼</span>
            </div>
            <div class="info-text">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener">Profil LinkedIn</a>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">
              <span>🐙</span>
            </div>
            <div class="info-text">
              <h3>GitHub</h3>
              <a href="https://github.com" target="_blank" rel="noopener">Voir mes projets</a>
            </div>
          </div>
        </div>

        <div class="contact-cta">
          <p class="cta-text">Prêt à démarrer votre projet ?</p>
          <a href="/devis" class="cta-button">Demander un devis</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Logique du composant
</script>

<style scoped lang="scss">
.contact {
  font-family: 'Roboto', sans-serif;
  padding: 5rem 2rem;
  background-color: #d5e8ff;
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 4rem;
  line-height: 1.6;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.info-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
}

.icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e90ff;
  border-radius: 50%;
  margin-bottom: 1.5rem;

  span {
    font-size: 2rem;
  }
}

.info-text {
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }

  a {
    color: #1e90ff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #1873cc;
      text-decoration: underline;
    }
  }
}

.contact-cta {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.cta-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 3rem;
  background-color: #1e90ff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #1873cc;
    transform: translateY(-2px);
  }
}
</style>
