function onSubmit(event) 
{
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("passwd").value;
  var email_error = document.getElementById("email_error");
  var password_error = document.getElementById("passwd_error");
  var success_msg = document.getElementById("success_submit");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/;
  if((email == null || email == "") && (password == null || password == ""))
  {
    email_error.innerHTML = `<b>Please Enter Email ID </b>`;
    password_error.innerHTML = `<b>Please Enter the Password </b>`;
  }
  if (email == null || email == "") 
  {
    email_error.innerHTML = `<b>Please Enter Email ID </b>`;
  } 
  else if (email && emailPattern && !emailPattern.test(email)) 
  {
    email_error.innerHTML = `<b>Please enter valid email format (must contain @ and .) </b>`;
  } 
  else if (password == null || password == "") 
  {
    email_error.innerHTML = null;
    password_error.innerHTML = `<b>Please Enter the Password </b>`;
  } 
  else if (password && passwordPattern && !passwordPattern.test(password)) 
  {
    password_error.innerHTML = `<b>Password is must be 1 upper case 1 lower case 1 spl char.</b>`;
  } 
  else 
    {
    email_error.innerHTML = null;
    password_error.innerHTML = null;

    if (email == "laxmi@outlook.com" && password == "Rosy8*2003") 
    {
      let resultPayload = 
      {
        email: email,
        password: password,
      };
      success_msg.innerHTML = `<b> Form Submitted Success !!!</b>`;
      console.log("Successful Login!!");
    } 
    else 
    {
      console.log("Login Authentication failed");
    }
  }
}
