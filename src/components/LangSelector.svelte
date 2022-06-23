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

<form on:submit={submit}>
  <input bind:value placeholder="Language name" list="languages" />
  <datalist id="languages">
    {#each languages as language}
      <option
        value={language}
        disabled={selectedLanguages.includes(language)}
      />
    {/each}
  </datalist>
  <input type="submit" value="Add language" disabled={!isValid} />
</form>
