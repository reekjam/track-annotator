export function authHeaders(token) {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Token token=${token}`
  };
}
