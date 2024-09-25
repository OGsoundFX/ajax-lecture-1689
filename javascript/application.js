import Swal from "sweetalert2"

// console.log("Hello from JavaScript!");

// Get Request
// const url = "https://api.github.com/users/ogsoundfx"

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })

// console.log("computing synchronously")

// Post request

const form = document.getElementById("form")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")

const url = "https://reqres.in/api/register"

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": emailInput.value,
      "password": passwordInput.value
    })
  }

  fetch(url, options)
    .then(response => {
      if (response.status === 200) {
        Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
      } else {
        Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
      }
      response.json()
    })
    .then(data => console.log(data))
})




