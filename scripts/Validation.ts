namespace Validations {
    let htmlTagRegex: RegExp = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;

    export interface Validator{
        isValid(str: string): boolean;
    }

    class HtmlTagValidator {
        isValid(str: string): boolean {
            return htmlTagRegex.test(str);
        }
    }

}