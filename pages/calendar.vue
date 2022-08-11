<template>
	<div>
		<!-- HEAD -->
		<section class="calendar head personalArea-main">
			<NuxtLink to="/" class="btn btn-back">
				<span class="btn-content">
					<div class="btn__circle">
						<svg width="17" height="33" viewBox="0 0 17 33" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M0.35665 0.861542C0.469418 0.746939 0.603382 0.656013 0.750868 0.593974C0.898354 0.531934 1.05647 0.5 1.21615 0.5C1.37583 0.5 1.53394 0.531934 1.68142 0.593974C1.82891 0.656013 1.96287 0.746939 2.07564 0.861542L16.6434 15.629C16.7564 15.7434 16.8461 15.8792 16.9073 16.0287C16.9685 16.1782 17 16.3385 17 16.5003C17 16.6622 16.9685 16.8225 16.9073 16.972C16.8461 17.1215 16.7564 17.2573 16.6434 17.3716L2.07564 32.1391C1.84769 32.3702 1.53852 32.5 1.21615 32.5C0.893772 32.5 0.584603 32.3702 0.35665 32.1391C0.128698 31.908 0.000635598 31.5946 0.000635598 31.2678C0.000635598 30.941 0.128698 30.6276 0.35665 30.3965L14.0673 16.5003L0.35665 2.60411C0.243597 2.48979 0.153901 2.35399 0.0927012 2.20448C0.0315012 2.05497 0 1.89469 0 1.73282C0 1.57096 0.0315012 1.41068 0.0927012 1.26117C0.153901 1.11166 0.243597 0.975857 0.35665 0.861542Z" fill="white" />
						</svg>
					</div>
					<span>Назад</span>
				</span>
			</NuxtLink>
			<div class="head-main">
				<div class="head-title">
					<div class="head-title-icon">
						<img src="~/assets/img/personalArea/icon3-red.png" alt="" />
					</div>
					<div class="head-title-content">
						<h1>Календарь</h1>
						<p>Будьте всегда в курсе о своих записях к врачам, на анализы и получение процедур</p>
					</div>
					<p class="mobile">Будьте всегда в курсе о своих записях к врачам, на анализы и получение процедур</p>
				</div>
				<button class="add-froze btn-add-note">
					Добавить запись
					<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.5 9C13.5 8.17157 14.1716 7.5 15 7.5C15.8284 7.5 16.5 8.17157 16.5 9V21C16.5 21.8284 15.8284 22.5 15 22.5C14.1716 22.5 13.5 21.8284 13.5 21V9Z" fill="#E0A4B6" />
						<path d="M21 13.5C21.8284 13.5 22.5 14.1716 22.5 15C22.5 15.8284 21.8284 16.5 21 16.5L9 16.5C8.17157 16.5 7.5 15.8284 7.5 15C7.5 14.1716 8.17157 13.5 9 13.5L21 13.5Z" fill="#E0A4B6" />
						<rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#E0A4B6" />
					</svg>
				</button>
			</div>
		</section>
		<!-- END HEAD -->
		<!-- MAIN -->
		<section class="diary-main col-main calendar-main">
			<div class="calendar-holder">
				<input type="date" id="calendar4" class="hidden" />
			</div>
			<h2>Мои записи</h2>
			<div class="diary-container">
				<span class="text__xs">Сегодня</span>
				<div class="details">
					<div class="details-item">
						<div class="details-item-main">
							<div class="col-item">
								<p class="subtitle">Дата, время:</p>
								<h3 class="title">05.06.2022, 09:00</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Услуга:</p>
								<h3 class="title">Сдача анализов</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Врач:</p>
								<h3 class="title">Медсестринский пункт</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Адрес:</p>
								<h3 class="title">г. Алматы, улица Розыбакиева 256а</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Кабинет:</p>
								<h3 class="title">10</h3>
							</div>
						</div>
					</div>
					<div class="details-item">
						<div class="details-item-main">
							<div class="col-item">
								<p class="subtitle">Дата, время:</p>
								<h3 class="title">05.06.2022, 11:30</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Услуга:</p>
								<h3 class="title">Прием врача</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Врач:</p>
								<h3 class="title">Динара Мухлибаева, кардиолог</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Адрес:</p>
								<h3 class="title">г. Алматы, улица Розыбакиева 256а</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Кабинет:</p>
								<h3 class="title">205</h3>
							</div>
						</div>
					</div>
					<span class="text__xs">Завтра</span>
					<div class="details-item">
						<div class="details-item-main">
							<div class="col-item">
								<p class="subtitle">Дата, время:</p>
								<h3 class="title">06.06.2022, 09:00</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Услуга:</p>
								<h3 class="title">Процедуры</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Врач:</p>
								<h3 class="title">Медсестринский пункт</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Адрес:</p>
								<h3 class="title">г. Алматы, улица Розыбакиева 256а</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Кабинет:</p>
								<h3 class="title">10</h3>
							</div>
						</div>
					</div>
					<div class="details-item">
						<div class="details-item-main">
							<div class="col-item">
								<p class="subtitle">Дата, время:</p>
								<h3 class="title">06.06.2022, 09:00</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Услуга:</p>
								<h3 class="title">Рентген, Узи</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Врач:</p>
								<h3 class="title">-</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Адрес:</p>
								<h3 class="title">г. Алматы, улица Розыбакиева 256а</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Кабинет:</p>
								<h3 class="title">101</h3>
							</div>
						</div>
					</div>
					<span class="text__xs">25.06.2022</span>
					<div class="details-item">
						<div class="details-item-main">
							<div class="col-item">
								<p class="subtitle">Дата, время:</p>
								<h3 class="title">25.06.2022, 11:30</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Услуга:</p>
								<h3 class="title">Прием врача</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Врач:</p>
								<h3 class="title">Динара Мухлибаева, кардиолог</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Адрес:</p>
								<h3 class="title">г. Алматы, улица Розыбакиева 256а</h3>
							</div>
							<div class="col-item">
								<p class="subtitle">Кабинет:</p>
								<h3 class="title">205</h3>
							</div>
						</div>
					</div>
					<div class="show-more">
						<div class="show-more-btn">
							<button class="btn-showMore btn-square-blue" type="button">Показать еще</button>
						</div>
						<div class="hidden-details hidden">
							<span class="text__xs">25.06.2022</span>
							<div class="details-item">
								<div class="details-item-main">
									<div class="col-item">
										<p class="subtitle">Дата, время:</p>
										<h3 class="title">05.06.2022, 09:00</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Услуга:</p>
										<h3 class="title">Сдача анализов</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Врач:</p>
										<h3 class="title">Медсестринский пункт</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Адрес:</p>
										<h3 class="title">г. Алматы, улица Розыбакиева 256а</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Кабинет:</p>
										<h3 class="title">10</h3>
									</div>
								</div>
							</div>
							<div class="details-item">
								<div class="details-item-main">
									<div class="col-item">
										<p class="subtitle">Дата, время:</p>
										<h3 class="title">05.06.2022, 11:30</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Услуга:</p>
										<h3 class="title">Прием врача</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Врач:</p>
										<h3 class="title">Динара Мухлибаева, кардиолог</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Адрес:</p>
										<h3 class="title">г. Алматы, улица Розыбакиева 256а</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Кабинет:</p>
										<h3 class="title">205</h3>
									</div>
								</div>
							</div>
							<div class="details-item">
								<div class="details-item-main">
									<div class="col-item">
										<p class="subtitle">Дата, время:</p>
										<h3 class="title">06.06.2022, 09:00</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Услуга:</p>
										<h3 class="title">Процедуры</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Врач:</p>
										<h3 class="title">Медсестринский пункт</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Адрес:</p>
										<h3 class="title">г. Алматы, улица Розыбакиева 256а</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Кабинет:</p>
										<h3 class="title">10</h3>
									</div>
								</div>
							</div>
							<span class="text__xs">25.06.2022</span>
							<div class="details-item">
								<div class="details-item-main">
									<div class="col-item">
										<p class="subtitle">Дата, время:</p>
										<h3 class="title">06.06.2022, 09:00</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Услуга:</p>
										<h3 class="title">Рентген, Узи</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Врач:</p>
										<h3 class="title">-</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Адрес:</p>
										<h3 class="title">г. Алматы, улица Розыбакиева 256а</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Кабинет:</p>
										<h3 class="title">101</h3>
									</div>
								</div>
							</div>
							<div class="details-item">
								<div class="details-item-main">
									<div class="col-item">
										<p class="subtitle">Дата, время:</p>
										<h3 class="title">05.06.2022, 11:30</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Услуга:</p>
										<h3 class="title">Прием врача</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Врач:</p>
										<h3 class="title">Динара Мухлибаева, кардиолог</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Адрес:</p>
										<h3 class="title">г. Алматы, улица Розыбакиева 256а</h3>
									</div>
									<div class="col-item">
										<p class="subtitle">Кабинет:</p>
										<h3 class="title">205</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- END MAIN -->
	</div>
</template>

<script>
export default {}
</script>

<style></style>
