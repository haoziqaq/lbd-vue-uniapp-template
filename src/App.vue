<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
  view,
  scroll-view,
  swiper,
  swiper-item,
  movable-area,
  movable-view,
  cover-view,
  cover-image,
  icon,
  text,
  rich-text,
  progress,
  button,
  checkbox-group,
  checkbox,
  form,
  input,
  label,
  picker,
  picker-view,
  radio-group,
  radio,
  slider,
  switch,
  textarea,
  navigator,
  functional-page-navigator,
  image,
  video,
  camera,
  live-player,
  live-pusher,
  map,canvas,
  open-data,
  web-view,
  ad {
    box-sizing: border-box;
  }
  image {
    height: 0;
  }
  .ell-1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ell-2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
  }
  .ell-3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical;
  }
  .wave {
    position: relative;
    overflow: hidden;

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform .3s, opacity .5s;
    }

    &:active:after {
      transform: scale(0, 0);
      opacity: .3;
      transition: 0s;
    }

    &:active {
      opacity: .8;
    }
  }
</style>
