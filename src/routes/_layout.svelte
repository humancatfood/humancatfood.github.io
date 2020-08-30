<script>
  import Nav from '../components/Nav.svelte';
  import Tree from '../components/Tree.svelte';
  export let segment;
</script>

<Nav {segment}/>

<main>
  <slot></slot>
</main>

<Tree style={`
  left: 61.80469715698393%;
  transform: translateX(-50%);
`} />