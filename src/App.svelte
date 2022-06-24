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

      return JSON.parse(langs);
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

<main class="comparator">
  <h1 class="title">Swadesh Comparator</h1>
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

<style>
  .comparator {
    padding: 1rem;
    width: min-content;
    min-width: 100%;
    box-sizing: border-box;
  }

  @media screen and (max-width: 40rem) {
    .comparator {
      padding: 0;
    }
  }

  .title {
    margin: 0 0 0.25rem;
  }

  .toolbar {
    padding: 0.5rem 0;
    position: sticky;
    left: 1rem;
    width: max-content;
    display: flex;
    gap: 1rem;
  }

  @media screen and (max-width: 40rem) {
    .toolbar {
      left: 0;
    }
  }

  .table-content {
    position: relative;
  }
</style>
