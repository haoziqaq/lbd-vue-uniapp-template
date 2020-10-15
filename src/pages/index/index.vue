<template>
	<div class="content">
    <lbd-modal v-model="isShowModal">
      <div class="title">{{ time | formatDate('yyyy-MM-dd') }}</div>
    </lbd-modal>
	</div>
</template>

<script>
import Modal from 'lbd-ui/src/Modal/Modal'
export default {
  data() {
    return {
      isShowModal: true,
      time: new Date()
    }
  },
  components: {
    LbdModal: Modal
  }
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
  color: #8f8f94;
}
</style>
