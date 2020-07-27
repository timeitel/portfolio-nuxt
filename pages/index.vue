<template>
  <div class="container">
    <the-landing />
    <floating-links />
    <floating-email />
    <the-about />
    <the-portfolio />
    <the-contact />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheLanding from '@/components/TheLanding.vue'
import FloatingLinks from '@/components/FloatingLinks.vue'
import FloatingEmail from '@/components/FloatingEmail.vue'
import TheAbout from '@/components/TheAbout.vue'
import ThePortfolio from '@/components/ThePortfolio.vue'
import TheContact from '@/components/TheContact.vue'

export default Vue.extend({
  components: {
    FloatingLinks,
    FloatingEmail,
    TheLanding,
    TheAbout,
    ThePortfolio,
    TheContact
  },
  head () {
    return {
      title: 'Tim Eitel | Software Engineer'
    }
  }
})
</script>

<style>
:root {
  --dark: #1b1d1f;
  --black: #0f1011;
  --grey-1: #e3e3e3;
  --grey-2: #99a1a6;
  --blue: #0069d9,
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  background: var(--dark);
  color: var(--grey);
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.section__title {
  font-weight: 700;
  line-height: .9;
  font-size: 4.5rem;
}
</style>
