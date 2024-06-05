function showAlert() {
    alert("Hello selamat datang");
}

function showPrompt() {
    let response = prompt("Tuliskan nama :", "namamu");
    if (response !== null) {
        alert("Heloooooo " + response);
    }
}

function showConfirm() {
    let confirmation = confirm("Apakah kamu yakin ingin logout?");
    if (confirmation) {
        alert("Okeyyyy bubay");
    } else {
        alert("Kamu tidak jadi logout?");
    }
}