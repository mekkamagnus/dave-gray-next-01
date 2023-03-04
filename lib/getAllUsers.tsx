export default async function getAllUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) throw new Error('failed to fetch data');
  // No try-catch. Using Next.js 13 error boundries instead
  return res.json();
}
