<template>
	<div>
		<div class="main-wrapper personalArea__page relative flex ">
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
</template>

<script>
export default {}
</script>

<style></style>
