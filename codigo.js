// Función para encriptar texto
function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

// Función para desencriptar texto
function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

// Función para manejar el evento de encriptar
function handleEncrypt() {
    let inputText = document.getElementById("text-input").value;
    if (validateText(inputText)) {
        let encryptedText = encrypt(inputText);
        document.querySelector(".output-message p:first-child").innerText = "Texto encriptado:";
        document.querySelector(".output-message p:last-child").innerText = encryptedText;
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
    }
}

// Función para manejar el evento de desencriptar
function handleDecrypt() {
    let inputText = document.getElementById("text-input").value;
    if (validateText(inputText)) {
        let decryptedText = decrypt(inputText);
        document.querySelector(".output-message p:first-child").innerText = "Texto desencriptado:";
        document.querySelector(".output-message p:last-child").innerText = decryptedText;
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
    }
}

// Función para validar que el texto cumple con los requisitos
function validateText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

// Asociar las funciones a los botones
document.querySelector(".encrypt-button").addEventListener("click", handleEncrypt);
document.querySelector(".decrypt-button").addEventListener("click", handleDecrypt);
