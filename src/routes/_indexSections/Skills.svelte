<script context="module">

  export const META = {
    slug: 'skills',
    title: 'Skills',
  };

  const skills = {
    client: {
      dataLayer: 5,
      architecting: 5,
      coding: 5,
      debugging: 5,
      styling: 4,
      designing: 2,
    },
    server: {
      architecting: 3,
      coding: 4,
    },
    database: 3,
  };

</script>

<div>
  <pre>
    {
      JSON.stringify(skills, null, 2)
    }
  </pre>
</div>
