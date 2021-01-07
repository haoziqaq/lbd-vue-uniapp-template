/**
* @fileOverview 提示框
* @platform MP | WEB
* @author 齐皓
* @date 2020/10/20
*/
<template>
  <div
    class="lbd-dialog"
    v-if="isShowModal"
    :style="{'z-index': zIndex}"
    :class="[modalFade]"
    @animationend="handleAnimationend"
    catchtouchmove
  >
    <div
      class="dialog-container lbd-pop-in"
      :class="[dialogPop]"
      :style="{'width': width}"
    >
      <div class="dialog-title" v-if="title">{{ title }}</div>
      <div
        class="dialog-message"
        :style="{
        'text-align': messageAlign,
        'padding-top': title ? '8px' : '30px'
        }"
      >
        {{ message }}
      </div>
      <div class="dialog-button-container">
        <div
          class="dialog-button dialog-cancel"
          :style="{'color': cancelButtonColor}"
          v-if="showCancelButton"
          @click="cancel"
        >
          {{ cancelButtonText }}
        </div>
        <div
          class="dialog-button dialog-confirm"
          :style="{'color': confirmButtonColor}"
          @click="confirm"
        >
          {{ confirmButtonText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import context from '../context'
export default {
  name: 'AppDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    width: {
      type: String,
      default: '80vw'
    },
    messageAlign: {
      type: String,
      default: 'center'
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    cancelButtonColor: {
      type: String,
      default: '#000'
    },
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    confirmButtonColor: {
      type: String,
      default: '#ee0a24'
    },
    message: {
      type: String,
      default: '默认提示信息'
    },
    //内置属性
    _dynamic: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        if (this.value) {
          this.modalFade = 'lbd-fade-in'
          this.dialogPop = 'lbd-pop-in'
          this.isShowModal = true
          context.zIndex++
          context.lockCount++
          this.zIndex = context.zIndex
          document && document.body.classList.add('lbd-overflow-hidden')
        } else {
          this.modalFade = 'lbd-fade-out'
          this.dialogPop = 'lbd-pop-out'
          if (oldValue !== undefined) {
            context.lockCount--
            context.lockCount === 0 && document && document.body.classList.remove('lbd-overflow-hidden')
          }
        }
      }
    }
  },
  data: () => ({
    zIndex: context.zIndex,
    preventTouch: false,
    isShowModal: false,
    modalFade: 'lbd-fade-in',
    dialogPop: 'lbd-pop-in',
  }),
  methods: {
    handleAnimationend() {
      if (!this.value) {
        this.preventTouch = false
        this.isShowModal = false
        this.$nextTick(() => this._dynamic && this.$destroy())
      }
    },
    cancel() {
      if (this.preventTouch) {
        return
      }
      this.preventTouch = true
      this.$emit('cancel')
      this.$emit('input', false)
    },
    confirm() {
      if (this.preventTouch) {
        return
      }
      this.preventTouch = true
      this.$emit('confirm')
      this.$emit('input', false)
    }
  },
  destroyed() {
    if (this.value) {
      context.lockCount--
      context.lockCount === 0 && document && document.body.classList.remove('lbd-overflow-hidden')
    }
  }
}
</script>

<style lang="less">
@import "../styles/common";
@import "../styles/animation";
.lbd-dialog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .8);

  .dialog-container {
    overflow: hidden;
    font-size: 16px;
    background-color: #fff;
    border-radius: 16px;

    .dialog-title {
      padding-top: 26px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;
    }

    .dialog-message {
      flex: 1;
      max-height: 60vh;
      padding: 30px 26px 20px;
      overflow-y: auto;
      font-size: 14px;
      line-height: 20px;
      white-space: pre-wrap;
      color: #646566;
    }

    .dialog-button-container {
      display: flex;

      .dialog-button {
        flex: 1;
        line-height: 48px;
        text-align: center;
        height: 48px;
        font-size: 16px;
        background: #fff;
        border: none;
        outline: none;

        &:active {
          background-color: rgb(230,230,230)
        }
      }
    }
  }
}
</style>
