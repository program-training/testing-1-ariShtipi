export async function fetchUserData(userId: number) {
  const URL = `https://jsonplaceholder.typicode.com/users/${userId}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    throw error;
  }
}
