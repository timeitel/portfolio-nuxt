<template>
  <div class="landing">
    <div class="landing__banner header text-c-black font-bold">
      <h1><span>Hi there,</span></h1>
      <h1>I'm</h1>
    </div>
    <div class="landing__banner sub-header text-c-white">
      <p>Tim Eitel</p>
      <p>Software Engineer</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.landing {
  height: 100vh;
  width: 100vw;
  position: relative;
}

.landing__banner {
  position: absolute;
  top: 50%;
  left: 50%;
}

.header {
  font-size: 7.5rem;
}

.sub-header {
  font-size: 2.625rem;
}
</style>
