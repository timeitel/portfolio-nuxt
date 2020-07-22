<template>
  <div class="container">
    <the-landing />
    <floating-links />
    <floating-email />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheLanding from '@/components/TheLanding.vue'
import FloatingLinks from '@/components/FloatingLinks.vue'
import FloatingEmail from '@/components/FloatingEmail.vue'

export default Vue.extend({
  components: {
    FloatingLinks,
    FloatingEmail,
    TheLanding
  }
})
</script>

<style>
:root {
  --white: #c0c5ce;
  --dark: #1b1d1f;
  --black: #0f1011;
  --grey: #99a1a6;
  --blue: #0069d9,
}

body {
  background: var(--dark);
  color: var(--grey);
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
