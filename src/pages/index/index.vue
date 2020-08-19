<template>
	<div class="content">
		<img class="logo" src="../../static/images/logo.png"/>
		<div>
			<div class="title">{{ time | formatDate('yyyy-MM-dd') }}</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      time: new Date()
    }
  },
  onLoad() {
  },
  methods: {

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
