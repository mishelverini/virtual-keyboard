window.onload = function() {

}
let lang = 'rus';
let shift = false;
let capsLock = false;
if (localStorage.getItem('lang') != undefined) {
    lang = localStorage.getItem('lang');
}
console.log(lang);

let arrKeyClass = [
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key keyboard__key_backspace',
    'keyboard__key keyboard__key_tab',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key keyboard__key_slash',
    'keyboard__key keyboard__key_capslock',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key keyboard__key_enter',
    'keyboard__key keyboard__key_shift',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key keyboard__key_shift',
    'keyboard__key',
    'keyboard__key',
    'keyboard__key keyboard__key_alt',
    'keyboard__key keyboard__key_space',
    'keyboard__key keyboard__key_alt',
    'keyboard__key',
    'keyboard__key arrow',
    'arrow-up-down',
    'keyboard__key arrow'
];

let arrSymbolEng = [
    {symbol: '`',
     which: 96,
     shiftWhich: 126,
     code: 'IntlBackslash',
     shiftSymbol: '~',
     capsSymbol: '`'
    },
    {symbol: '1',
     which: 49,
     shiftWhich: 33,
     code: 'Digit1',
     shiftSymbol: '!',
     capsSymbol: '1'
    },
    {symbol: '2',
     which: 50,
     shiftWhich: 64,
     code: 'Digit2',
     shiftSymbol: '@',
     capsSymbol: '2'
    },
    {symbol: '3',
     which: 51,
     shiftWhich: 35,
     code: 'Digit3',
     shiftSymbol: '#',
     capsSymbol: '3'
    },
    {symbol: '4',
     which: 52,
     shiftWhich: 36,
     code: 'Digit4',
     shiftSymbol: '$',
     capsSymbol: '4'
    },
    {symbol: '5',
     which: 53,
     shiftWhich: 37,
     code: 'Digit5',
     shiftSymbol: '%',
     capsSymbol: '5'
    },
    {symbol: '6',
     which: 54,
     shiftWhich: 94,
     code: 'Digit6',
     shiftSymbol: '^',
     capsSymbol: '6'
    },
    {symbol: '7',
     which: 55,
     shiftWhich: 38,
     code: 'Digit7',
     shiftSymbol: '&amp;',
     capsSymbol: '7'
    },
    {symbol: '8',
     which: 56,
     shiftWhich: 42,
     code: 'Digit8',
     shiftSymbol: '*',
     capsSymbol: '8'
    },
    {symbol: '9',
     which: 57,
     shiftWhich: 40,
     code: 'Digit9',
     shiftSymbol: '(',
     capsSymbol: '9'
    },
    {symbol: '0',
     which: 48,
     shiftWhich: 41,
     code: 'Digit0',
     shiftSymbol: ')',
     capsSymbol: '0'
    },
    {symbol: '-',
     which: 45,
     shiftWhich: 95,
     code: 'Minus',
     shiftSymbol: '_',
     capsSymbol: '-'
    },
    {symbol: '=',
     which: 61,
     shiftWhich: 43,
     code: 'Equal',
     shiftSymbol: '+',
     capsSymbol: '='
    },
    {symbol: 'Backspace',
     which: 8,
     shiftWhich: 8,
     code: 'Backspace',
     shiftSymbol: 'Backspace',
     capsSymbol: 'Backspace'
    },
    {symbol: 'Tab',
     which: 9,
     shiftWhich: 9,
     code: 'Tab',
     shiftSymbol: 'Tab',
     capsSymbol: 'Tab'
    },
    {symbol: 'q',
     which: 81,
     shiftWhich: 81,
     code: 'KeyQ',
     shiftSymbol: 'Q',
     capsSymbol: 'Q'
    },
    {symbol: 'w',
     which: 87,
     shiftWhich: 87,
     code: 'KeyW',
     shiftSymbol: 'W',
     capsSymbol: 'W'
    },
    {symbol: 'e',
     which: 69,
     shiftWhich: 69,
     code: 'KeyE',
     shiftSymbol: 'E',
     capsSymbol: 'E'
    },
    {symbol: 'r',
     which: 82,
     shiftWhich: 82,
     code: 'KeyR',
     shiftSymbol: 'R',
     capsSymbol: 'R'
    },
    {symbol: 't',
     which: 84,
     shiftWhich: 84,
     code: 'KeyT',
     shiftSymbol: 'T',
     capsSymbol: 'T'
    },
    {symbol: 'y',
     which: 89,
     shiftWhich: 89,
     code: 'KeyY',
     shiftSymbol: 'Y',
     capsSymbol: 'Y'
    },
    {symbol: 'u',
     which: 85,
     shiftWhich: 85,
     code: 'KeyU',
     shiftSymbol: 'U',
     capsSymbol: 'U'
    },
    {symbol: 'i',
     which: 73,
     shiftWhich: 73,
     code: 'KeyI',
     shiftSymbol: 'I',
     capsSymbol: 'I'
    },
    {symbol: 'o',
     which: 79,
     shiftWhich: 79,
     code: 'KeyO',
     shiftSymbol: 'O',
     capsSymbol: 'O'
    },
    {symbol: 'p',
     which: 80,
     shiftWhich: 80,
     code: 'KeyP',
     shiftSymbol: 'P',
     capsSymbol: 'P'
    },
    {symbol: '[',
     which: 91,
     shiftWhich: 123,
     code: 'BracketLeft',
     shiftSymbol: '{',
     capsSymbol: '['
    },
    {symbol: ']',
     which: 93,
     shiftWhich: 125,
     code: 'BracketRight',
     shiftSymbol: '}',
     capsSymbol: ']'
    },
    {symbol: '\\',
     which: 92,
     shiftWhich: 124,
     code: 'Backslash',
     shiftSymbol: '|',
     capsSymbol: '\\'
    },
    {symbol: 'CapsLock',
     which: null,
     shiftWhich: null,
     code: 'CapsLock',
     shiftSymbol: 'CapsLock',
     capsSymbol: 'CapsLock'
    },
    {symbol: 'a',
     which: 65,
     shiftWhich: 65,
     code: 'KeyA',
     shiftSymbol: 'A',
     capsSymbol: 'A'
    },
    {symbol: 's',
     which: 83,
     shiftWhich: 83,
     code: 'KeyS',
     shiftSymbol: 'S',
     capsSymbol: 'S'
    },
    {symbol: 'd',
     which: 68,
     shiftWhich: 68,
     code: 'KeyD',
     shiftSymbol: 'D',
     capsSymbol: 'D'
    },
    {symbol: 'f',
     which: 70,
     shiftWhich: 70,
     code: 'KeyF',
     shiftSymbol: 'F',
     capsSymbol: 'F'
    },
    {symbol: 'g',
     which: 71,
     shiftWhich: 71,
     code: 'KeyG',
     shiftSymbol: 'G',
     capsSymbol: 'G'
    },
    {symbol: 'h',
     which: 72,
     shiftWhich: 72,
     code: 'KeyH',
     shiftSymbol: 'H',
     capsSymbol: 'H'
    },
    {symbol: 'j',
     which: 74,
     shiftWhich: 74,
     code: 'KeyJ',
     shiftSymbol: 'J',
     capsSymbol: 'J'
    },
    {symbol: 'k',
     which: 75,
     shiftWhich: 75,
     code: 'KeyK',
     shiftSymbol: 'K',
     capsSymbol: 'K'
    },
    {symbol: 'l',
     which: 76,
     shiftWhich: 76,
     code: 'KeyL',
     shiftSymbol: 'L',
     capsSymbol: 'L'
    },
    {symbol: ';',
     which: 59,
     shiftWhich: 58,
     code: 'Semicolon',
     shiftSymbol: ':',
     capsSymbol: ';'
    },
    {symbol: '\'',
     which: 39,
     shiftWhich: 34,
     code: 'Quote',
     shiftSymbol: '"',
     capsSymbol: '\''
    },
    {symbol: 'Enter',
     which: 13,
     shiftWhich: 13,
     code: 'Enter',
     shiftSymbol: 'Enter',
     capsSymbol: 'Enter'
    },
    {symbol: 'Shift',
     which: null,
     shiftWhich: null,
     code: 'ShiftLeft',
     shiftSymbol: 'Shift',
     capsSymbol: 'Shift'
    },
    {symbol: 'z',
     which: 90,
     shiftWhich: 90,
     code: 'KeyZ',
     shiftSymbol: 'Z',
     capsSymbol: 'Z'
    },
    {symbol: 'x',
     which: 88,
     shiftWhich: 88,
     code: 'KeyX',
     shiftSymbol: 'X',
     capsSymbol: 'X'
    },
    {symbol: 'c',
     which: 67,
     shiftWhich: 67,
     code: 'KeyC',
     shiftSymbol: 'C',
     capsSymbol: 'C'
    },
    {symbol: 'v',
     which: 86,
     shiftWhich: 86,
     code: 'KeyV',
     shiftSymbol: 'V',
     capsSymbol: 'V'
    },
    {symbol: 'b',
     which: 66,
     shiftWhich: 66,
     code: 'KeyB',
     shiftSymbol: 'B',
     capsSymbol: 'B'
    },
    {symbol: 'n',
     which: 78,
     shiftWhich: 78,
     code: 'KeyN',
     shiftSymbol: 'N',
     capsSymbol: 'N'
    },
    {symbol: 'm',
     which: 77,
     shiftWhich: 77,
     code: 'KeyM',
     shiftSymbol: 'M',
     capsSymbol: 'M'
    },
    {symbol: ',',
     which: 44,
     shiftWhich: 60,
     code: 'Comma',
     shiftSymbol: '&lt;',
     capsSymbol: ','
    },
    {symbol: '.',
     which: 46,
     shiftWhich: 62,
     code: 'Period',
     shiftSymbol: '&gt;',
     capsSymbol: '.'
    },
    {symbol: '/',
     which: 47,
     shiftWhich: 63,
     code: 'Slash',
     shiftSymbol: '?',
     capsSymbol: '/'
    },
    {symbol: 'Shift',
     which: null,
     shiftWhich: null,
     code: 'ShiftRight',
     shiftSymbol: 'Shift',
     capsSymbol: 'Shift'
    },
    {symbol: 'Ctrl',
     which: null,
     shiftWhich: null,
     code: 'ControlLeft',
     shiftSymbol: 'Ctrl',
     capsSymbol: 'Ctrl'
    },
    {symbol: 'fn',
     which: null,
     shiftWhich: null,
     code: 'null',
     shiftSymbol: 'fn',
     capsSymbol: 'fn'
    },
    {symbol: 'Alt',
     which: null,
     shiftWhich: null,
     code: 'AltLeft',
     shiftSymbol: 'Alt',
     capsSymbol: 'Alt'
    },
    {symbol: ' ',
     which: 32,
     shiftWhich: 32,
     code: 'Space',
     shiftSymbol: ' ',
     capsSymbol: ' '
    },
    {symbol: 'Alt',
     which: null,
     shiftWhich: null,
     code: 'AltRight',
     shiftSymbol: 'Alt',
     capsSymbol: 'Alt'
    },
    {symbol: 'Ctrl',
     which: null,
     shiftWhich: null,
     code: 'ControlRight',
     shiftSymbol: 'Ctrl',
     capsSymbol: 'Ctrl'
    },
    {symbol: '&larr;',
    which: 37,
    shiftWhich: 37,
    code: 'ArrowLeft',
    shiftSymbol: '&larr;',
    capsSymbol: '&larr;'
   },
    '',
    {symbol: '&rarr;',
     which: 39,
     shiftWhich: 39,
     code: 'ArrowRight',
     shiftSymbol: '&rarr;',
     capsSymbol: '&rarr;'
    }
];

