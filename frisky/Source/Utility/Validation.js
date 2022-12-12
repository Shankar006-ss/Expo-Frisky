export default class Validation {
  //email validation
  static validateEmail(email) {
    let mail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mail.test(String(email).toLowerCase());
  }
  //password validation
  static validatePassword(password) {
    let pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return pass.test(password);
  }
  //name validation
  static validateName(name) {
    let rule = /^[a-zA-Z]{2,11}$/;
    return rule.test(name);
  }
}
