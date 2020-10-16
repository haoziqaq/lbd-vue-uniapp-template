<template>
	<div class="content">
    <button @click="isShowModal = true">show</button>
    <lbd-modal v-model="isShowModal">
      <div class="title" @click="isShowModal = false">close</div>
    </lbd-modal>
	</div>
</template>

<script>
import Modal from 'lbd-ui/src/Modal/Modal'
export default {
  data() {
    return {
      isShowModal: true,
    }
  },
  components: {
    LbdModal: Modal
  },
}
</script>

<style>
.content {
  text-align: center;
  height: 400upx;
}

.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}

.title {
  font-size: 36upx;
  color: #fff;
}
</style>
