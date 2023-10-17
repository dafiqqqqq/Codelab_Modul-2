function tambah() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (!isNaN(angka1) && !isNaN(angka2)) {
        var hasil = angka1 + angka2;
        alert("Hasil: " + hasil);
    } else {
        alert("Masukkan bilangan yang valid.");
    }
}

function reset() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
}
