<script>
	import { VtmnIcon, VtmnDropdown, VtmnTag } from "@vtmn/svelte";
	export let data;
</script>

<p>{data.params}</p>

<div>
	<VtmnTag variant="brand">
		<div slot="default" class="vtmn-flex vtmn-gap-2">
			<!-- <img
				src="/node_modules/@vtmn/icons/dist/vitamix/svg/home-fill.svg"
				alt="Home icon filled"
				width="12"
				height="12"
			/> -->
			<span aria-hidden="true" class="vtmx-home-fill"> </span> Homepage

		</div>
	</VtmnTag>
	<!-- <VtmnDropdown label={"hola"} summary={"resumen"} id="hola" /> -->
	<!-- <VtmnIcon value="user-line" /> -->
	<!-- <img src="/node_modules/@vtmn/icons/dist/vitamix/svg/home-fill.svg" alt="Home icon filled" width="32" height="32" /> -->
</div>
