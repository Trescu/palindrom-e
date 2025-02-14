//input létrehozása
const userInput = document.createElement('input');
userInput.setAttribute('id', 'text-input');
userInput.placeholder = "Ide gépeljen.."
userInput.setAttribute('required', 'true');

//gomb létrehozása
const btn = document.createElement('button');
btn.setAttribute('id', 'check-btn');
btn.innerHTML = "Küldés";
btn.setAttribute('type', 'submit');

//div létrehozása
const resultP = document.createElement('div');
resultP.setAttribute('id', 'result')
resultP.innerText = "Tudd meg még ma! ";
resultP.style.display = 'block'

//elemek csatolása a DOM-ba
const currentDiv = document.getElementById('teszt')
document.body.insertBefore(userInput, currentDiv)
document.body.insertBefore(btn, currentDiv)
document.body.insertBefore(resultP, currentDiv)

//palindrom kiértékelése igaz vagy hamisra
//példák: five|\_/|four, 0_0 (: /-\ :) 0-0
function isPalindrome(){
    const word = userInput.value ? userInput.value.toLowerCase() : alert('Please input a value');
    const newWord = word.replace(/\s|\.|\,|-|_|\?|\!/g, '');
    const length = newWord.length;
    const num = Math.floor(length / 2);
    const firstHalf = newWord.slice(0, num);
    const otherHalf = length % 2 === 0 ? newWord.slice(num, length) : newWord.slice(num + 1, length);
    const otherArray = Array.from(otherHalf).reverse();
    let halfOfnewWord = "";

    for (let letter of otherArray) {
        switch (letter) {
            case "(":
                letter = ")";
                break;
            case ")":
                letter = "(";
                break;
            case "\\":
                letter = "/";
                break;
            case "/":
                letter = "\\";
                break;
            case "{":
                letter = "}";
                break;
            case "}":
                letter = "{";
                break;
        }
        halfOfnewWord += letter
    }

    if (halfOfnewWord === firstHalf) {
        resultP.innerText = "";
        resultP.innerText += `A(z) "${userInput.value}" egy palindrom`
    } else {
        resultP.innerText = "";
        resultP.innerText += `A(z)  "${userInput.value}" nem egy palindrom`
    }
};

btn.addEventListener('click', isPalindrome)