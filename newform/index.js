const myform = document.getElementById('myform');

const nameinput = document.getElementById('nameinp');
const surnameinput = document.getElementById('surnameinp');
const ageinput = document.getElementById('ageinp');
const idinput = document.getElementById('idinp')


function axiosPost(event) {
    event.preventDefault()
    axios.post("https://655c2fe4ab37729791aa011f.mockapi.io/swp102/students", {
        name: nameinput.value,
        surname: surnameinput.value,
        age: ageinput.value,
        studentsid: idinput.value
    }).then(res => {
        console.log(res);
    })
}
myform.addEventListener('submit', axiosPost)