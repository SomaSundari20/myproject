
function getContact() {
    const userRef = ref(this.database, 'contact/');
    onValue(userRef, (snapshot) => {
        const users = snapshot.val();
        console.log(users);
        for (obj in users) {
            console.log(users[obj])
            let tableBody = document.querySelector("tbody")
            let tr = `
        <tr>
          <td>${users[obj].name}</td>
          <td>${users[obj].phone}</td>
          <td>${users[obj].email}</td>
          <td>${users[obj].designation}</td>
          <td>${users[obj].status}</td>
          <td>${users[obj].date}</td>
         
        </tr>
       `
            tr += tableBody?.innerHTML;

        }


    });
}
