<template>
	<!-- Slider main container -->
	<div class="swiper">
		<!-- Additional required wrapper -->
		<div class="swiper-wrapper">
			<!-- Slides -->
			<div class="swiper-slide"><img src="https://via.placeholder.com/1600x400" alt=""></div>
			<div class="swiper-slide"><img src="https://via.placeholder.com/1600x400" alt=""></div>
			<div class="swiper-slide"><img src="https://via.placeholder.com/1600x400" alt=""></div>
			...
		</div>
		<div class="swiper-pagination"></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
		<div class="swiper-scrollbar"></div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$nuxt.$swiper('.swiper', {})
	}
}
</script>

<style></style>
