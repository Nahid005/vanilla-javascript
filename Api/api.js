fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => displayUser(data));

function displayUser (user) {
    // for( let i = 0; i < user.length; i++) {
    //     const userName = user[i].username;

    //     const nameContant = document.getElementById('userName')
    //     const li = document.createElement('li')
    //     li.textContent = userName;
    //     nameContant.appendChild(li)
    // }

    const userItems = user.map ( users => users.username);
    console.log(userItems);
}


// form submit info

const singInBtn = document.getElementById('singInBtn')
const selectOption = document.getElementById('inputState')

selectOption.addEventListener('change', (event) => {
    console.log(event.target.value);
})

singInBtn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('This button is clicked')
    const userEmail = document.getElementById('inputEmail4').value
    const userPass = document.getElementById('inputPassword4').value
    const userAddress = document.getElementById ('inputAddress').value

    const userInfo = {
        address: userAddress,
        email: userEmail,
        password: userPass
    }

    // postData(userInfo)
    console.log(userInfo);
    

})

// function postData (userData) {
    
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(userData),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((data) => dataList(data));

// }


// function dataList ( dataItems ) {
//     const dataListItems = dataItems.map(singleData => singleData.address)
//     console.log(dataListItems)
// }



