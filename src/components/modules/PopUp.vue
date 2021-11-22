<template>
      <div class="popup">
        <h1>{{ getMessage }}</h1>
      </div>
</template>

<script>
export default {
  name: 'Popup',
  computed: {
    getMessage () {
      return this.$store.getters['popup/getMessage']
    }
  },
  methods: {
    setMessage () {
      this.$store.dispatch('popup/setMessage')
    }
  }
}
</script>

<style>
#popup {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
