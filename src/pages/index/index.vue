<template>
  <div>
    <app-loading v-if="loading"></app-loading>

    <app-tabs :options="options" v-model="active" v-else></app-tabs>
  </div>
</template>

<script>
import AppLoading from '../../components/loading/Loading';
import AppTabs from '../../components/tabs/Tabs'
export default {
  data: () => ({
    loading: true,
    active: 1,
    options: [
      {
        id: 1,
        title: '测试1'
      },
      {
        id: 2,
        title: '测试2'
      }
    ]
  }),
  components: {
    AppLoading,
    AppTabs
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
</script>

<style lang="less">
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
