<script>
  import LangSelector from "./components/LangSelector.svelte";

  let availableLanguages;
  let selectedLanguages = [];
  fetch("./languages.json")
    .then((data) => {
      return data.json();
    })
    .then((result) => {
      availableLanguages = result;
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
  <ul>
    {#each selectedLanguages as language, index}
      <li>{index}: {language}</li>
    {/each}
  </ul>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
