<template>
  <div class="landing">
    <the-navbar />
    <div class="header-group">
      <h2 class="header">
        <span>Hi there,</span>
      </h2>
      <h2 class="header">
        <span>I'm</span>
      </h2>
    </div>
    <h2 class="landing__content">
      <p class="sub-header text-c-white text-3xl md:text-5xl">
        Tim Eitel | Software Engineer
      </p>
    </h2>
    <a class="landing__button button" href="#about-me">More</a>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  components: {
    TheNavbar
  }
}
</script>

<style lang="scss" scoped>
.landing {
  height: 100vh;
  width: 100vw;
}

.header {
  font-weight: 700;
  color: var(--black);
  line-height: .9;
}

.header-group {
  display: flex;
  flex-direction: column;
  margin-top: 5vh;

  h2 {
    font-size: 18vw;
    position: relative;
  }

}

.landing__content {
  margin: 8vh 0;
  font-weight: 200;
}

@media only screen and (min-width: 600px) {
  .header-group {
    h2 {
      font-size: 7.5rem;
    }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  }
}
</style>
