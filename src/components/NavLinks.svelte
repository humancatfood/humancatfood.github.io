<script>
  export let segment;
</script>

<style>

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }

  li + li {
    margin-left: 4rem;
  }

  li a {
    position: relative;
  }

  li a[aria-current]:after {
    content: '<--';
    position: absolute;
    white-space: nowrap;
    margin-left: 5px;
  }

</style>

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
