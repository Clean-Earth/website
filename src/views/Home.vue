<template>
  <div class="home">
    <Main/>
    <Join/>
    <footer><a href="http://www.freepik.com/pch.vector">All Illustrations are Designed by pch.vector / Freepik</a></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue';
import Join from '@/components/Join.vue';

export default {
  name: 'Home',
  components: {
    Main,
    Join,
  },
};
</script>
