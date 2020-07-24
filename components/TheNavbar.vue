<template>
  <header>
    <nav class="p-5 flex justify-between items-center nav-container">
      <a class="flex hover:text-c-blue" href="#">
        <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" /></svg>
        <span>Tim Eitel</span>
      </a>
      <div class="flex items-center">
        <a class="mr-6 hover:text-c-blue" href="#">Resume</a>
        <a class="p-1 hover:text-c-blue" href="#">
          <svg class="h-6 w-6" fill="currentColor" view-box="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
          </svg>
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.nav-container {
  margin: 0 auto;
  max-width: 920px;
}

</style>
