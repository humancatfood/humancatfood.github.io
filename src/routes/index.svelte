<script>
  import Section from './../components/Sections/Section.svelte';
  import SectionLink from './../components/Sections/SectionLink.svelte';
  import Main from './_indexSections/Main.svelte';
  import CV, {META as cvMeta} from './_indexSections/cv.md';
</script>

<svelte:head>
  <title>HumanCatfood - Home</title>
</svelte:head>


<Section>
  <Main />
  <SectionLink meta={cvMeta} />
</Section>

<Section meta={cvMeta}>
  <CV />
</Section>
