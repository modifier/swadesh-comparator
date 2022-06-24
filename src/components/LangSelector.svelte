<script>
  import { createEventDispatcher } from "svelte";

  export let languages = [];
  export let selectedLanguages = [];

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

  $: isValid = languages.includes(value) && !selectedLanguages.includes(value);
</script>

<form on:submit={submit} class="lang-selector">
  <input
    bind:value
    placeholder="Language name"
    list="languages"
    class="lang-input"
  />
  <datalist id="languages">
    {#each languages as language}
      <option
        value={language}
        disabled={selectedLanguages.includes(language)}
      />
    {/each}
  </datalist>
  <input type="submit" value="Add" disabled={!isValid} class="lang-add" />
</form>

<style>
  .lang-selector {
    padding: 0.5rem 0;
    background: var(--bg-color);
    position: sticky;
    left: 1rem;
    font-size: 0;
    width: max-content;
  }

  @media screen and (max-width: 40rem) {
    .lang-selector {
      left: 0;
    }
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
    border: 2px var(--button-border-color) solid;
    font-size: 1rem;
    padding: 0.25rem 1rem;
    margin: 0;
    transition: 0.2s all;
    border-radius: 0 0.25rem 0.25rem 0;
  }

  .lang-add:disabled {
    border-color: var(--input-border-color);
  }
</style>
