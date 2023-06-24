function getEmployees() {
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => {
            const employees = data.data;
            const employeeList = document.getElementById('employee-list');
        

            employees.forEach(employee => {
                const card = document.createElement('div');
                card.className = 'employee-card';

                const image = document.createElement('img');
                image.src = employee.avatar;
                const firstName = document.createElement('div')
                firstName.className = 'first-name'
                const name = document.createElement('p');
                name.textContent = `${employee.first_name}`;

                card.appendChild(image);
                firstName.appendChild(name)
                card.appendChild(firstName)

                employeeList.appendChild(card);
            
            });
        })
        .catch(error => console.error('Error:', error));
}

function filterEmployees() {
    const searchInput = document.getElementById('search');
    const searchValue = searchInput.value.toUpperCase();
    const cards = document.getElementsByClassName('employee-card');

    Array.from(cards).forEach(card => {
        const name = card.getElementsByClassName('first-name')[0].textContent;
        if (name.toUpperCase().includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
    
// Call the function to fetch and populate employees
getEmployees();