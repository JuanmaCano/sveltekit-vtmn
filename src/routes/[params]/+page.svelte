<script>
	import { VtmnTag } from "@vtmn/svelte";
	export let data;
</script>

<div>
	<span aria-hidden="true" class="vtmx-home-fill vtmn-text-4xl"> </span>
	
	<VtmnTag variant="brand">
		<div slot="default" class="vtmn-flex vtmn-gap-2">
			<span aria-hidden="true" class="vtmx-arrow-left-circle-fill"> </span> {data.params.params}
		</div>
	</VtmnTag>
</div>