let arrSymbolRus = [
    {symbol: '`',
     which: 96,
     shiftWhich: 91,
     code: 'IntlBackslash',
     shiftSymbol: '[',
     capsSymbol: '`'
    },
    {symbol: '1',
     which: 49,
     shiftWhich: 33,
     code: 'Digit1',
     shiftSymbol: '!',
     capsSymbol: '1'
    },
    {symbol: '2',
     which: 50,
     shiftWhich: 34,
     code: 'Digit2',
     shiftSymbol: '"',
     capsSymbol: '2'
    },
    {symbol: '3',
     which: 51,
     shiftWhich: 8470,
     code: 'Digit3',
     shiftSymbol: '№',
     capsSymbol: '3'
    },
    {symbol: '4',
     which: 52,
     shiftWhich: 37,
     code: 'Digit4',
     shiftSymbol: '%',
     capsSymbol: '4'
    },
    {symbol: '5',
     which: 53,
     shiftWhich: 58,
     code: 'Digit5',
     shiftSymbol: ':',
     capsSymbol: '5'
    },
    {symbol: '6',
     which: 54,
     shiftWhich: 44,
     code: 'Digit6',
     shiftSymbol: ',',
     capsSymbol: '6'
    },
    {symbol: '7',
     which: 55,
     shiftWhich: 46,
     code: 'Digit7',
     shiftSymbol: '.',
     capsSymbol: '7'
    },
    {symbol: '8',
     which: 56,
     shiftWhich: 59,
     code: 'Digit8',
     shiftSymbol: ';',
     capsSymbol: '8'
    },
    {symbol: '9',
     which: 57,
     shiftWhich: 40,
     code: 'Digit9',
     shiftSymbol: '(',
     capsSymbol: '9'
    },
    {symbol: '0',
     which: 48,
     shiftWhich: 41,
     code: 'Digit0',
     shiftSymbol: ')',
     capsSymbol: '0'
    },
    {symbol: '-',
     which: 45,
     shiftWhich: 95,
     code: 'Minus',
     shiftSymbol: '_',
     capsSymbol: '-'
    },
    {symbol: '=',
     which: 61,
     shiftWhich: 43,
     code: 'Equal',
     shiftSymbol: '+',
     capsSymbol: '='
    },
    {symbol: 'Backspace',
     which: 8,
     shiftWhich: 8,
     code: 'Backspace',
     shiftSymbol: 'Backspace',
     capsSymbol: 'Backspace'
    },
    {symbol: 'Tab',
     which: 9,
     shiftWhich: 9,
     code: 'Tab',
     shiftSymbol: 'Tab',
     capsSymbol: 'Tab'
    },
    {symbol: 'й',
     which: 1081,
     shiftWhich: 1081,
     code: 'KeyQ',
     shiftSymbol: 'Й',
     capsSymbol: 'Й'
    },
    {symbol: 'ц',
     which: 1094,
     shiftWhich: 1094,
     code: 'KeyW',
     shiftSymbol: 'Ц',
     capsSymbol: 'Ц'
    },
    {symbol: 'у',
     which: 1091,
     shiftWhich: 1091,
     code: 'KeyE',
     shiftSymbol: 'У',
     capsSymbol: 'У'
    },
    {symbol: 'к',
     which: 1082,
     shiftWhich: 1082,
     code: 'KeyR',
     shiftSymbol: 'К',
     capsSymbol: 'К'
    },
    {symbol: 'е',
     which: 1077,
     shiftWhich: 1077,
     code: 'KeyT',
     shiftSymbol: 'Е',
     capsSymbol: 'Е'
    },
    {symbol: 'н',
     which: 1085,
     shiftWhich: 1085,
     code: 'KeyY',
     shiftSymbol: 'Н',
     capsSymbol: 'Н'
    },
    {symbol: 'г',
     which: 1075,
     shiftWhich: 1075,
     code: 'KeyU',
     shiftSymbol: 'Г',
     capsSymbol: 'Г'
    },
    {symbol: 'ш',
     which: 1096,
     shiftWhich: 1096,
     code: 'KeyI',
     shiftSymbol: 'Ш',
     capsSymbol: 'Ш'
    },
    {symbol: 'щ',
     which: 1097,
     shiftWhich: 1097,
     code: 'KeyO',
     shiftSymbol: 'Щ',
     capsSymbol: 'Щ'
    },
    {symbol: 'з',
     which: 1079,
     shiftWhich: 1079,
     code: 'KeyP',
     shiftSymbol: 'З',
     capsSymbol: 'З'
    },
    {symbol: 'х',
     which: 1093,
     shiftWhich: 1093,
     code: 'BracketLeft',
     shiftSymbol: 'Х',
     capsSymbol: 'Х'
    },
    {symbol: 'ъ',
     which: 1098,
     shiftWhich: 1098,
     code: 'BracketRight',
     shiftSymbol: 'Ъ',
     capsSymbol: 'Ъ'
    },
    {symbol: 'ё',
     which: 1105,
     shiftWhich: 1105,
     code: 'Backslash',
     shiftSymbol: 'Ё',
     capsSymbol: 'Ё'
    },
    {symbol: 'CapsLock',
     which: null,
     shiftWhich: null,
     code: 'CapsLock',
     shiftSymbol: 'CapsLock',
     capsSymbol: 'CapsLock'
    },
    {symbol: 'ф',
     which: 1092,
     shiftWhich: 1092,
     code: 'KeyA',
     shiftSymbol: 'Ф',
     capsSymbol: 'Ф'
    },
    {symbol: 'ы',
     which: 1099,
     shiftWhich: 1099,
     code: 'KeyS',
     shiftSymbol: 'Ы',
     capsSymbol: 'Ы'
    },
    {symbol: 'в',
     which: 1074,
     shiftWhich: 1074,
     code: 'KeyD',
     shiftSymbol: 'В',
     capsSymbol: 'В'
    },
    {symbol: 'а',
     which: 1072,
     shiftWhich: 1072,
     code: 'KeyF',
     shiftSymbol: 'А',
     capsSymbol: 'А'
    },
    {symbol: 'п',
     which: 1087,
     shiftWhich: 1087,
     code: 'KeyG',
     shiftSymbol: 'П',
     capsSymbol: 'П'
    },
    {symbol: 'р',
     which: 1088,
     shiftWhich: 1088,
     code: 'KeyH',
     shiftSymbol: 'Р',
     capsSymbol: 'Р'
    },
    {symbol: 'о',
     which: 1086,
     shiftWhich: 1086,
     code: 'KeyJ',
     shiftSymbol: 'О',
     capsSymbol: 'О'
    },
    {symbol: 'л',
     which: 1083,
     shiftWhich: 1083,
     code: 'KeyK',
     shiftSymbol: 'Л',
     capsSymbol: 'Л'
    },
    {symbol: 'д',
     which: 1076,
     shiftWhich: 1076,
     code: 'KeyL',
     shiftSymbol: 'Д',
     capsSymbol: 'Д'
    },
    {symbol: 'ж',
     which: 1078,
     shiftWhich: 1078,
     code: 'Semicolon',
     shiftSymbol: 'Ж',
     capsSymbol: 'Ж'
    },
    {symbol: 'э',
     which: 1101,
     shiftWhich: 1101,
     code: 'Quote',
     shiftSymbol: 'Э',
     capsSymbol: 'Э'
    },
    {symbol: 'Enter',
     which: 13,
     shiftWhich: 13,
     code: 'Enter',
     shiftSymbol: 'Enter',
     capsSymbol: 'Enter'
    },
    {symbol: 'Shift',
     which: null,
     shiftWhich: null,
     code: 'ShiftLeft',
     shiftSymbol: 'Shift',
     capsSymbol: 'Shift'
    },
    {symbol: 'я',
     which: 1103,
     shiftWhich: 1103,
     code: 'KeyZ',
     shiftSymbol: 'Я',
     capsSymbol: 'Я'
    },
    {symbol: 'ч',
     which: 1095,
     shiftWhich: 1095,
     code: 'KeyX',
     shiftSymbol: 'Ч',
     capsSymbol: 'Ч'
    },
    {symbol: 'с',
     which: 1089,
     shiftWhich: 1089,
     code: 'KeyC',
     shiftSymbol: 'С',
     capsSymbol: 'С'
    },
    {symbol: 'м',
     which: 1084,
     shiftWhich: 1084,
     code: 'KeyV',
     shiftSymbol: 'М',
     capsSymbol: 'М'
    },
    {symbol: 'и',
     which: 1080,
     shiftWhich: 1080,
     code: 'KeyB',
     shiftSymbol: 'И',
     capsSymbol: 'И'
    },
    {symbol: 'т',
     which: 1090,
     shiftWhich: 1090,
     code: 'KeyN',
     shiftSymbol: 'Т',
     capsSymbol: 'Т'
    },
    {symbol: 'ь',
     which: 1100,
     shiftWhich: 1100,
     code: 'KeyM',
     shiftSymbol: 'Ь',
     capsSymbol: 'Ь'
    },
    {symbol: 'б',
     which: 1073,
     shiftWhich: 1073,
     code: 'Comma',
     shiftSymbol: 'Б',
     capsSymbol: 'Б'
    },
    {symbol: 'ю',
     which: 1102,
     shiftWhich: 1102,
     code: 'Period',
     shiftSymbol: 'Ю',
     capsSymbol: 'Ю'
    },
    {symbol: '/',
     which: 47,
     shiftWhich: 63,
     code: 'Slash',
     shiftSymbol: '?',
     capsSymbol: '/'
    },
    {symbol: 'Shift',
     which: null,
     shiftWhich: null,
     code: 'ShiftRight',
     shiftSymbol: 'Shift',
     capsSymbol: 'Shift'
    },
    {symbol: 'Ctrl',
     which: null,
     shiftWhich: null,
     code: 'ControlLeft',
     shiftSymbol: 'Ctrl',
     capsSymbol: 'Ctrl'
    },
    {symbol: 'fn',
     which: null,
     shiftWhich: null,
     code: 'null',
     shiftSymbol: 'fn',
     capsSymbol: 'fn'
    },
    {symbol: 'Alt',
     which: null,
     shiftWhich: null,
     code: 'AltLeft',
     shiftSymbol: 'Alt',
     capsSymbol: 'Alt'
    },
    {symbol: ' ',
     which: 32,
     shiftWhich: 32,
     code: 'Space',
     shiftSymbol: ' ',
     capsSymbol: ' '
    },
    {symbol: 'Alt',
     which: null,
     shiftWhich: null,
     code: 'AltRight',
     shiftSymbol: 'Alt',
     capsSymbol: 'Alt'
    },
    {symbol: 'Ctrl',
     which: null,
     shiftWhich: null,
     code: 'ControlRight',
     shiftSymbol: 'Ctrl',
     capsSymbol: 'Ctrl'
    },
    {symbol: '<',
    which: 37,
    shiftWhich: 37,
    code: 'ArrowLeft',
    shiftSymbol: '<',
    capsSymbol: '<'
   },
    '',
    {symbol: '>',
     which: 39,
     shiftWhich: 39,
     code: 'ArrowRight',
     shiftSymbol: '>',
     capsSymbol: '>'
    }
];

