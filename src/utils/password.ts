export function generatePassword() {
    const used = new Set();
    let password = "";
    while (password.length < 6) {
        const randomDigit = Math.floor(Math.random() * 10).toString();
        if (!used.has(randomDigit)) {
            used.add(randomDigit);
            password += randomDigit;
        }
    }
    return password;
}
