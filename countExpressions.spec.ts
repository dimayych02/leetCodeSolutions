// You are given an expressions like '6+3*(1+4*5)*2'
// Task is - to count it
// The result will be 132

function countPolishSystem(expr: string): string {
    expr = infixToPostfix(expr);
    const stack: string[] = [];

    for (const char of expr) {

        const regExp = new RegExp(/[0-9]/);
        if (regExp.test(char))
            stack.push(char);

        else {

            const second = stack.pop();
            const first = stack.pop();

            switch (char) {

                case '+': stack.push(`${Number(first) + Number(second)}`)
                    break;
                case '-':  stack.push(`${Number(first) - Number(second)}`)
                    break;

                case '*': stack.push(`${Number(first) * Number(second)}`)
                    break;

                case '/': stack.push(`${Math.trunc(Number(first) / Number(second))}`);
                    break;

            }

        }
    }

    return Number(stack.pop()!);
}

// Convert our expression (ex '6+3*(1+4*5)*2' ) to Polish system
function infixToPostfix(expression: string): string {

    // Table with priorities
    const hashTable: Record<string, number> =
    {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };

    let res: string = '';
    const stack: string[] = [];

    for (const char of expression) {

        if (char.match(/[0-9]/))
            res += char;

        else if (char === '(')
            stack.push(char);

        else if (char === ')') {
            while (stack.length && stack[stack.length - 1] !== '(')
                res += stack.pop();
            stack.pop();
        }

        else {
            while (stack.length && hashTable[stack[stack.length - 1]] >= hashTable[char])
                res += stack.pop();
            stack.push(char);
        }
    }

    // Push items in case if stack not empty
    while (stack.length)
        res += stack.pop();

    return res;
}
