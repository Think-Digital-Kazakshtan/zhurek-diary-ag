<template>
	<div>
		<section class="personalArea-main">
			<div class="personalArea-wrapper">
				<NuxtLink to="/profile" class="personalArea-item">
					<div class="personalArea-item-content">
						<h3>Профиль</h3>
						<p>
							Ваши данные, профиль здоровья,
							<br />
							история болезни
						</p>
						<div class="personalArea-item-icon">
							<img src="~/assets/img/personalArea/icon1.png" alt="" />
						</div>
					</div>
				</NuxtLink>
				<NuxtLink to="/diary" class="personalArea-item">
					<div class="personalArea-item-content">
						<h3>Дневник АГ</h3>
						<p>
							Следите за своим давлением, записывая
							<br />
							в календарь свои замеры давления
						</p>
						<div class="personalArea-item-icon">
							<img src="~/assets/img/personalArea/icon2.png" alt="" />
						</div>
					</div>
				</NuxtLink>
				<NuxtLink to="/calendar" class="personalArea-item">
					<div class="personalArea-item-content">
						<h3>Календарь</h3>
						<p>
							Записывайтесь вовремя к врачу и на сдачу
							<br />
							анализов прямо с личного кабинета
						</p>
						<div class="personalArea-item-icon">
							<img src="~/assets/img/personalArea/icon3.png" alt="" />
						</div>
					</div>
				</NuxtLink>
				<NuxtLink to="/analyses" class="personalArea-item">
					<div class="personalArea-item-content">
						<h3>Анализы</h3>
						<p>
							Просматривайте свои готовые анализы
							<br />
							и их историю
						</p>
						<div class="personalArea-item-icon">
							<img src="~/assets/img/personalArea/icon4.png" alt="" />
						</div>
					</div>
				</NuxtLink>
				<NuxtLink to="/prescription" class="personalArea-item">
					<div class="personalArea-item-content">
						<h3>Назначения</h3>
						<p>
							Просматривайте назначения врача,
							<br />
							препараты и историю назначений
						</p>
						<div class="personalArea-item-icon">
							<img src="~/assets/img/personalArea/icon5.png" alt="" />
						</div>
					</div>
				</NuxtLink>
				<button @click.prevent="$nuxt.$emit('open-modal', 'share')" class="personalArea-item open-share-links" type="button">
					<div class="personalArea-item-content">
						<h3>Поделиться</h3>
						<p>
							Делитесь результатами анализов,
							<br />
							назначениями, историей болезни и тд.
						</p>
						<div class="personalArea-item-icon">
							<img src="~/assets/img/personalArea/icon6.png" alt="" />
						</div>
					</div>
				</button>
        <PartsModalsShareModal name="share" />
			</div>
		</section>
	</div>
</template>
<script>
export default {
	name: 'HomePage',
}
</script>
