<script>
  import LangSelector from "./components/LangSelector.svelte";
  import LangTable from "./components/LangTable.svelte";
  import DeleteAllLanguages from "./components/DeleteAllLanguages.svelte";
  import { getAvailableLanguages } from "./lib/processLanguages";

  let availableLanguages = new Map();
  let selectedLanguages = getSelectedLanguages();
  let langCache = new Map();

  getAvailableLanguages().then((langs) => {
    availableLanguages = langs;
  });

  function getSelectedLanguages() {
    try {
      const langs = localStorage.getItem("selectedLanguages");

      return JSON.parse(langs) || [];
    } catch (e) {
      return [];
    }
  }

  function addLanguage({ detail }) {
    selectedLanguages = [...selectedLanguages, detail];
    localStorage.setItem(
      "selectedLanguages",
      JSON.stringify(selectedLanguages)
    );
  }
</script>

<h1 class="title">Swadesh Comparator</h1>
<main class="comparator">
  <section class="table-content">
    <div class="toolbar">
      <LangSelector
        languages={availableLanguages}
        {selectedLanguages}
        on:submit={addLanguage}
      />
      <DeleteAllLanguages bind:selectedLanguages />
    </div>
    {#if selectedLanguages.length > 0}
      <LangTable
        bind:selectedLanguages
        {availableLanguages}
        cache={langCache}
      />
    {/if}
  </section>
</main>
<footer class="footer">
  <div class="footer-left">
    <p>Made in Russia in 2022.</p>
  </div>
  <div class="footer-right">
    <p>The sources: <a href="https://datarepository.wolframcloud.com/resources/Swadesh-Lists">Wolfram Cloud</a> and <a href="https://en.wiktionary.org/wiki/Appendix:Swadesh_lists">Wiktionary</a>.</p>
    <p>Submit incorrect data as a PR on <a href="https://github.com/modifier/swadesh-comparator">GitHub</a>.</p>
  </div>
</footer>

<style>
  .comparator {
    padding: 0 1rem;
    width: min-content;
    min-width: 100%;
    box-sizing: border-box;
    flex: 1 0 auto;
  }

  @media screen and (max-width: 40rem) {
    .comparator {
      padding: 0;
    }
  }

  .title {
    margin: 1rem 1rem 0.25rem;
  }

  .toolbar {
    padding: 0.5rem 0;
    position: sticky;
    left: 1rem;
    width: max-content;
    display: flex;
    column-gap: 1rem;
    row-gap: 0.5rem;
    flex-wrap: wrap;
    max-width: 100vw;
  }

  @media screen and (max-width: 40rem) {
    .toolbar {
      left: 0;
    }
  }

  .table-content {
    position: relative;
  }

  .footer {
    flex: 0 0 auto;
    margin: 2rem auto 0;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    box-sizing: border-box;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  .footer p {
    margin: 0.25rem 0;
  }
</style>
