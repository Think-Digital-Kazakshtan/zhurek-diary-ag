<template>
	<div class="navbar">
		<div class="navbar__item">
			<NuxtLink to="/">
				<img src="~/assets/img/icons/home-red.svg" alt="" />
				<span>Главная</span>
			</NuxtLink>
		</div>
		<div class="navbar__item">
			<NuxtLink to="/diary">
				<img src="~/assets/img/icons/diary-red.svg" alt="" />
				<span>Дневник аг</span>
			</NuxtLink>
		</div>
		<div class="navbar__item">
			<NuxtLink to="/calendar">
				<img src="~/assets/img/icons/calendar-red.svg" alt="" />
				<span>Календарь</span>
			</NuxtLink>
		</div>
		<div class="navbar__item">
			<NuxtLink to="/analyses">
				<img src="~/assets/img/icons/analyses-red.svg" alt="" />
				<span>Анализы</span>
			</NuxtLink>
		</div>
		<div class="navbar__item">
			<NuxtLink to="/prescription">
				<img src="~/assets/img/icons/prescription-red.svg" alt="" />
				<span>Назначения</span>
			</NuxtLink>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.navbar {
	@apply fixed bottom-0 left-0 z-50 flex xl:hidden w-full items-center justify-between bg-white;
	&__item {
		@apply flex flex-1 items-center justify-center border-r border-darkWhiteBg  text-center text-selectedText transition-all  duration-300  hover:bg-bgGradient2 hover:text-white;
		a {
			@apply flex h-full w-full flex-col items-center justify-center p-5;
		}
		&:hover {
			img {
				@apply contrast-200 grayscale invert filter;
			}
		}
		img {
			@apply w-7;
		}
		span {
			@apply mt-1 hidden text-center text-sm sm:block;
		}
		&:last-of-type {
			@apply border-none;
		}
	}
}
</style>
