import { EmailValidatorExternal } from "./EmailValidatorExternal";
import { UrlValidatorExternal } from "./UrlValidatorExternal";

let emailExamples2 = ["lalala", "lalala@lalala", "lalalala@bla.com"];
let urlExamples2 = ["blabalbla", "blablabla.com", "blablabla.com.br", "www.blablabla.com", "https://www.blablabla.com"];

emailExamples2.forEach(email => {
    console.log(`${email}  ${new EmailValidatorExternal().isValid(email)}`);
});

urlExamples2.forEach(url => {
    console.log(`${url}  ${new UrlValidatorExternal().isValid(url)}`);
});