<script>
  import { githubAlt as githubIcon, linkedin as linkedinIcon } from 'svelte-awesome/icons'
  import IconLink from '../components/IconLink.svelte'
</script>

<svelte:head>
  <title>HumanCatfood</title>
</svelte:head>

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

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  main {
    flex: 1;
    display: grid;
  }
</style>
