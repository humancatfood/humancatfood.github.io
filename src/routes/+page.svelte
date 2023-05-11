<script lang="ts">
  import { githubAlt as githubIcon, linkedin as linkedinIcon } from 'svelte-awesome/icons'
  import IconLink from '../components/IconLink.svelte'
</script>

<div class="jumbo">
  <h1>Hi!</h1>
  <p>I'm Jan, a web developer based in London, UK</p>

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

<style>
  .jumbo {
    --font-size: 1.4em;
    align-self: center;
    max-width: 50%;
  }
  h1 {
    margin-bottom: calc(var(--typography-spacing-vertical) * 0.5);
  }
</style>
