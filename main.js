const FirstNameBorder = document.getElementById("fname");
const LastNameBorder = document.getElementById("lname");
const EmailBorder = document.getElementById("email");
const PassBorder = document.getElementById("password");

function PerformCheck() {
  FirstName = document.getElementById("fname").value;
  LastName = document.getElementById("lname").value;
  Email = document.getElementById("email").value;
  Password = document.getElementById("password").value;
  FirstNameError = document.getElementById("error-messages");
  FirstNameEmpty = document.getElementById("error-message");
  FirstNameErrorIcon = document.getElementById("forname");

  //1st form

  FirstNameEmpty.style.display = "none";
  FirstNameErrorIcon.style.display = "none";
  FirstNameBorder.style.borderColor = "hsl(248, 32%, 49%)";
  FirstNameError.style.display = "none";
  FirstNameEmpty.style.display = "none";
  if (FirstName.length > 2) {
    FirstNameError.style.display = "block";
    FirstNameErrorIcon.style.display = "block";
    FirstNameBorder.style.borderColor = " hsl(0, 100%, 74%) ";
  }

  if (FirstName == "" || FirstName == null) {
    FirstNameEmpty.style.display = "block";
    FirstNameErrorIcon.style.display = "block";
    FirstNameBorder.style.borderColor = " hsl(0, 100%, 74%) ";
  }

  //2nd form
  LastNameEmpty = document.getElementById("error-message1");
  LastNameError = document.getElementById("error-messages1");
  LastNameErrorIcon = document.getElementById("lasname");

  LastNameEmpty.style.display = "none";
  LastNameErrorIcon.style.display = "none";
  LastNameBorder.style.borderColor = "hsl(248, 32%, 49%)";
  LastNameError.style.display = "none";
  LastNameEmpty.style.display = "none";

  if (LastName.length > 2) {
    LastNameError.style.display = "block";
    LastNameErrorIcon.style.display = "block";
    LastNameBorder.style.borderColor = " hsl(0, 100%, 74%) ";
  }

  if (LastName == "" || LastName == null) {
    LastNameEmpty.style.display = "block";
    LastNameErrorIcon.style.display = "block";
    LastNameBorder.style.borderColor = " hsl(0, 100%, 74%) ";
  }

  //3rd form
  EmailEmpty = document.getElementById("error-message2");
  EmailError = document.getElementById("error-messages2");
  EmailErrorIcon = document.getElementById("emailerror");

  var regex =
    /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

  EmailEmpty.style.display = "none";
  EmailErrorIcon.style.display = "none";
  EmailBorder.style.borderColor = "hsl(248, 32%, 49%)";
  EmailError.style.display = "none";
  EmailEmpty.style.display = "none";

  if (regex.test(Email) === false) {
    EmailError.style.display = "block";
    EmailErrorIcon.style.display = "block";
    EmailBorder.style.borderColor = " hsl(0, 100%, 74%) ";
  }

  if (Email == "" || Email == null) {
    EmailEmpty.style.display = "block";
    EmailErrorIcon.style.display = "block";
    EmailBorder.style.borderColor = " hsl(0, 100%, 74%) ";
  }

  //4th form
  PassEmpty = document.getElementById("error-message3");
  PassError = document.getElementById("error-messages3");
  PassErrorIcon = document.getElementById("pass-error");

  var regex1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  PassEmpty.style.display = "none";
  PassErrorIcon.style.display = "none";
  PassBorder.style.borderColor = "hsl(248, 32%, 49%)";
  PassError.style.display = "none";
  PassEmpty.style.display = "none";

  if (regex1.test(Password) === false) {
    PassError.style.display = "block";
    PassErrorIcon.style.display = "block";
    PassBorder.style.borderColor = " hsl(0, 100%, 74%) ";
  }

  if (Password == "" || Password == null) {
    PassEmpty.style.display = "block";
    PassErrorIcon.style.display = "block";
    PassBorder.style.borderColor = " hsl(0, 100%, 74%) ";
  }
}
