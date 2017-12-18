export function updateSearchResults(results) {
  return { type: "UPDATE_SEARCH_RESULTS", payload: results };
}

export function updateSearchType(type) {
  return { type: "UPDATE_SEARCH_TYPE", payload: type };
}
