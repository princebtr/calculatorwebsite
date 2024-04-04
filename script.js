function calc(ch) {
    if (ch == "=") {
        document.form1.text1.value = eval(document.form1.text1.value);
    } else {
        if (ch == "C") {
            document.form1.text1.value = "";
        }
        else if(ch=="D"){
            document.form1.text1.value = document.form1.text1.value.slice(0, -1);
        }
        else {
            document.form1.text1.value += ch;
        }
    }
}