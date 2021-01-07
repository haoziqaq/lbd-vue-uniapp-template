/**
* @fileOverview 选项卡组
* @platform MP
* @author 齐皓
* @date 2020/10/17
*/
<template>
  <scroll-view
    class="lbd-tabs"
    :scroll-x="true"
    :scroll-with-animation="true"
    :scroll-left="scrollLeft"
  >
    <div
      class="lbd-tab"
      :style="{
        'width': tabWidth,
        'color': value === option.id ? activeColor : color
      }"
      :id="`lbd-tab-${option.id}`"
      v-for="option in options"
      :key="option.id"
      @click="changeTab(option)"
    >
      {{ option.title }}
    </div>
    <div
      class="lbd-indicator"
      :style="{
        'background-color': activeColor,
        'width': `${tabSizes[`lbd-tab-${value}`].width}px`,
        'left': `${tabSizes[`lbd-tab-${value}`].left - 12}px`
      }"
    ></div>
  </scroll-view>
</template>
<script>
export default {
  name: 'AppTabs',
  props: {
    value: {
      type: Number | Boolean | String,
      required: true
    },
    color: {
      type: String,
      default: '#000'
    },
    activeColor: {
      type: String,
      default: 'rgb(236,65,65)'
    },
    options: {
      type: Array,
      default: []
    }
  },
  watch: {
    options: {
      immediate: true,
      deep: true,
      handler() {
        this.tabWidth = this.options.length <= 5
          ? `${100 / this.options.length}%`
          : 'auto'
      }
    },
    value: {
      handler() {
        this.changeScrollLeft()
      }
    }
  },
  data: () => ({
    tabWidth: '',
    scrollLeft: 0,
    containerLeft: 0,
    containerWidth: 0,
    tabSizes: {}
  }),
  methods: {
    changeTab({ id }) {
      this.$emit('input', id)
      this.$emit('change', id)
    },
    changeScrollLeft() {
      const { width, left } = this.tabSizes[`lbd-tab-${this.value}`]
      this.scrollLeft = left - this.containerWidth / 2 + width / 2
    },
    queryElementSize() {
      const selectorQuery = uni.createSelectorQuery().in(this)
      selectorQuery.select('.lbd-tabs').boundingClientRect(({ left, width }) => {
        this.containerLeft = left
        this.containerWidth = width
      })
      selectorQuery.selectAll('.lbd-tab').boundingClientRect((data) => {
        data.forEach((tab) => {
          this.tabSizes[tab.id] = {
            left: tab.left - this.containerLeft,
            width: tab.width
          }
        })
      }).exec()
    }
  },
  mounted() {
    this.queryElementSize()
  }
}
</script>

<style lang="less">
.lbd-tabs {
  position: relative;
  width: 100%;
  height: 100upx;
  font-size: 34upx;
  white-space: nowrap;
  padding: 0 12px;

  .lbd-tab {
    display: inline-block;
    padding: 0 12px;
    height: 100upx;
    line-height: 100upx;
    text-align: center;
  }

  .lbd-indicator {
    position: absolute;
    transition: .3s all;
    height: 2px;
    top: 92upx;
  }
}
</style>
