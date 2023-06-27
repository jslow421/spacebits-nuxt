<template>
	<div>
		<header>
			<title>SpaceBits</title>
		</header>

		<main class="bg-gray-50 min-h-screen">
			<div class="mx-auto">
				<Navbar />
				<div class="my-4 sm:my-1 mb-12">
					<NuxtPage />
				</div>
			</div>
		</main>

		<footer>
			<!-- Footer content goes here -->
		</footer>
	</div>
</template>

<script setup lang="ts">
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - SpaceBits` : "SpaceBits";
	},
});
</script>
