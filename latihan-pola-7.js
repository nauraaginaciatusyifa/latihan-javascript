for (let i = 4; i >= 1; i--) {
    let hasil = " ".repeat(4 - i);

    for (let j = 1; j <= (2 * i - 1); j++) {
        hasil += "*";
    }

    console.log(hasil);
}

for (let i = 2; i <= 4; i++) {
    let hasil = " ".repeat(4 - i);

    for (let j = 1; j <= (2 * i - 1); j++) {
        hasil += "*";
    }

    console.log(hasil);
}