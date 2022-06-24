export function formattedLanguageName(language) {
  return Array.from(language.matchAll(/[A-Z][a-z]+/g))
    .map(([match]) => match)
    .join(" ");
}

export function slugifyLanguageName(language) {
  return language.split(" ").join("");
}
