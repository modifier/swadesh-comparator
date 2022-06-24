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

  function getAllWords(shownLanguages) {
    const allWords = new Set();
    for (const swadesh of Object.values(shownLanguages)) {
      for (const key of Object.keys(swadesh)) {
        allWords.add(key);
      }
    }

    const sortedWords = [];
    for (const word of WORDS) {
      if (allWords.has(word)) {
        sortedWords.push(word);
      }
    }

    for (const word of allWords.values()) {
      if (!WORDS.includes(word)) {
        sortedWords.push(word);
      }
    }

    return sortedWords;
  }

  function remove(languageToRemove) {
    selectedLanguages = selectedLanguages.filter(
      (language) => language !== languageToRemove
    );
    delete shownLanguages[languageToRemove];
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
    {#each getAllWords(shownLanguages) as word}
      <tr>
        {#each selectedLanguages as language}
          <td>{getWord(language, word)}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
