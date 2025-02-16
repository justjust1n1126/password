function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSpecial = document.getElementById("special").checked;

    let charset = "abcdefghijklmnopqrstuvwxyz"; // lowercase letters
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // uppercase letters
    if (includeNumbers) charset += "0123456789"; // numbers
    if (includeSpecial) charset += "!@#$%^&*()-_=+[]{}|;:'\",.<>?/"; // special characters

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").textContent = password;
}
