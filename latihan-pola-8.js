let tinggi = 5;

for (let i = 1; i <= tinggi; i++) {
    let hasil = " ".repeat(tinggi - i);

    for (let j = 1; j <= (2 * i - 1); j++) {
        if (i === tinggi || j === 1 || j === (2 * i - 1)) {
            hasil += "*";
        } else {
            hasil += " ";
        }
    }

    console.log(hasil);
}