<script>
  export let segment;
  import Link from './Link.svelte';
</script>

<style>

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline;
  }

  li + li {
    margin-left: 4rem;
  }

</style>

<ul>
  <li>
    <Link isActive={segment === undefined} href=".">home</Link>
  </li>
  <li>
    <Link isActive={segment === 'about'} href="about">about</Link>
  </li>
  <li>
    <Link isActive={segment === 'stuff'} href="stuff">stuff</Link>
  </li>
</ul>
