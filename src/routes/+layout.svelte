<script>
	import IconLink from '$lib/IconLink.svelte';
	import { githubAlt as githubIcon, linkedin as linkedinIcon } from 'svelte-awesome/icons';
</script>

<main class="container">
	<slot />
</main>

<footer>
	<div class="container">
		<nav>
			<ul>
				<li>
					<IconLink icon={githubIcon} href="https://github.com/humancatfood" label="Github" />
				</li>
				<li>
					<IconLink
						icon={linkedinIcon}
						href="https://www.linkedin.com/in/janborchers"
						label="LinkedIn"
					/>
				</li>
			</ul>
		</nav>
	</div>
</footer>

<style>
	:global(html, body) {
		height: 100%;
	}

	:global(#root) {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	main {
		flex: 1;
		display: grid;
	}
</style>
