<script>
  import Section from './../components/Sections/Section.svelte';
  import Main, {META as mainMeta} from './_indexSections/Main.svelte';
  import Skills, {META as skillsMeta} from './_indexSections/Skills.svelte';
  import CV, {META as cvMeta} from './_indexSections/cv.md';
</script>

<style>
</style>


<svelte:head>
  <title>HumanCatfood - Home</title>
</svelte:head>


<!-- <Section meta={mainMeta} bottomMetas={[skillsMeta, cvMeta]}> -->
<Section meta={mainMeta}}>
  <Main />
</Section>

<!-- <Section meta={skillsMeta} topMetas={[mainMeta]} bottomMetas={[cvMeta]}> -->
<Section meta={skillsMeta}>
  <Skills />
</Section>

<!-- <Section meta={cvMeta} topMetas={[mainMeta, skillsMeta]}> -->
<Section meta={cvMeta}>
  <CV />
</Section>
