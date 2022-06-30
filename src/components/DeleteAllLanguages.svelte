<script>
  import DeleteIcon from "./DeleteIcon.svelte";
  import RestoreIcon from "./RestoreIcon.svelte";

  export let selectedLanguages;
  let storedLanguages = null;
  let canRestore = false;

  function handleLanguages() {
    if (canRestore) {
      selectedLanguages = storedLanguages;
      storedLanguages = null;
    } else {
      storedLanguages = selectedLanguages;
      selectedLanguages = [];
    }
  }

  $: canRestore = storedLanguages && selectedLanguages.length === 0;
  $: if (selectedLanguages.length !== 0) {
    storedLanguages = null;
  }
</script>

{#if selectedLanguages.length >= 5 || canRestore}
  <button
    on:click={handleLanguages}
    class="delete-languages-button"
    class:restore={storedLanguages && canRestore}
  >
    {#if canRestore}
      <RestoreIcon />
      <span class="label">Restore all languages</span>
    {:else}
      <DeleteIcon />
      <span class="label">Delete all languages</span>
    {/if}
  </button>
{/if}

<style>
  .delete-languages-button {
    display: flex;
    color: var(--remove-color);
    font-size: 1rem;
    align-items: center;
    border-radius: 0.3rem;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    transition: 0.2s all;
    border: var(--input-border-width) transparent solid;
    background-color: transparent;
  }

  .delete-languages-button:hover {
    background-color: var(--remove-bg-color);
  }

  .delete-languages-button.restore {
    border-color: var(--button-border-color);
  }

  .delete-languages-button.restore:hover {
    background: white;
  }

  .label {
    padding-left: 0.5rem;
    color: black;
  }
</style>
