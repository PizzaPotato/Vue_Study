<template>
    <div class="counter">
      <h1>Storeの機能練習</h1>
      <button @click="increase">increase</button>
      <button @click="decrease">decrease</button><br>
      <div>現在のカウントは：{{ count }}</div>
      <PopUp v-if="isOpen"/>
    </div>

</template>

<script>
import PopUp from './PopUp'

export default {
  name: 'counter',
  components: {
    PopUp
  },
  computed: {
    count () {
      return this.$store.getters['counter/count']
    },
    isOpen () {
      return this.$store.getters['popup/isOpen']
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
        const payload = {
          message: 'これ以上の減算は出来ません。',
          isOpen: true
        }
        this.$store.dispatch('popup/setMessage', payload)
        console.log(this.$store.getters['popup/isOpen'])
      }
    }
  }
}
</script>
