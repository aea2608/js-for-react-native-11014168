//Task 1
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; 
        } else {
            return num * 3; 
        }
    });
}


//Task 2
function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error("Both arrays must have the same length");
    }
   return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

//Task 3
function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error('Both arrays must have the same length.');
    }
     const userProfiles = [];
     for (let i = 0; i < names.length; i++) {
        userProfiles.push({
            originalName: names[i],
            modifiedName: modifiedNames[i],
            id: i + 1
        });
    }
    return userProfiles;
}