let arrKeys = [];

function createElem(element) {
    return document.createElement(element);
}
function addClassName(element, classNameString) {
    // element.classList.add(classNameString);
    element.className = classNameString;
}
function addElem(element, node){
    node.append(element);
}
function addText(element, string) {
    element.innerHTML = string;
}
function addLocalStorage(lang) {
    localStorage.setItem('lang', lang);
}
function pressShiftRus() {
    for (let i = 0; i < arrKeys.length; i++) {
        let text = arrKeys[i].textContent;
        if(text.length == 1) {
            arrKeys[i].textContent = arrSymbolRus[i].shiftSymbol;
            console.log(arrKeys[i]);
        }
    }
}

// ------------------wrapper------------------ //
let wrapper = createElem('div');
addClassName(wrapper, 'wrapper');
addElem(wrapper, this.document.body);
// ------------------wrapper------------------ //

// ----------add screen and textarea---------- //
let screen = createElem('div');
addClassName(screen, 'screen');
addElem(screen, wrapper);

let textarea = createElem('textarea');
addElem(textarea, screen);
// ----------add screen and textarea---------- //

// -----------------keyboard----------------- //
let keyboard = createElem('div');
addClassName(keyboard, 'keyboard');
addElem(keyboard, wrapper);

// keyboard__box-yellow //
let boxYellow = createElem('div');
addClassName(boxYellow, 'keyboard__box-yellow');
addElem(boxYellow, keyboard);

