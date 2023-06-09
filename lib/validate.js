export default function login_validate(values) {
  const errors = {};

  //validation for email
  if (!values.email) {
    errors.email = "Required...";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address...";
  }

  return errors;
}
