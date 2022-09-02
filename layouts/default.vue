<template>
	<div>
    <div v-if="error">
			<div class="content vertical-distance">
				<h1 class="text-center text-lg text-gray-400">505 Server error</h1>
			</div>
		</div>
		<div v-else>
			<div class="main-wrapper personalArea__page relative flex">
				<PartsSidebar />
				<div class="main-content relative w-full xl:w-[80%]">
					<PartsAppBar />
					<div class="drugs-page doctor-page personalArea diary relative">
						<Nuxt />
					</div>
				</div>
			</div>
			<PartsNavbar />
			<PartsFooter />
		</div>

	</div>
</template>

<script>
export default {
	data: () => ({
		error: false
	}),
  created() {
    setTimeout(() => {
      this.error = true;
    },7000)
  }
}
</script>

<style></style>
