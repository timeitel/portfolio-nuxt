<template>
  <div class="side-container text-c-blue hidden lg:flex">
    <a class="email-link text-c-grey hover:text-c-blue" href="#">timeitel@outlook.com</a>
    <div class="vertical-divider" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.side-container {
  bottom: 0;
  right: 60px;
  position: fixed;
  flex-direction: column;
  align-items: center;
  width: 32px;
  height: 304px;
}

.email-link {
  position: absolute;
  bottom: 240px;
  right: -66px;
  transform: rotate(90deg);
}

.vertical-divider {
  border-left: 1px solid var(--grey);
  height: 150px;
  margin-top: 10px;
  transform: translateX(45%);
  position: absolute;
  bottom: 0;
}
</style>
