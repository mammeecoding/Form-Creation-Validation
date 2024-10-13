async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');
  try {
    const response = await fetchUserData()
  } catch (error) {
    console.error(`Error: ${error}`);
  }
  const users = await response.json()
  dataContainer.innerHTML = '';

  const userList = document.createElement('ul');

};

fetchUserData();