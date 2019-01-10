const uppercasePattern = /[A-Z]/g;
const msPattern = /^ms-/;
const cache = {};

function hyphenateStyleName(string) {
    return string in cache
        ? cache[string]
        : cache[string] = string
            .replace(uppercasePattern, '-$&')
            .toLowerCase()
            .replace(msPattern, '-ms-');
}

export default hyphenateStyleName;
