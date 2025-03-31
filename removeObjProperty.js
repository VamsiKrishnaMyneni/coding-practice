const removeObjProperty = (obj, prop) => {
    if (obj.hasOwnProperty(prop)) {
        const { [prop]: _, ...rest } = obj;

        return rest;
    }
    return obj;
}


console.log(removeObjProperty({ a: 1, b: 2, c: 3 }, 'b')); // { a: 1, c: 3 }