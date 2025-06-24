
function sanitizeInput(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function sanitizeInputAgain(input) {
    return sanitizeInput(input);
}

module.exports = { sanitizeInput, sanitizeInputAgain };
