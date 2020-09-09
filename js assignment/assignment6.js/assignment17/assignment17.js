function convert() {

    var strr = document.getElementById("str").value;
    if (!strr) {
        alert("Please enter valid input string");
        return;
    }
    let i = 0;
    let op = "";
    for (i = 0; i < strr.length; i++) {

        if (strr[i] > "A" && strr[i] < "Z") {
            op = op + strr[i].toLowerCase();
        }

        else {
            op = op + strr[i].toUpperCase();

        }
    }
    document.write("Output String is :: " + op);

}

