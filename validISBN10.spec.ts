export function validISBN10(isbn: string): boolean {
    let sum: number = 0;
    let divLength: number = 0;
    if (isbn.match(/^\d{9}/)) {
        for (let i: number = 0; i < isbn.length; i++) {
            if (i === 10) break;
            (/\d/.test(isbn.charAt(i))) ? sum += Number(isbn.charAt(i)) * (i + 1) :
                (/[а-яА-Яa-zA-Z]/g.test(isbn.charAt(i)) && i === 9) ? sum += romanNumber(isbn.charAt(i)) * (i + 1) : sum
        }

        divLength =
            (/^\d+$/.test(isbn)) ? isbn.length + 1
                : (/[а-яА-Яa-zA-Z]/g.test(isbn) && isbn.length === 10) ? isbn.length + 1
                    : isbn.length - 1;

        return sum % divLength === 0;
    }

    else return false;
    
}