const isEmpty = value => value === undefined || value === null || value === '';

// Check if user has entered a value
export function isRequired(value) {
  if (isEmpty(value)) {
    return false;
  }
  return true;
}

// Phone number validation
export function validatePhoneNumber(value) {
  if(!/^[0-9]{10,11}$/.test(value)) {
    return false;
  }
  return true;
}

// Name Validation
export function validateName(value) {
  if(!/^[A-Za-z.' -]+$/.test(value)) {
    return false;
  }
  return true;
}

// Email Validation
export function validateEmail(value) {
  const trimmedValue = value.trim();
  const validEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9]))+\.(?:[A-Z]{2,4}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|co.in)\b$/i;

  if (!validEmail.test(trimmedValue)) {
    return false;
  }
  return true;
}
