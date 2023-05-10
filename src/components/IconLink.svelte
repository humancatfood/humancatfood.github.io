<script lang="ts">
	import Icon, { type IconType } from 'svelte-awesome/components/Icon.svelte';

	export let href: string;
	export let icon: IconType;
	export let className = '';
	export let label = '';
	export let rel = 'external';
	export let target = '_blank';
	export let scale = 2;
</script>

<a {href} title={label} {target} {rel} class={className}>
	<Icon data={icon} {scale} {label} />
</a>
