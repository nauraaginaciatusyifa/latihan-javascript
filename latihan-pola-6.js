for (let i = 1; i <= 4; i++) {
    let hasil = " ".repeat(4 - i);

    for (let j = 1; j <= (2 * i - 1); j++) {
        hasil += "*";
    }

    console.log(hasil);
}

for (let i = 3; i >= 1; i--) {
    let hasil = " ".repeat(4 - i);

    for (let j = 1; j <= (2 * i - 1); j++) {
        hasil += "*";
    }

    console.log(hasil);
}