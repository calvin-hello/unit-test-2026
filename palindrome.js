const palindromeChecker = (str) => {
    const cleaned = str.toLowerCase().replace(/\s+/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

module.export = palindromeChecker