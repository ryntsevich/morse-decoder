const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const LETTER_TABLE = {
        '00': '',
        '10': '.',
        '11': '-',
    };
    const probel = '**********';
    const letter_length = 10;

    let result = '';

    for (i = 0; i < expr.length; i += letter_length) {
        let cur_letter_code = expr.substr(i, letter_length);
        if (cur_letter_code == probel) {
            result += ' ';
        } else {
            for (j = 0, symb = ''; j < letter_length; j += 2) {
                symb += LETTER_TABLE[cur_letter_code.substr(j, 2)];
            }
            result += (MORSE_TABLE[symb]);
        }
    }
    return (result);
}

module.exports = {
    decode
}