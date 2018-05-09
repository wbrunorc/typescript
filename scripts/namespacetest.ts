/// <reference path = "Validation.ts"/>
/// <reference path = "EmailValidator.ts"/>
/// <reference path = "UrlValidator.ts"/>

import EmailValidator = Validations.EmailValidator;
import UrlValidator = Validations.UrlValidator;

let emailExamples = ["lalala", "lalala@lalala", "lalalala@bla.com"];
let urlExamples = ["blabalbla", "blablabla.com", "blablabla.com.br", "www.blablabla.com", "https://www.blablabla.com"];

emailExamples.forEach(email => {
    console.log(`${email}  ${new EmailValidator().isValid(email)}`);
})

urlExamples.forEach(url => {
    console.log(`${url}  ${new UrlValidator().isValid(url)}`);
})