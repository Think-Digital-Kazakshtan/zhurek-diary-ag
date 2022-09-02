<template>
	<div class="entry">
		<PartsMessageBadge :message="message" class="mb-5" />
		<div class="entry__input">
			<div class="entry__input__left">
				<label for="">Ваш e-mail</label>
				<input type="text" placeholder="" v-model="credentials.email" />
			</div>
			<div class="entry__input__right">
				<label for="">Введите пароль</label>
				<input type="password" placeholder="**********" v-model="credentials.password" />
			</div>
		</div>
		<div class="entry__button">
			<div class="flex">
				<button @click.prevent="login" class="btn">
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
					<a href="#" class="gradient-text sign__up font-medium" @click.prevent="$emit('registration')">Зарегистрироваться</a>
				</p>
			</div>
		</div>
		<PartsAuthSocial title="Войти с помощью" />
	</div>
</template>

<script>
export default {
    data: () => ({
        message: null,
        credentials: {
            email: "memmedkerimov@gmail.com",
            password: "88888888"
        }
    }),
    methods: {
        async login() {
            this.message = null;
            try {
                await this.$auth.loginWith("local", {
                    data: this.credentials
                });
            }
            catch (error) {
                if (error.response.status == 401) {
                    console.log(error.response.data);
                    this.message = error.response.data.message;
                }
            }
        }
    }
}
</script>

<style></style>
