const threeEquals = (a, b, c) => {
    if(typeof a == 'undefined' || typeof b == 'undefined' || typeof c == 'undefined') {
        alert('One or more inputs a defintly not a number');
    } else{
        return (a == b && a == c && b == c) ? true : false;
    }
};

const twoEquals = (a, b, c) => {
    if(typeof a == 'undefined' || typeof b == 'undefined' || typeof c == 'undefined') {
        alert('One or more inputs a defintly not a number');
    } else{
        return (a == b || a == c || b == c) ? true : false;
    }
};

const noEquals = (a, b, c) => {
    if(typeof a == 'undefined' || typeof b == 'undefined' || typeof c == 'undefined') {
        alert('One or more inputs a defintly not a number');
    } else{
        return (a != b && a != c && b != c) ? true : false;
    }
};

 