document.addEventListener("DOMContentLoaded", function () {
    const detectButton = document.getElementById("detectButton");
    detectButton.addEventListener("click", detectPalindromes);
});

function detectPalindromes() {
    const wordCount = parseInt(document.getElementById("wordCount").value);
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    for (let i = 0; i < wordCount; i++) {
        const word = prompt(`Ingrese la palabra ${i + 1}`);
        if (isPalindrome(word)) {
            resultsDiv.innerHTML += `<p>${word} es un palíndromo</p>`;
        } else {
            resultsDiv.innerHTML += `<p>${word} no es un palíndromo</p>`;
        }
    }
}

function isPalindrome(word) {
    const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, "");
    const reversedWord = cleanedWord.split("").reverse().join("");
    return cleanedWord === reversedWord;
}