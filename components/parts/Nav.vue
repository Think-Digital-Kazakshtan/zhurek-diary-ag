<template>
	<div class="sidebar-list">
		<ul>
			<li>
				<div class="home-list-wrapper">
					<NuxtLink to="/" class="sidebar-item">
						<div id="home" class="sidebar-item__visible">
							<div class="sidebar-item-bage">
								<img src="~/assets/img/icons/home-red.svg" alt="" />
							</div>
							<div class="sidebar-item-text">Главная</div>
						</div>
					</NuxtLink>
				</div>
			</li>
			<li>
				<div class="home-list-wrapper">
					<NuxtLink to="/diary" class="sidebar-item">
						<div id="school" class="sidebar-item__visible">
							<div class="sidebar-item-bage">
								<img src="~/assets/img/icons/diary-red.svg" width="30px" alt="" />
							</div>
							<div class="sidebar-item-text">Дневник аг</div>
						</div>
					</NuxtLink>
				</div>
			</li>
			<li>
				<div class="home-list-wrapper">
					<NuxtLink to="/calendar" class="sidebar-item">
						<div class="sidebar-item__visible">
							<div class="sidebar-item-bage">
								<img src="~/assets/img/icons/calendar-red.svg" width="30px" alt="" />
							</div>
							<div class="sidebar-item-text">Календарь</div>
						</div>
					</NuxtLink>
				</div>
			</li>
			<li>
				<div class="home-list-wrapper">
					<NuxtLink to="/analyses" class="sidebar-item">
						<div class="sidebar-item__visible">
							<div class="sidebar-item-bage">
								<img src="~/assets/img/icons/analyses-red.svg" width="30px" alt="" />
							</div>
							<div class="sidebar-item-text">Анализы</div>
						</div>
					</NuxtLink>
				</div>
			</li>
			<li>
				<div class="home-list-wrapper">
					<NuxtLink to="/prescription" class="sidebar-item">
						<div class="sidebar-item__visible">
							<div class="sidebar-item-bage">
								<img src="~/assets/img/icons/prescription-red.svg" width="30px" alt="" />
							</div>
							<div class="sidebar-item-text">Назначения</div>
						</div>
					</NuxtLink>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
