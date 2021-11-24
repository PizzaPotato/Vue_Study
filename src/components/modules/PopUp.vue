<template>
  <div class="popup">
    <div class="modal__box">
      <span class="modal__message">{{ getMessage }}</span>
      <div class="modal__action">
        <div class="modal__btn">キャンセル</div>
        <div class="modal__btn modal__btn--success">OK</div> 
      </div>
    </div>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.modal__box {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 200px;
  padding: 32px;
  background-color: #fff;
  border-radius: 4px;
  transform: translate(-50%, -50%);
}

.modal__message {
  font-size: 24px;
}

.modal__action {
  display: flex;
  justify-content: flex-end;
}

.modal__btn {
  width: 130px;
  margin-left: 16px;
  padding: 8px;
  line-height: 1.5;
  font-weight: bold;
  border: 1px solid rgb(196, 196, 196);
  cursor: pointer;
}

.modal__btn--success {
  color: #fff;
  border: none;
  background-color: rgb(60, 140, 245);
}
</style>
