<template>
	<div class="content">
    <button @click="isShowDialog = true">show</button>

    <lbd-dialog
      v-model="isShowDialog"
      title="提示"
      message="你好啊~"
      :show-cancel-button="true"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
	</div>
</template>

<script>
import Dialog from 'lbd-ui/src/Dialog/Dialog'
export default {
  data() {
    return {
      isShowDialog: true
    }
  },
  components: {
    LbdDialog: Dialog,
  },
  methods: {
    handleConfirm() {
      console.log('confirm')
    },
    handleCancel() {
      console.log('cancel')
    }
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
  font-size: 34upx;
  color: #fff;
}
</style>