let boxYellowSecond = createElem('div');
addClassName(boxYellowSecond, 'keyboard__box-yellow-2');
addElem(boxYellowSecond, boxYellow);
// keyboard__box-yellow //

// keyboard__logo //
let keyboardLogo = createElem('div');
addText(keyboardLogo, 'RS virtual keyboard');
addClassName(keyboardLogo, 'keyboard__logo');
addElem(keyboardLogo, keyboard);
// keyboard__logo //

// keyboard__keys //
let keyboardKeys = createElem('section');
addClassName(keyboardKeys, 'keyboard__keys');
addElem(keyboardKeys, keyboard);
// keys //

function createInnerSpan (arr, key, i, lang) {
    let spanLang = createElem('span');
    addClassName(spanLang, lang + ' hidden');
    addElem(spanLang, key);

    let spanShiftDown = createElem('span');
    addClassName(spanShiftDown, 'shiftDown' + ' hidden');
    addText(spanShiftDown, arr[i].symbol);
    addElem(spanShiftDown, spanLang);

    let spanShiftUp = createElem('span');
    addClassName(spanShiftUp, 'shiftUp' + ' hidden');
    addText(spanShiftUp, arr[i].shiftSymbol);
    addElem(spanShiftUp, spanLang);

    let spanCaps = createElem('span');
    addClassName(spanCaps, 'caps' + ' hidden');
    addText(spanCaps, arr[i].capsSymbol);
    addElem(spanCaps, spanLang);
}

