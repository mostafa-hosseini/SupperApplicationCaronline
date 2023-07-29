const validatePhone = (phone) => {
    const phoneRegex = new RegExp("^(\\+98|0)?9\\d{9}$");
    return phoneRegex.test(phone);
  };
  
  const validateEmail = (mail) => {
    const emailRegex = new RegExp("^[^s@]+@[^s@]+.[^s@]+$");
    return mail === "" || emailRegex.test(mail);
  };
  
  export { validatePhone, validateEmail };
  