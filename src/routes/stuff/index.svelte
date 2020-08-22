<script context="module">

  export function preload(/* { params, query } */) {

    return {
      posts: [
        {
          title: 'Post 1',
          slug: 'post-1',
        },
        {
          title: 'Post 2',
          slug: 'post-2',
        },
        {
          title: 'Post 3',
          slug: 'post-3',
        },
      ],
    };

  }

</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
        tell Sapper to load the data for the page as soon as
        the user hovers over the link or taps it, instead of
        waiting for the 'click' event -->
    <li><a rel='prefetch' href='stuff/{post.slug}'>{post.title}</a></li>
  {/each}
</ul>