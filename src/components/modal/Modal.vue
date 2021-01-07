/**
* @fileOverview 模态框
* @platform MP | WEB
* @author 齐皓
* @date 2020/10/10
*/
<template>
  <div
    class="lbd-modal"
    v-if="isShowModal"
    :style="{'background-color': modalColor, 'z-index': zIndex}"
    :class="[modalFade]"
    @click="closeModal"
    @animationend="handleAnimationend"
    catchtouchmove
  >
    <div class="main" @click.stop>
      <slot/>
    </div>
    <div class="close" @click="$emit('input', false)">
      <slot name="close"/>
    </div>
  </div>
</template>

<script>
import context from '../context'
export default {
  name: 'AppModal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    modalColor: {
      type: String,
      default: 'rgba(0, 0, 0, .8)'
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        if (this.value) {
          this.modalFade = 'lbd-fade-in'
          this.isShowModal = true
          context.zIndex++
          context.lockCount++
          this.zIndex = context.zIndex
          document && document.body.classList.add('lbd-overflow-hidden')
        } else {
          this.modalFade = 'lbd-fade-out'
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
    isShowModal: false,
    modalFade: 'lbd-fade-in'
  }),
  methods: {
    closeModal() {
      if (this.closeOnClickOverlay) {
        this.$emit('input', false)
      }
    },
    handleAnimationend() {
      if (!this.value) {
        this.isShowModal = false
      }
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
.lbd-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .close {
    margin-top: 2vh;
  }
}
</style>
