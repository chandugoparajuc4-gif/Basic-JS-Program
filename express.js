const vowelCount = function(text) {
    let count = 0;
    for (let ch of text.toLowerCase()) {
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            count = count + 1;
        }
    }
    return count;
};
let str = "JavaScript Program";
console.log("Vowels count:", vowelCount(str));