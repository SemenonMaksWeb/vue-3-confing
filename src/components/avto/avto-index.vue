<template>
  <div>{{ post }}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({})
export default class AvtoIndex extends Vue {
  post = 2;
}
</script>
