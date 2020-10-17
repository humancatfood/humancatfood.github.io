<script context="module">
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import github from 'svelte-awesome/icons/github-alt';
  import linkedin from 'svelte-awesome/icons/linkedin';

  export const GITHUB = github;
  export const LINKEDIN = linkedin;
</script>

<script>
  export let href;
  export let icon;
  let className = '';
  export {className as class};
  export let label = '';
  export let rel = 'external';
  export let target = '_blank';
  export let scale = 2;
</script>


<style lang="scss">
  a {
    opacity: 0.6;
  }

  a:hover {
    opacity: 1.0;
  }
</style>

<a {className} {href} title={label} {target} {rel}>
  <Icon data={icon} {scale} {label} />
</a>