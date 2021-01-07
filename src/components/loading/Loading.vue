<template>
	<div class="var-loading">
		<div class="var-loading__cube var-loading__cube-large">
			<div :style="{ backgroundColor: color }" class="var-loading__cube-item var-loading__cube-item-large"></div>
			<div :style="{ backgroundColor: color }" class="var-loading__cube-item var-loading__cube-item-large"></div>
			<div :style="{ backgroundColor: color }" class="var-loading__cube-item var-loading__cube-item-large"></div>
			<div :style="{ backgroundColor: color }" class="var-loading__cube-item var-loading__cube-item-large"></div>
		</div>
	</div>
</template>

<script>
import { props } from './props'

export default {
	name: 'AppLoading',
	props,
}
</script>

<style lang="less">
@import './loading';
</style>
