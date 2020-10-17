<script>
  export let segment;

  import Link from './../components/NavLink.svelte';
  import {beforeUpdate} from 'svelte';

  let isRoot = false;
  beforeUpdate(() => isRoot = location.pathname === '/');

</script>

<style>

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  li + li {
    margin-left: 1rem;
  }

  @media (min-width: 768px) {
    li + li {
      margin-left: 3rem;
    }
  }

</style>

<nav>
  <ul>
    <li>
      <Link isActive={isRoot} href=".">home</Link>
    </li>
    <li>
      <Link isActive={segment === 'stuff'} href="stuff">stuff</Link>
    </li>
  </ul>
</nav>
