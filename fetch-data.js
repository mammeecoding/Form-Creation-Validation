async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');
  try {
    const response = await fetchUserData()
  } catch (error) {
    console.error(`Error: ${error}`);
    dataContainer.textContent = '';
    dataContainer.textContent = 'Failed to load user data.';
  }
  const users = await response.json()
  dataContainer.innerHTML = '';

  const userList = document.createElement('ul');
  users.array.forEach(element => {
    document.createElement('li');
    userList.textContent = "user's name";
   li.appendChild(userList);
  });
  userList.appendChild(dataContainer);
};
fetchUserData();
document.addEventListener("DOMContentLoaded", () => {

  callback({
    fetchUserData
  });
});