function setAttributeKey(arr, key, i) {
    key.setAttribute('symbol', arr[i].symbol);
    key.setAttribute('code', arr[i].code);
    key.setAttribute('which', arr[i].which);
    key.setAttribute('shiftWhich', arr[i].shiftWhich);
}
function showKeys(selector) {
    let arrKeys = document.querySelectorAll(selector);
    for (let i = 0; i < arrKeys.length; i++) {
        arrKeys[i].classList.toggle('hidden');
    }
}

function createKey() {

    for(let i = 0; i < arrKeyClass.length; i++) {
        if(i == arrKeyClass.length - 2) {
            let key = createElem('div');
            addClassName(key, arrKeyClass[i]);
            addElem(key, keyboardKeys);
    
            let keyUp = createElem('div');
            addText(keyUp, '<');
            addClassName(keyUp, 'keyboard__key key-arrow key-arrow-up');
            addElem(keyUp, key);
    
    
            let keyDown = createElem('div');
            addText(keyDown, '>');
            addClassName(keyDown, 'keyboard__key key-arrow key-arrow-down');
            addElem(keyDown, key);
            arrKeys.push(key);
    
            continue;
        }
        let key = createElem('div');

        createInnerSpan(arrSymbolRus, key, i, 'rus');
        setAttributeKey(arrSymbolRus, key, i);

        createInnerSpan(arrSymbolEng, key, i, 'eng');
        setAttributeKey(arrSymbolEng, key, i);

        addClassName(key, arrKeyClass[i]);
        addElem(key, keyboardKeys);
        arrKeys.push(key);
    }
}


