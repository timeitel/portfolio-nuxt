<template>
  <main>
    <section id="about-me" class="h-screen w-screen bg-c-white grid">
      <div class="header-group item text-left">
        <h2 class="section__title text-c-grey-1">
          # About me
        </h2>
        <h3 class="my-history my-3 text-c-black">
          My history
        </h3>
        <p class="text-c-grey-3">
          This is a long sentence that I practiced typing when I thought that I had taken a new stance on
        </p>
        <a class="landing__button button self-center mt-5" href="#portfolio">Portfolio</a>
      </div>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#about-me {
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
