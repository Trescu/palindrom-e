function isPalindrome(str) {
    // Eltávolítja a nem alfanumerikus karaktereket és kisbetűssé alakítja a szöveget
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Megfordítja a szöveget
    let reversedStr = cleanedStr.split('').reverse().join('');
    // Összehasonlítja az eredeti és a megfordított szöveget
    return cleanedStr === reversedStr;
}

document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("form-input");
    const checkButton = document.getElementById("form-button");
    const resultText = document.getElementById("form-p");

    checkButton.addEventListener("click", function(event) {
        event.preventDefault(); // Megakadályozza az űrlap elküldését (ha form része)
        let text = inputField.value.trim();
        if (text.length > 0) {
            resultText.innerHTML = isPalindrome(text) ? `<span id="form-p-span">Palindrom!</span>` : `<span id="form-p-span">Nem</span> palindrom`;
        } else {
            resultText.innerHTML = `Tudd meg <span id="form-p-span">még ma!</span>`;
        }
    });
});
