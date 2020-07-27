<template>
  <section id="portfolio" class="h-screen w-screen bg-c-dark grid">
    <div class="header-group item text-left">
      <h2 class="section__title text-c-black">
        # Portfolio
      </h2>
      <h3 class="my-history my-3 text-c-white">
        My projects
      </h3>
      <p class="text-c-grey-3">
        This is a long sentence that I practiced typing when I thought that I had taken a new stance on
      </p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#portfolio {
place-items: center;
}

.my-history {
  font-size: 2.25rem;
  font-weight: 600;
}

.header-group {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
