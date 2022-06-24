<script>
  import { WORDS } from "../lib/words";

  export let selectedLanguages;
  let shownLanguages = {};
  let requestedLanguages = new Set();

  function getWord(language, word) {
    let shownLanguage = shownLanguages[language];
    if (!shownLanguage) {
      return "Loading...";
    }
    return shownLanguage[word] ? shownLanguage[word].join(", ") : "—";
  }

  function remove(languageToRemove) {
    selectedLanguages = selectedLanguages.filter(
      (language) => language !== languageToRemove
    );
  }

  $: {
    for (const lang of selectedLanguages) {
      if (!shownLanguages[lang] && !requestedLanguages.has(lang)) {
        fetch(`./langs/${lang}.json`)
          .then((data) => data.json())
          .then((langData) => {
            requestedLanguages.delete(lang);
            shownLanguages[lang] = langData;
            shownLanguages = shownLanguages;
          });
      }
    }
  }
</script>

<table>
  <thead>
    <tr>
      {#each selectedLanguages as language}
        <td>{language} <button on:click={() => remove(language)}>x</button></td>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each WORDS as word}
      <tr>
        {#each selectedLanguages as language}
          <td>{getWord(language, word)}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
