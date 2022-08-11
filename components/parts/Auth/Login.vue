<template>
	<div class="entry">
		<div class="entry__input">
			<div class="entry__input__left">
				<label for="">Ваш номер телефона</label>
				<input type="text" placeholder="" />
			</div>
			<div class="entry__input__right">
				<label for="">Введите пароль</label>
				<input type="password" placeholder="**********" />
			</div>
		</div>
		<div class="entry__button">
			<div class="flex">
				<button class="btn">
					<span class="btn-content">
						<span>Войти</span>
						<div class="btn__circle">
							<i class="bi bi-chevron-right"></i>
						</div>
					</span>
				</button>
			</div>
			<div class="mt-5 sm:mt-0">
				<a href="" class="gradient-text font-medium sm:ml-5">Забыли пароль?</a>
			</div>
		</div>
		<div class="mt-5 border-b border-third pb-5">
			<input type="checkbox" id="remember_me" />
			<label for="remember_me" class="ml-3 text-dark">Запомнить меня</label>
			<div class="mt-5">
				<p class="text-dark">
					У вас нет аккаунта?
					<a href="#" class="gradient-text sign__up font-medium">Зарегистрироваться</a>
				</p>
			</div>
		</div>
		<PartsAuthSocial title="Войти с помощью" />
	</div>
</template>

<script>
export default {}
</script>

<style></style>
