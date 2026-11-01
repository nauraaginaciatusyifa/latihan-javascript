 function cekRole(role) {
    switch (role) {
        case "A":
            console.log("Admin");
            break;
        case "U":
            console.log("User");
            break;
        default:
            console.log("Guest");
    }
}

cekRole("A");