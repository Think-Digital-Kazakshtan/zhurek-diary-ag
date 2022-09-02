<template>
	<div class="authorization-page">

		<section>
			<div class="content vertical-distance">
				<div class="">
					<div class="tabs z-20 mb-20 w-full bg-white shadow 2xl:w-[70%]">
						<div class="tabs__nav w-full">
							<ul class="w-full">
								<li class="rounded bg-white sm:rounded-tr-xl">
									<a href="javascript:void(0)" @click.prevent="tab = 1" class="tab__9 tab-toggle rounded border sm:rounded-tr-xl" :class="{ active: tab == 1 }">Войти</a>
								</li>
								<li class="rounded bg-white sm:rounded-tl-xl">
									<a href="javascript:void(0)" @click.prevent="tab = 2" class="tab__8 tab-toggle rounded border sm:rounded-tl-xl" :class="{ active: tab == 2 }">Регистрация</a>
								</li>
							</ul>
						</div>
						<TransitionGroup class="tabs__wrapper w-full" tag="div" name="fade" mode="out-in">
							<div v-if="tab == 1" class="tabs__wrapper__item tab-9" key="auth">
								<PartsAuthLogin @registration="tab = 2" />
							</div>
							<div v-if="tab == 2" class="tabs__wrapper__item tab-8" key="register">
								<PartsAuthRegister @login="tab = 1" />
							</div>
						</TransitionGroup>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	layout: 'auth',
	auth: 'guest',
	data: () => ({
		tab: 1
	})
}
</script>

<style></style>
