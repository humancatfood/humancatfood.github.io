<script>
  import NavLinks from '../components/NavLinks/index.svelte';
  import Tree from '../components/Tree/index.svelte';
  export let segment;
</script>

<style>

  :global(body) {
    color: #0A1117;
    background-color: #EEF0EB;
  }

  div {
    height: 100%;
    padding: 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  nav {
    flex: 0 0;
    margin-bottom: 2rem;
  }

  main {
    flex: 1 0;
  }

  footer {
    flex: 0 0;
  }

</style>

<div>

  <nav>
    <NavLinks {segment}/>
  </nav>

  <main>
    <slot></slot>
  </main>

  <footer>
    <Tree
      style={`
        position: fixed;
        bottom: 0;
        left: 61.80469715698393%;
        transform: translateX(-50%);
        opacity: 0.9;
      `}
    />
  </footer>

</div>
