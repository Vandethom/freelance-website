<template>
  <header class="header">
    <nav class="nav">
      <a href="/" class="logo">
        <img src="/images/logo.jpg" alt="Logo" />
        <span class="site-name">hummingbird-dev.com</span>
      </a>
      
      <button class="burger" @click="isMenuOpen = !isMenuOpen" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul class="menu" :class="{ open: isMenuOpen }">
        <li><a href="/#hero" @click="closeMenu">Accueil</a></li>
        <li><a href="/#projets" @click="closeMenu">Projets</a></li>
        <li><a href="/#services" @click="closeMenu">Services</a></li>
        <li><a href="/#why-freelance" @click="closeMenu">Plus</a></li>
        <li class="list-button"><a href="/devis" @click="closeMenu">Devis</a></li>
        <li class="list-button button-blue"><a href="/#contact" @click="closeMenu">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 2rem;
  height: 72px;
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 20px 1rem;
  }

  ul {
    li {
        padding: 4px 6px;

        @media (max-width: 968px) {
          padding: 12px 0;
          width: 100%;
        }
    }

    .list-button {
      border: 1px solid #666;
      border-radius: 5px;

      a {
        font-weight: bold;
      }

      @media (max-width: 968px) {
        text-align: center;
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
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;

  img {
    height: 52px;
    width: auto;
    object-fit: contain;

    @media (max-width: 768px) {
      height: 45px;
    }
  }

  .site-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;

  @media (max-width: 968px) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background-color: #333;
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  &.active {
    span:nth-child(1) {
      transform: rotate(45deg) translate(7px, 7px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
  }
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;

  @media (max-width: 968px) {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #fff;
    padding: 2rem 1rem;
    gap: 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease;

    &.open {
      transform: translateX(0);
    }
  }
}

.menu a {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.3s;

  @media (max-width: 968px) {
    display: block;
    padding: 8px 0;
  }
}

.menu a:hover {
  color: #000;
}
</style>
