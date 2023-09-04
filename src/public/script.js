window.addEventListener('load', async () => {
  const login = document.querySelector('.submitUpdate');

  login.addEventListener('click', async () => {

    const Usermail = document.querySelector('input#email').value;
    const Userpassword = document.querySelector('input#password').value;

    if (Usermail == '' || Usermail == null || Userpassword == '' || Userpassword == null) {
      alert('please fill all fields')
      return;
    }

    const result = await fetch('http://localhost:4050/api/auth', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: Usermail,
        password: Userpassword
      })
    });

    if (result.status == 200 || result.status == 201) {
      const response = await result.json();
      console.log(response);
    } else {
      const response = await result.json();
      console.log(response);
    }

  })

});


// Password visibility
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  const type = password.getAttribute('type') === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("bi-eye")
});