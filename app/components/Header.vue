<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">
        <h1>Logo</h1>
      </div>
      <ul class="menu">
        <li><a href="/#hero">Accueil</a></li>
        <li><a href="/about">Projets</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#why-freelance">Plus</a></li>
        <li class="list-button"><a href="/devis">Devis</a></li>
        <li class="list-button button-blue"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Vous pouvez ajouter de la logique ici si nécessaire
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 20px;
  height: 72px;
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  ul {
    li {
        padding: 4px 6px;
    }

    .list-button {
      border: 1px solid #666;
      border-radius: 5px;

      a {
        font-weight: bold;
      }
    }

    .button-blue {
      background-color: #1e90ff;
      
      a {
        color: white;
      }
    }
    }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.menu a {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.3s;
}

.menu a:hover {
  color: #000;
}
</style>
