<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <AvtoIndex />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'; // @ is an alias to /src
import AvtoIndex from '@/components/avto/avto-index.vue';

@Options({
  components: {
    HelloWorld,
    AvtoIndex,
  },
})
export default class Home extends Vue {}
</script>
