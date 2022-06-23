<script>
  import LangSelector from "./components/LangSelector.svelte";
  import LangTable from "./components/LangTable.svelte";

  let availableLanguages;
  let selectedLanguages = [];
  fetch("./languages.json")
    .then((data) => {
      return data.json();
    })
    .then((result) => {
      availableLanguages = result;
      availableLanguages.sort();
    });

  function addLanguage({ detail }) {
    selectedLanguages = [...selectedLanguages, detail];
  }
</script>

<main>
  <LangSelector
    languages={availableLanguages}
    {selectedLanguages}
    on:submit={addLanguage}
  />
  {#if selectedLanguages.length > 0}
    <LangTable {selectedLanguages} />
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
