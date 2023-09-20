export const validateFullName = (fullName) => {
  const nameRegex = /^[A-Za-z\s]+$/;
  const maxLength = 26;

  if (!fullName) {
    return "This field is required.";
  } else if (!nameRegex.test(fullName)) {
    return "Please enter a valid full name with only letters and spaces.";
  } else if (fullName.length > maxLength) {
    return `Name must be at most ${maxLength} characters.`;
  } else {
    return "";
  }
};

export const validatePhoneNumber = (phone) => {
  const phoneRegex = /^[0-9]{10}$/;
  const maxLength = 10;

  if (!phone) {
    return "This field is required.";
  } else if (!phoneRegex.test(phone)) {
    return "Please enter a valid 10-digit phone number.";
  } else if (phone.length !== maxLength) {
    return "Phone number must be exactly 10 digits.";
  } else {
    return ""; // Return an empty string if the input is valid
  }
};

export const validateAddress = (address1) => {
  const addressRegex = /^[A-Za-z0-9\s]+$/;
  const maxLength = 50;

  if (!address1) {
    return "This field is required.";
  } else if (!addressRegex.test(address1)) {
    return "Please enter a valid alphanumeric address.";
  } else if (address1.length > maxLength) {
    return `Address must be at most ${maxLength} characters.`;
  } else {
    return ""; // Return an empty string if the input is valid
  }
};

export const validatePostalCode = (postCode) => {
  const postalCodeRegex = /^[A-Za-z0-9]{7,8}$/;

  if (!postCode) {
    return "This field is required.";
  } else if (!postalCodeRegex.test(postCode)) {
    return "Alphanumeric, min 7 and max 8 characters only";
  } else {
    return ""; // Return an empty string if the input is valid
  }
};

export const validateProfileImage = (profileImage) => {
  if (!profileImage) {
    return "Profile image is required.";
  } else {
    return ""; // Return an empty string if the input is valid
  }
};

export const validateGender = (gender) => {
  if(!gender) {
    return "This field is required.";
  } else {
    return "";
  }
}

export const validateCountry = (countries) => {
  if (!countries) {
    return "Please select a country.";
  } else {
    return ""; // Return an empty string if the input is valid
  }
};

export const validateState = (states) => {
  if (!states) {
    return "Please select a state.";
  } else {
    return ""; // Return an empty string if the input is valid
  }
};

export const validateCity = (cities) => {
  if (!cities) {
    return "Please select a city.";
  } else {
    return ""; // Return an empty string if the input is valid
  }
};

export const validateDescription = (description) => {
  if(!description) {
    return "This field is required.";
  } else {
    return "";
  }
}