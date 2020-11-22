<template>
  <div class="container">
    <ul class="nav-about-ul">
      <li class="nav-about-li">
        <a href="#" class="nav-about-link"></a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('../../assets/scss/HelloWorld.scss');
</style>