createKey();
showKeys(`.${lang}`);
showKeys(`.${lang} .shiftDown`);

// keys //
// keyboard__keys //
// -----------------keyboard----------------- //
  
document.querySelector('.keyboard__keys').addEventListener('click', function(event) {

    let code = event.target.tagName == 'SPAN' ? event.target.parentNode.parentNode.getAttribute('which') : event.target.getAttribute('which');

    let shiftCode = event.target.tagName == 'SPAN' ? event.target.parentNode.parentNode.getAttribute('shiftWhich') : event.target.getAttribute('shiftWhich');

    textarea.focus();

    let element = event.target;

    if (element.tagName == 'DIV' || element.tagName == 'SPAN') {

        if (shift == false) {
            textarea.value += String.fromCharCode(code).toLocaleLowerCase();
        } else {
            textarea.value += String.fromCharCode(shiftCode);
        }
        if (code == 8) {
            textarea.value = textarea.value.slice(0, -2);
        }
    }
 })

window.onkeypress = function(event) {
    textarea.focus();
    let key = window.event.keyCode;
    let element = event.target;
    if (element.tagName != 'TEXTAREA') {
        textarea.value += String.fromCharCode(key);
    } 
    if (element.tagName == 'TEXTAREA') {
        event.preventDefault();
        textarea.value += String.fromCharCode(key);
    }
}

