<template>
		<Transition name="slide-fade">
			<div v-if="message" :class="getType">
				{{ message }}
			</div>
		</Transition>
</template>
<script>
export default {
	props: {
		type: {
			type: String,
			required: false,
			default: 'error'
		},
		message: {
			type: String,
			required: false,
			default: null
		}
	},
	computed: {
		getType() {
			return 'notify__' + this.type
		}
	}
}
</script>
<style lang="scss">
.notify {
	&__error {
		@apply rounded-lg bg-red-200 px-5 py-2 text-sm text-gray-800;
	}
	&__success {
		@apply rounded-lg bg-green-200 px-5 py-2 text-sm text-gray-800;
	}
	&__info {
		@apply rounded-lg bg-sky-200 px-5 py-2 text-sm text-gray-800;
	}
	&__warning {
		@apply rounded-lg bg-orange-200 px-5 py-2 text-sm text-gray-800;
	}
}
</style>
