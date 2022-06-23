<script>
  export let selectedLanguages;
  let shownLanguages = {};
  let requestedLanguages = new Set();

  const WORDS = [
    "I",
    "you",
    "he",
    "we",
    "they",
    "this",
    "that",
    "here",
    "there",
    "who",
    "what",
    "where",
    "when",
    "how",
    "not",
    "all",
    "many",
    "some",
    "few",
    "other",
    "one",
    "two",
    "three",
    "four",
    "five",
    "big",
    "long",
    "wide",
    "thick",
    "heavy",
    "small",
    "short",
    "narrow",
    "thin",
    "woman",
    "man",
    "person",
    "child",
    "wife",
    "husband",
    "mother",
    "father",
    "animal",
    "fish",
    "bird",
    "dog",
    "louse",
    "snake",
    "worm",
    "tree",
    "forest",
    "stick",
    "fruit",
    "seed",
    "leaf",
    "root",
    "bark",
    "flower",
    "grass",
    "rope",
    "skin",
    "meat",
    "blood",
    "bone",
    "fat (n.)",
    "egg",
    "horn",
    "tail",
    "feather",
    "hair",
    "head",
    "ear",
    "eye",
    "nose",
    "mouth",
    "tooth",
    "tongue",
    "fingernail",
    "foot",
    "leg",
    "knee",
    "hand",
    "wing",
    "belly",
    "guts",
    "neck",
    "back",
    "breast",
    "heart",
    "liver",
    "drink",
    "eat",
    "bite",
    "suck",
    "spit",
    "vomit",
    "blow",
    "breathe",
    "laugh",
    "see",
    "hear",
    "know",
    "think",
    "smell",
    "fear",
    "sleep",
    "live",
    "die",
    "kill",
    "fight",
    "hunt",
    "hit",
    "cut",
    "split",
    "stab",
    "scratch",
    "dig",
    "swim",
    "fly (v.)",
    "walk",
    "come",
    "lie",
    "sit",
    "stand",
    "turn",
    "fall",
    "give",
    "hold",
    "squeeze",
    "rub",
    "wash",
    "wipe",
    "pull",
    "push",
    "throw",
    "tie",
    "sew",
    "count",
    "say",
    "sing",
    "play",
    "float",
    "flow",
    "freeze",
    "swell",
    "sun",
    "moon",
    "star",
    "water",
    "rain",
    "river",
    "lake",
    "sea",
    "salt",
    "stone",
    "sand",
    "dust",
    "earth",
    "cloud",
    "fog",
    "sky",
    "wind",
    "snow",
    "ice",
    "smoke",
    "fire",
    "ashes",
    "burn",
    "road",
    "mountain",
    "red",
    "green",
    "yellow",
    "white",
    "black",
    "night",
    "day",
    "year",
    "warm",
    "cold",
    "full",
    "new",
    "old",
    "good",
    "bad",
    "rotten",
    "dirty",
    "straight",
    "round",
    "sharp (as a knife)",
    "dull (as a knife)",
    "smooth",
    "wet",
    "dry",
    "correct",
    "near",
    "far",
    "right",
    "left",
    "at",
    "in",
    "with",
    "and",
    "if",
    "because",
    "name",
  ];

  function getWord(language, word) {
    let shownLanguage = shownLanguages[language];
    if (!shownLanguage) {
      return "Loading...";
    }
    return shownLanguage[word] ? shownLanguage[word].join(", ") : "";
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
      <td>English</td>
      {#each selectedLanguages as language}
        <td>{language}</td>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each WORDS as word}
      <tr>
        <td>{word}</td>
        {#each selectedLanguages as language}
          <td>{getWord(language, word)}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
