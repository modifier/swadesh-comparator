<script>
  import { createEventDispatcher } from "svelte";

  export let languages;
  export let selectedLanguages = [];
  let sortedLanguages;

  let value;
  let isValid = false;
  const dispatch = createEventDispatcher();

  function submit(e) {
    e.preventDefault();
    if (isValid) {
      dispatch("submit", value);
      value = "";
    }
  }

  function getParents(language) {
    const langItem = languages.get(language);

    if (!langItem) {
      return "";
    }

    return langItem.parents.join(" > ");
  }

  $: {
    isValid = languages.has(value) && !selectedLanguages.includes(value);
    sortedLanguages = Array.from(languages.values()).map((item) => item.name);
    sortedLanguages.sort();
  }
</script>

<form on:submit={submit} class="lang-selector">
  <input
    bind:value
    placeholder="Language name"
    list="languages"
    class="lang-input"
  />
  <datalist id="languages">
    {#each sortedLanguages as language}
      <option value={language} disabled={selectedLanguages.includes(language)} />
    {/each}
  </datalist>
  <input type="submit" value="Add" disabled={!isValid} class="lang-add" />
</form>

<style>
  .lang-selector {
    font-size: 0;
  }

  .lang-input {
    font-size: 1rem;
    border: 2px var(--input-border-color) solid;
    border-right: 0;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem 0 0 0.25rem;
    outline: 0;
  }

  .lang-add {
    border: var(--input-border-width) var(--button-border-color) solid;
    font-size: 1rem;
    padding: 0.25rem 1rem;
    margin: 0;
    transition: 0.2s all;
    border-radius: 0 0.25rem 0.25rem 0;
    cursor: pointer;
  }

  .lang-add:hover {
    background-color: white;
  }

  .lang-add:disabled {
    border-color: var(--input-border-color);
  }
</style>
