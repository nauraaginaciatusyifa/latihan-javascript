for (let i = 1; i <= 5; i++) {
    let hasil = "";

    for (let j = 1; j <= 8; j++) {
        if (i === 1 || i === 5 || j === 1 || j === 8) {
            hasil += "*";
        } else {
            hasil += " ";
        }
    }

    console.log(hasil);
}