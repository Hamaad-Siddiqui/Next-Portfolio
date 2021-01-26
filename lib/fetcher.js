export default async function Fetcher(url) {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin'
  });
  return res.json();
}
