<script>
  import { WORDS } from "../lib/words";
  import { slugifyLanguageName } from "../lib/nameFormatter";
  import CloseIcon from "./CloseIcon.svelte";

  export let selectedLanguages;
  let shownLanguages = {};
  let requestedLanguages = new Set();

  function getWordOptions(language, word) {
    let shownLanguage = shownLanguages[language];
    if (!shownLanguage) {
      return [];
    }
    return shownLanguage[word] ? shownLanguage[word] : ["—"];
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
        const slugifyLang = slugifyLanguageName(lang);
        fetch(`./langs/${slugifyLang}.json`)
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

<table class="lang-comparison">
  <thead class="lang-titles">
    <tr>
      {#each selectedLanguages as language}
        <td class="lang-title-data">
          <div class="lang-name-wrapper">
            <span class="lang-name">{language}</span>
            <button class="remove-button" on:click={() => remove(language)}>
              <span class="remove-icon">
                <CloseIcon />
              </span>
            </button>
          </div>
        </td>
      {/each}
    </tr>
  </thead>
  <tbody class="lang-words">
    {#each getAllWords(shownLanguages) as word}
      <tr class="lang-word-rows">
        {#each selectedLanguages as language}
          <td
            class="lang-word-data"
            class:lang-word-data-loading={!shownLanguages[language]}
          >
            <ul>
              {#each getWordOptions(language, word) as wordOption}
                <li>{wordOption}</li>
              {/each}
            </ul>
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  @keyframes moveLeftIn {
    0% {
      background-position-x: -15rem;
    }

    100% {
      background-position-x: 15rem;
    }
  }

  .lang-comparison {
    position: relative;
    border-spacing: 0;
  }

  td {
    border: 0 #000 solid;
    border-right-width: var(--border-width);
    border-bottom-width: var(--border-width);
    min-width: 10rem;
    max-width: 15rem;
  }

  @media screen and (max-width: 40rem) {
    td {
      min-width: 5rem;
    }
  }

  td:first-child {
    border-left-width: var(--border-width);
  }

  thead tr:first-child td {
    border-top-width: var(--border-width);
  }

  .lang-titles {
    font-weight: bold;
    position: sticky;
    top: 0;
    background-color: var(--bg-color);
  }

  .lang-word-rows:nth-child(2n) {
    background-color: var(--odd-rows-color);
  }

  .lang-title-data {
    height: 1.75rem;
    min-height: 1rem;
  }

  .lang-title-data,
  .lang-word-data {
    padding: 0.25rem 0.25rem 0.25rem 0.5rem;
  }

  .lang-word-data-loading {
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 12%,
        rgba(0, 0, 0, 0.3) 49%,
        rgba(0, 0, 0, 0.3) 51%,
        rgba(0, 0, 0, 0) 87%
      )
      no-repeat;
    animation-name: moveLeftIn;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 3s;
    animation-delay: -1s;
  }

  .lang-word-rows:hover {
    background-color: var(--hover-row-color);
  }

  .lang-name-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .remove-button {
    border: 0;
    cursor: pointer;
    background-color: transparent;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 0.3rem;
    box-sizing: border-box;
    color: var(--remove-color);
  }

  .remove-button:hover {
    background-color: rgba(210, 38, 38, 0.05);
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }
</style>
