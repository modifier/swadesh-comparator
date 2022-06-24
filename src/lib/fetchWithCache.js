/**
 * @param url string
 * @param cache Map
 * @returns {Promise<object>}
 */
export function fetchWithCache(url, cache) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url));
  }

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cache.set(url, data);

      return data;
    });
}
