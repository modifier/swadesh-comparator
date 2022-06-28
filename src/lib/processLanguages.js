export function getAvailableLanguages(baseUrl) {
  return fetch(`${baseUrl}/languages.json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => processLanguages(data));
}

function processLanguages(languageTree) {
  const availableLanguages = new Map();
  processTree([], languageTree, availableLanguages);

  return availableLanguages;
}

function formattedLanguageName(language) {
  return Array.from(language.matchAll(/[A-Z][a-z]+/g))
    .map(([match]) => match)
    .join(" ");
}

function processTree(parents, tree, result) {
  for (const [branchName, branch] of Object.entries(tree)) {
    if (branchName === "_self") {
      for (const langName of branch) {
        let formattedName = formattedLanguageName(langName);
        const item = {
          slug: langName,
          name: formattedName,
          parents,
        };

        result.set(formattedName, item);
      }
    } else {
      processTree([...parents, branchName], branch, result);
    }
  }
}
