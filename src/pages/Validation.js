const Validation = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = 'email Require';
  } else if (values.email.length < 5) {
    errors.email = 'email must be more than 5 letter';
  }
  if (!values.password) {
    errors.password = 'password Require';
  } else if (values.password.length < 6) {
    errors.password = 'password must be more than 6 letter';
  }
  return errors;
};

export default Validation;
