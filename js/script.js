
  
//   logJSONData();
fetch('https://randomuser.me/api/?results=53')
.then(response => response.json())
.then(data => {
  // Call displayUsersPerPage with page number 1 and the fetched users data
  displayUsersPerPage(1, data.results);

  const totalUsers = data.results.length;
  document.getElementById("totalUsers").textContent = `Total Users: (${totalUsers})`;

  // Add event listeners to the pagination buttons
  const buttons = document.querySelectorAll('.pagination button');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const pageNumber = index + 1;
      displayUsersPerPage(pageNumber, data.results);
    });
  });
})
.catch(error => {
  console.error('Error:', error);
});
  
  function displayUsersPerPage(pageNumber, users) {
    // Calculate the starting and ending indices for the users to display
    const startIndex = (pageNumber - 1) * 10;
    const endIndex = startIndex + 10;
  
    // Retrieve the appropriate subset of users to display
    const usersSubset = users.slice(startIndex, endIndex);
  
    // Generate the HTML markup for the subset of users
    let htmlMarkup = '';
    usersSubset.forEach(user => {
      htmlMarkup += `
        <li class="contact-item cf">
          <div class="contact-details">
            <img class="avatar" src="${user.picture.thumbnail}">
            <h3>${user.name.first} ${user.name.last}</h3>
            <span class="email">${user.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${new Date(user.registered.date).toLocaleDateString()}</span>
          </div>
        </li>
      `;
    });
  
    // Update the HTML content of the container element to display the subset of users
    // Take 
    const userList = document.querySelector('ul.contact-list');
    userList.innerHTML = htmlMarkup;
  }
  

  