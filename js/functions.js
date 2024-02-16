test = "Calle 44 No 1991";

function simpleAddress(request) {
    let list = request.split(' ');
    let address = []

    if (isForeignAddress(list) > 0) {
        address = foreignAddress(list, isForeignAddress(list))
    } else if (list.length == 2) {
        address = list
    } else {
        address = biggerAddress(list)
    }

    return `{"${address[0]}", "${address[1]}"}`;
}

function biggerAddress(list) {
    let names = "";
    let number = "";
    let c = 0;
    let address = [];

    for (let word of list) {
        if (/[0-9]/.test(word)) {
            break;
        } else {
            c += 1;
            names += " " + word;
        }
    }

    while (c < list.length) {
        number += " " + list[c];
        c += 1;
    }

    names = names.trim();
    number = number.trim();

    address.push(names);
    address.push(number);

    return address;
}

function foreignAddress(list, num) {
    let names = "";
    let number = "";
    let address = [];
    let c = 0;

    switch (num) {
        case 1:
            for (let word of list) {
                if (/[","]/.test(word)) {
                    number += " " + word;
                    c++;
                    break;
                } else {
                    number += " " + word;
                    c++;
                }
            }
            while (c < list.length) {
                names += " " + list[c];
                c++;
            }

            names = names.trim();
            number = number.trim().replace(",", "");

            address.push(names);
            address.push(number);

            return address;
        case 2:
            for (let word of list) {
                if (/[0-9]/.test(word)) {
                    number += " " + word;
                    c++;
                    break;
                } else {
                    number += " " + word;
                    c++;
                }
            }
            while (c < list.length) {
                names += " " + list[c];
                c++;
            }

            names = names.trim();
            number = number.trim();

            address.push(names);
            address.push(number);

            return address;
        case 3:
            for (let word of list) {
                if (/[","]/.test(word)) {
                    names += " " + word;
                    c++;
                    break;
                } else {
                    names += " " + word;
                    c++;
                }
            }
            while (c < list.length) {
                number += " " + list[c];
                c++;
            }

            names = names.trim().replace(",", "");
            number = number.trim();

            address.push(names);
            address.push(number);

            return address;
        case 4:
            for (let word of list) {
                if (/["No"]/.test(word)) {
                    break;
                } else {
                    names += " " + word;
                    c++;
                }
            }
            while (c < list.length) {
                number += " " + list[c];
                c++;
            }

            names = names.trim();
            number = number.trim();

            address.push(names);
            address.push(number);

            return address;
    }
}

function isForeignAddress(list) {
    for (let word of list) {
        if (/[0-9]/.test(word) && /[","]/.test(word) && word == list[0]) {
            return 1;
        } else if (/[0-9]/.test(word) && word == list[0]) {
            return 2;
        } else if (/[","]/.test(word)) {
            return 3;
        } else if (/["No"]/.test(word)) {
            return 4;
        }
    }
    return 0; 
}

console.log(simpleAddress(test));
