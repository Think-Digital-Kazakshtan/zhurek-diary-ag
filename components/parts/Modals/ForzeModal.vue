<template>
	<PartsModalsModal name="forze" class="add-forze-modal">
		<div class="add-forze-main">
			<h2>Добавьте результаты своего давления</h2>
			<button @click.prevent="$nuxt.$emit('close-modal', 'forze')" class="close-modal-forze">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.4328 0.612039C13.2488 -0.204013 14.5719 -0.204013 15.388 0.612039C16.204 1.42809 16.204 2.75117 15.388 3.56722L3.56722 15.388C2.75117 16.204 1.42809 16.204 0.612039 15.388C-0.204013 14.5719 -0.204013 13.2488 0.612039 12.4328L12.4328 0.612039Z" fill="white" />
					<path d="M0.612039 3.56722C-0.204013 2.75117 -0.204013 1.42809 0.612039 0.612039C1.42809 -0.204013 2.75117 -0.204013 3.56722 0.612039L15.388 12.4328C16.204 13.2488 16.204 14.5719 15.388 15.388C14.5719 16.204 13.2488 16.204 12.4328 15.388L0.612039 3.56722Z" fill="white" />
				</svg>
			</button>
			<form action="" class="add-forze-form">
				<div class="numbs-inputs">
					<div class="date-inputs">
						<div class="date-inputs-item">
							<h3>Время</h3>
							<input type="time" placeholder="00:00" class="forze-input" />
							<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.1252 16.1948H0.878447C0.646443 16.1948 0.423942 16.2899 0.259891 16.4592C0.0958398 16.6284 0.00367662 16.858 0.00367662 17.0974C0.00367662 17.3368 0.0958398 17.5664 0.259891 17.7356C0.423942 17.9049 0.646443 18 0.878447 18H13.1252C13.3572 18 13.5797 17.9049 13.7438 17.7356C13.9078 17.5664 14 17.3368 14 17.0974C14 16.858 13.9078 16.6284 13.7438 16.4592C13.5797 16.2899 13.3572 16.1948 13.1252 16.1948ZM0.878447 14.3896H0.957176L4.60497 14.0466C5.00456 14.0055 5.37829 13.8238 5.66344 13.5321L13.5364 5.40864C13.8419 5.07554 14.0071 4.63105 13.9956 4.17255C13.9841 3.71405 13.797 3.27894 13.4751 2.96257L11.0783 0.48943C10.7654 0.186241 10.3555 0.012275 9.92648 0.000625288C9.49745 -0.0110245 9.07922 0.140455 8.75138 0.426248L0.878447 8.54971C0.595691 8.84393 0.419634 9.22955 0.379828 9.64186L0.00367662 13.4057C-0.00810745 13.5379 0.00851788 13.6712 0.0523674 13.796C0.0962169 13.9208 0.166211 14.0341 0.25736 14.1278C0.339099 14.2115 0.436037 14.2777 0.542617 14.3226C0.649197 14.3675 0.763321 14.3903 0.878447 14.3896ZM9.86234 1.75308L12.2505 4.2172L10.5009 5.97728L8.15653 3.55829L9.86234 1.75308Z" fill="#5B6373" />
							</svg>
						</div>
						<div class="date-inputs-item">
							<h3>Дата</h3>
							<input type="date" placeholder="Выберите дату" class="forze-input calendar2" />
							<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 1L5 5L1 0.999999" stroke="#333638" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
					</div>
					<div class="health-inputs">
						<div class="health-inputs-item">
							<h3>Верхнее давление</h3>
							<div class="forze-inputs-container">
								<input type="number" id="up_input" placeholder="_______" class="forze-input" min="1" max="300" maxlength="3" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
								<label for="up_input">мм.рт.ст</label>
							</div>
						</div>
						<div class="health-inputs-item">
							<h3>Нижнее давление</h3>
							<div class="forze-inputs-container">
								<input type="number" id="down_input" placeholder="_______" class="forze-input" min="1" max="300" maxlength="3" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
								<label for="down_input">мм.рт.ст</label>
							</div>
						</div>
						<div class="health-inputs-item pulse">
							<h3>Пульс</h3>
							<div class="forze-inputs-container">
								<input type="number" id="pulse_input" placeholder="_______" class="forze-input" min="1" max="300" maxlength="3" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
								<label for="pulse_input">уд/мин</label>
							</div>
						</div>
					</div>
				</div>
				<div class="content-inputs">
					<div class="content-inputs-item">
						<h3>Ваше самочувствие</h3>
						<div class="content-inputs-container">
							<button class="btn-add-data" type="button">
								Добавить симптом
								<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.5 1.5C5.5 0.947715 5.94771 0.5 6.5 0.5C7.05228 0.5 7.5 0.947715 7.5 1.5V12.5C7.5 13.0523 7.05228 13.5 6.5 13.5C5.94771 13.5 5.5 13.0523 5.5 12.5V1.5Z" fill="white" />
									<path d="M1 8C0.447715 8 2.10734e-08 7.55228 0 7C-2.10734e-08 6.44771 0.447715 6 1 6L12 6C12.5523 6 13 6.44771 13 7C13 7.55228 12.5523 8 12 8H1Z" fill="white" />
								</svg>
							</button>
							<ul class="add-data-list hidden">
								<li class="add-data-item">Головная боль</li>
								<li class="add-data-item">Головная боль легкая</li>
								<li class="add-data-item">Головная боль с приступами</li>
								<li class="add-data-item">Головокружение</li>
								<li class="add-data-item">Тремор в теле</li>
								<li class="add-data-item">Слабость</li>
							</ul>
						</div>
					</div>
					<div class="content-inputs-item">
						<h3>Примечание</h3>
						<div class="content-inputs-container">
							<button class="btn-add-data" type="button">
								Добавить симптом
								<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.5 1.5C5.5 0.947715 5.94771 0.5 6.5 0.5C7.05228 0.5 7.5 0.947715 7.5 1.5V12.5C7.5 13.0523 7.05228 13.5 6.5 13.5C5.94771 13.5 5.5 13.0523 5.5 12.5V1.5Z" fill="white" />
									<path d="M1 8C0.447715 8 2.10734e-08 7.55228 0 7C-2.10734e-08 6.44771 0.447715 6 1 6L12 6C12.5523 6 13 6.44771 13 7C13 7.55228 12.5523 8 12 8H1Z" fill="white" />
								</svg>
							</button>
							<ul class="add-data-list hidden">
								<li class="add-data-item">Принял кардиомагнил</li>
								<li class="add-data-item">Аритмия, бисопролол</li>
								<li class="add-data-item">Бег 20 минут</li>
								<li class="add-data-item">Аритмия</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="comment-container">
					<div class="comment-item">
						<h3>Ваш комментарий</h3>
						<textarea name="comment" class="comment-input" placeholder="Напишите свой комментарий"></textarea>
					</div>
					<div class="submit-forze">
						<button class="btn">
							<span class="btn-content">
								<span>Добавить</span>
								<div class="btn__circle">
									<i class="bi bi-chevron-right"></i>
								</div>
							</span>
						</button>
					</div>
				</div>
			</form>
		</div>
	</PartsModalsModal>
</template>

<script>
export default {}
</script>

<style></style>
