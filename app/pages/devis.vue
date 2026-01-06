<template>
  <div>
    <Header />
    <section class="devis-page">
      <div class="container">
        <h1 class="page-title">Demande de devis</h1>
        <p class="page-subtitle">
          Décrivez-moi votre projet et je vous répondrai dans les plus brefs délais avec une estimation personnalisée.
        </p>

        <form @submit.prevent="handleSubmit" class="devis-form">
          <div class="form-row">
            <div class="form-group">
              <label for="nom">Nom *</label>
              <input
                id="nom"
                v-model="formData.nom"
                type="text"
                required
                placeholder="Votre nom"
              />
            </div>

            <div class="form-group">
              <label for="prenom">Prénom *</label>
              <input
                id="prenom"
                v-model="formData.prenom"
                type="text"
                required
                placeholder="Votre prénom"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">Email *</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                placeholder="votre.email@exemple.com"
              />
            </div>

            <div class="form-group">
              <label for="telephone">Téléphone</label>
              <input
                id="telephone"
                v-model="formData.telephone"
                type="tel"
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="entreprise">Entreprise / Organisation</label>
            <input
              id="entreprise"
              v-model="formData.entreprise"
              type="text"
              placeholder="Nom de votre entreprise"
            />
          </div>

          <div class="form-group">
            <label for="typeProjet">Type de projet *</label>
            <select id="typeProjet" v-model="formData.typeProjet" required>
              <option value="">Sélectionnez un type</option>
              <option value="site-vitrine">Site vitrine</option>
              <option value="site-ecommerce">Site e-commerce</option>
              <option value="application-web">Application web</option>
              <option value="optimisation">Optimisation de site existant</option>
              <option value="maintenance">Maintenance / Support</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div class="form-group">
            <label for="budget">Budget estimé</label>
            <select id="budget" v-model="formData.budget">
              <option value="">Sélectionnez une fourchette</option>
              <option value="moins-2000">Moins de 2 000€</option>
              <option value="2000-5000">2 000€ - 5 000€</option>
              <option value="5000-10000">5 000€ - 10 000€</option>
              <option value="10000-20000">10 000€ - 20 000€</option>
              <option value="plus-20000">Plus de 20 000€</option>
            </select>
          </div>

          <div class="form-group">
            <label for="delai">Délai souhaité</label>
            <select id="delai" v-model="formData.delai">
              <option value="">Sélectionnez un délai</option>
              <option value="urgent">Urgent (moins d'1 mois)</option>
              <option value="1-3-mois">1 à 3 mois</option>
              <option value="3-6-mois">3 à 6 mois</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div class="form-group">
            <label for="description">Description du projet *</label>
            <textarea
              id="description"
              v-model="formData.description"
              required
              rows="8"
              placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
            ></textarea>
          </div>

          <div v-if="message" :class="['form-message', messageType]">
            {{ message }}
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande' }}
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const formData = ref({
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  entreprise: '',
  typeProjet: '',
  budget: '',
  delai: '',
  description: ''
})

const isSubmitting = ref(false)
const message = ref('')
const messageType = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  message.value = ''

  try {
    const response = await $fetch('/api/send-devis', {
      method: 'POST',
      body: formData.value
    })

    message.value = 'Votre demande a été envoyée avec succès ! Je vous répondrai rapidement.'
    messageType.value = 'success'
    
    // Réinitialiser le formulaire
    formData.value = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      entreprise: '',
      typeProjet: '',
      budget: '',
      delai: '',
      description: ''
    }
  } catch (error) {
    message.value = 'Une erreur est survenue. Veuillez réessayer ou me contacter directement à thomas.vandenbussche@outlook.com'
    messageType.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
.devis-page {
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  padding: 8rem 2rem 5rem;
  background-color: #d5e8ff;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.page-subtitle {
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.devis-form {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  label {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  input,
  select,
  textarea {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: #1e90ff;
    }

    &::placeholder {
      color: #999;
    }
  }

  textarea {
    resize: vertical;
  }
}

.form-message {
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  text-align: center;

  &.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  &.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover:not(:disabled) {
    background-color: #1873cc;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
}
</style>
