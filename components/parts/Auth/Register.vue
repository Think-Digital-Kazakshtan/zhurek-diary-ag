<template>
	<div class="registration">
		<div class="registration__content">
			<div class="registration__content__left">
				<form action="#" method="post">
					<input type="text" placeholder="Введите Ваше имя" />
					<div class="flex">
						<select name="" id="" class="rounded-md border border-third px-5 outline-none">
							<option value="1">+7</option>
							<option value="2">+9</option>
						</select>
						<input type="number" placeholder="(__) __-__-__" class="ml-3" />
					</div>
					<input type="password" placeholder="Пароль" />
					<input type="password" placeholder="Повторите пароль" />
				</form>
			</div>
			<div class="registration__content__right">
				<div class="little-heading">Выберите кто Вы:</div>
				<form action="">
					<div class="authorization-radio">
						<div class="authorization-radio__specialist">
							<input type="radio" name="radio" id="doctor" />
							<label for="doctor">Специалист</label>
						</div>
						<div class="authorization-radio__patient">
							<input type="radio" name="radio" id="patient" />
							<label for="patient">Пациент</label>
						</div>
					</div>
					<div class="authorization-checkbox">
						<input type="checkbox" class="h-[25px] w-[25px]" />
						<div class="ml-4 text-sm text-dark">
							Я согласен с условиями
							<a href="" class="font-medium text-black">Правил пользования данной медицинской площадкой и правилами</a>
						</div>
					</div>
					<div class="flex">
						<button class="btn">
							<span class="btn-content">
								<span>Зарегистрироваться</span>
								<div class="btn__circle">
									<i class="bi bi-chevron-right"></i>
								</div>
							</span>
						</button>
					</div>
				</form>
			</div>
		</div>
    <PartsAuthSocial title="Зарегистрироваться с помощью" />
	</div>
</template>

<script>
export default {}
</script>

<style></style>
