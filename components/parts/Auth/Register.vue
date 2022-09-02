<template>
	<div class="registration">
		<div class="registration__content">
			<div class="registration__content__left">
				<form action="#" method="post">
					<input type="text" placeholder="Введите ваше имя" v-model="credentials.name" />
					<input type="email" placeholder="Введите ваше e-mail" v-model="credentials.email" />
					<!-- <div class="flex">
						<select name="" id="" class="rounded-md border border-third px-5 outline-none">
							<option value="1">+7</option>
							<option value="2">+9</option>
						</select>
						<input type="number" placeholder="(__) __-__-__" class="ml-3" />
					</div> -->
					<input type="password" placeholder="Пароль" v-model="credentials.password" />
					<input type="password" placeholder="Повторите пароль" v-model="credentials.password_confirmation" />
				</form>
			</div>
			<div class="registration__content__right">
				<div class="little-heading">Выберите кто Вы:</div>
				<div class="registration__content__right__inputs">
					<div class="authorization-radio mt-4">
						<div class="authorization-radio__specialist">
							<input type="radio" name="role" id="doctor" value="true" :checked="credentials.is_doctor" @change="credentials.is_doctor = true" />
							<label for="doctor">Специалист</label>
						</div>
						<div class="authorization-radio__patient">
							<input type="radio" name="role" id="patient" value="false" :checked="!credentials.is_doctor" @change="credentials.is_doctor = false" />
							<label for="patient">Пациент</label>
						</div>
					</div>
					<div class="mt-4">
						<label class="mb-2">Вас пригласили ?</label>
						<input type="text" placeholder="Введите промокод (необезательно)" class="input" v-model="credentials.promo" />
					</div>
					<div class="authorization-checkbox mt-4">
						<input type="checkbox" class="h-[25px] w-[25px]" v-model="credentials.terms" />
						<div class="ml-4 text-sm text-dark">
							Я согласен с условиями
							<a href="" class="font-medium text-black">Правил пользования данной медицинской площадкой и правилами</a>
						</div>
					</div>
					<div class="mt-5 flex">
						<button class="btn" @click.prevent="register">
							<span class="btn-content">
								<span>Зарегистрироваться</span>
								<div class="btn__circle">
									<i class="bi bi-chevron-right"></i>
								</div>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<PartsAuthSocial title="Зарегистрироваться с помощью" />
	</div>
</template>

<script>
export default {
	data: () => ({
		credentials: {
			name: null,
			email: null,
			promo: null,
			is_doctor: false,
			terms: false
		}
	}),
	mounted() {},
	methods: {
		async register() {
			const response = await this.$axios.post('/auth/register', this.credentials)
			this.credentials = {
				name: null,
				email: null,
				promo: null,
				is_doctor: false,
				terms: false
			}
			this.$toast.success(response.data.message, {
				action: {
					text: 'Войти',
					onClick: (e, toastObject) => {
						this.$emit('login')
					}
				}
			})
		}
	}
}
</script>

<style></style>
