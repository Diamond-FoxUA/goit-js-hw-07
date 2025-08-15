const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const { email, password } = form.elements;
  const trimmedEmail = email.value.trim();
  const trimmedPassword = password.value.trim();

  if (!trimmedEmail || !trimmedPassword) {
    alert("All form fields must be filled in");
    return;
  }

  console.log({
    userEmail: trimmedEmail,
    userPassword: trimmedPassword
  });

  form.reset();
}