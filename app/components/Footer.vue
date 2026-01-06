<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Thomas Vandenbussche</h3>
          <p class="footer-description">
            Développeur web freelance passionné par la création de solutions digitales sur mesure.
          </p>
        </div>

        <div class="footer-section">
          <h4 class="section-title">Navigation</h4>
          <ul class="footer-links">
            <li><a href="/#hero">Accueil</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#why-freelance">Pourquoi freelance</a></li>
            <li><a href="/devis">Demander un devis</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="section-title">Contact</h4>
          <ul class="footer-links">
            <li><a href="mailto:thomas.vandenbussche@outlook.com">thomas.vandenbussche@outlook.com</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Thomas Vandenbussche. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped lang="scss">
.footer {
  font-family: 'Roboto', sans-serif;
  background-color: #2c3e50;
  color: white;
  padding: 3rem 2rem 1.5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.footer-section {
  .footer-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: white;
  }

  .footer-description {
    color: #bdc3c7;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .section-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.75rem;

    a {
      color: #bdc3c7;
      text-decoration: none;
      transition: color 0.3s;
      font-size: 0.95rem;

      &:hover {
        color: #1e90ff;
      }
    }
  }
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid #34495e;
  text-align: center;

  p {
    color: #bdc3c7;
    font-size: 0.9rem;
  }
}
</style>
