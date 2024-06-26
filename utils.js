const getRandomElement = (arr) => {
    if (!Array.isArray(arr)) throw new Error("Expected an array");
    return arr[Math.floor(Math.random() * arr.length)];
};

const getElementsBasedOffKeyAndValue = (arr, key, value) => {
    const filteredArray = arr.filter((item) => item[key] === value);
    return filteredArray;
};

module.exports = {
    getRandomElement,
    getElementsBasedOffKeyAndValue,
};
