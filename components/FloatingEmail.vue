<template>
  <div class="flex">
    <a class="text-c-grey vertical-link hover:text-c-blue hidden md:flex md:items-center" href="#">More about me
    </a>
    <svg class="h-6 w-6 chevron fill-current text-c-black" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.vertical-link {
  position: absolute;
  bottom: 200px;
  right: 0;
  transform: rotate(90deg);
}

.chevron {
  position: absolute;
  bottom: 0;
}

.vertical-link::after {
  background: var(--black);
  content: '';
  display: inline-block;
  height: 2px;
  width: 4.5rem;
  margin-left: 0.75rem;
}
</style>
