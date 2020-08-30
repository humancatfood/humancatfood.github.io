<script>
  export let segment;
  globalThis.console.log('segment', segment);
</script>

<style>

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 1rem 2rem;
  }

  li + li {
    margin-left: 1rem;
  }

  li a {
    position: relative;
  }

  li a [aria-current]:after {
    content: '<--';
    position: absolute;
    white-space: nowrap;
    margin-left: 10px;
  }

</style>

<nav>
  <ul>
    <li>
      <a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
    </li>
    <li>
      <a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>
    </li>
    <li>
      <a rel=prefetch aria-current="{segment === 'stuff' ? 'page' : undefined}" href="stuff">stuff</a>
    </li>
  </ul>
</nav>