document.addEventListener('keydown', function(event) {
    textarea.focus();
    let code = event.keyCode;
    let element = event.target;
    if (element.tagName != 'TEXTAREA') {
        if(code == 8) {
            textarea.value = textarea.value.slice(0, -1);
        }
    }
    if(code == 16) {
        shift = true;
        showKeys(`.${lang} .shiftDown`);
        showKeys(`.${lang} .shiftUp`);
    }
    if(code == 20) {
        if (capsLock == false) {
            showKeys(`.${lang} .shiftUp`);
            capsLock = true;
        }
        if (capsLock == true) {
            showKeys(`.${lang} .shiftDown`);
            capsLock = false;
        }
    }
    event.stopPropagation();
    animateColor(event.code);
})

document.addEventListener('keyup', function(event){
    let code = event.keyCode;
    if(code == 16) {
        shift = false;
        showKeys(`.${lang} .shiftUp`);
        showKeys(`.${lang} .shiftDown`);
    }
    if(code == 20) {
        if (capsLock == false) {
            showKeys(`.${lang} .shiftUp`);
                apsLock = true;
        }
        if (capsLock == true) {
            showKeys(`.${lang} .shiftDown`);
            capsLock = false;
        }
    }
    animateColor(event.code);
});

document.onkeydown = function(event) {
    console.log(lang);
    if (event.code == 'AltLeft' || event.code == 'AltRight') {
        document.onkeyup = function(event) {
            if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
                lang = lang == 'rus' ? 'eng' : 'rus';
                if (lang == 'rus') {
                    showKeys('.eng');
                    showKeys('.eng .shiftDown');
                    showKeys('.rus');
                    showKeys('.rus .shiftDown');
                } 
                else if (lang == 'eng') {
                    showKeys('.rus');
                    showKeys('.rus .shiftDown');
                    showKeys('.eng');
                    showKeys('.eng .shiftDown');
                }
                addLocalStorage(lang);
                console.log(lang);
            }
        }
    }
}

function animateColor (evetKey) {
    for (let i = 0; i < arrKeys.length; i++) {
        if (arrKeys[i].getAttribute('code') == evetKey) {
            arrKeys[i].classList.toggle('animate');
        }
    }
}

