function encrypt(text, shift) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            char = String.fromCharCode(((code - base + shift) % 26) + base);
        }

        result += char;
    }

    return result;
}

function decrypt(text, shift) {
    return encrypt(text, 26 - shift);
}

function encryptText() {
    const text = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shiftKey").value);
    document.getElementById("result").textContent = encrypt(text, shift);
}

function decryptText() {
    const text = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shiftKey").value);
    document.getElementById("result").textContent = decrypt(text, shift);
}
