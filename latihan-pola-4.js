for (let i = 1; i <= 4; i++) {
    let hasil = " ".repeat(4 - i);

    for (let j = 1; j <= i; j++) {
        hasil += i;
    }

    console.log(hasil);
}