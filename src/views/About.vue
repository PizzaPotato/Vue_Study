<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Counter></Counter> <!-- Counter.vueのコンポーネント呼び出し -->
  </div>
</template>

<script>
import Counter from '../components/Counter'

export default {
  components: { Counter }
}
</script>
