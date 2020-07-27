<template>
  <main>
    <section id="about-me" class="h-screen w-screen bg-c-white grid">
      <div class="header-group item text-left">
        <h2 class="section__title text-c-grey-1">
          # Contact
        </h2>
        <h3 class="my-history my-3 text-c-black">
          My email
        </h3>
        <p class="text-c-grey-3">
          While I'm not currently looking for any opportunities, I'm always open to open source projects
        </p>
        <div class="flex justify-center mt-6">
          <a class="landing__button flex button self-center mr-3" href="#portfolio">
            <svg class="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>
            Resume</a><a class="landing__button flex button self-center" href="#portfolio">
            <svg class="h-6 w-6 mr-2 " fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            Contact me</a>
        </div>
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
