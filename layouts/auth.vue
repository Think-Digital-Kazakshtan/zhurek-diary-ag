<template>
	<div>
		<div class="main-wrapper personalArea__page relative flex ">
			<div class="main-content relative w-full xl:w-[80%]">
        <PartsAppBar />
				<div class="drugs-page doctor-page personalArea diary relative">
					<Nuxt />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  created() {

  }
}
</script>

<style></style>
