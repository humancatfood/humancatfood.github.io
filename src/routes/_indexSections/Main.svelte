
<script>
  import IconLink, {GITHUB, LINKEDIN} from './../../components/IconLink.svelte';
</script>

<style lang="scss">

  .jumbotron {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .jumbotron:before {
    content: '';
    flex-grow: 1;
  }

  .jumbotron:after {
    content: '';
    flex-grow: 2;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .links > :global(*) + :global(*) {
    margin-left: 1rem;
  }

  @media (min-width: 420px) {
    .links > :global(*) + :global(*) {
      margin-left: 2rem;
    }
  }
</style>

<div class="jumbotron" id={slug}>
  <h1>Hi, I'm Jan</h1>
  <h2>I am a web developer based in London, UK</h2>

  <div class="links">
    <IconLink
      icon={GITHUB}
      href="https://github.com/humancatfood"
      label="Github"
    />
    <IconLink
      icon={LINKEDIN}
      href="https://www.linkedin.com/in/janborchers"
      label="LinkedIn"
    />
  </div>
</div>
