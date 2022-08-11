<template>
	<PartsModalsModal name="share" class="share-modal share-main-links">
		<div class="share-modal-main">
			<button @click.prevent="$nuxt.$emit('close-modal', 'share')" class="close-share-modal">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.4328 0.612039C13.2488 -0.204013 14.5719 -0.204013 15.388 0.612039C16.204 1.42809 16.204 2.75117 15.388 3.56722L3.56722 15.388C2.75117 16.204 1.42809 16.204 0.612039 15.388C-0.204013 14.5719 -0.204013 13.2488 0.612039 12.4328L12.4328 0.612039Z" fill="white"></path>
					<path d="M0.612039 3.56722C-0.204013 2.75117 -0.204013 1.42809 0.612039 0.612039C1.42809 -0.204013 2.75117 -0.204013 3.56722 0.612039L15.388 12.4328C16.204 13.2488 16.204 14.5719 15.388 15.388C14.5719 16.204 13.2488 16.204 12.4328 15.388L0.612039 3.56722Z" fill="white"></path>
				</svg>
			</button>
			<h1>Поделиться своими результатами</h1>
			<p>Выберите, чем Вы хотите поделиться</p>
			<div class="share-link-main">
				<a href="/analysis.html" class="btn-square-blue">Анализы</a>
				<a href="/prescription.html" class="btn-square-blue">Назначения</a>
			</div>
		</div>
	</PartsModalsModal>
</template>

<script>
export default {
}
</script>

<style></style>
