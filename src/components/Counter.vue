<template>
      <div class="counter">
    <h1>Storeの機能練習</h1>
      <button @click="increase">increase</button>
      <button @click="decrease">decrease</button><br>
      <div>現在のカウントは：{{ count }}</div>
      </div>
</template>

<script>
export default {
  name: 'counter',
  computed: {
    count () {
      return this.$store.getters['counter/count']
    }
  },
  methods: {
    increase () {
      this.$store.dispatch('counter/increment')
    },
    decrease () {
      if (this.$store.getters['counter/count'] > 0) {
        this.$store.dispatch('counter/decrement')
      } else {
        console.log('これ以上は減算出来ません')
      }
    }
  }
}
</script>
