const DELAY = 450;

const HEADERS = { "Content-Type": "application/json" };

export default function SignUser(userData) {
  return fetch(`http://www.mocky.io/v2/5cd9bd6f3000006f35c017e9?mocky-delay=${DELAY}ms`, { method: "POST", body: JSON.stringify(userData), headers: HEADERS });
}