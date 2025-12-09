function showForm(formID) { //membuat fungsi dengan parameter formID
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active")); //mencari ssemua elemen dengan class form box dan hapus class activenya
    document.getElementById(formID).classList.add("active"); // cari id dari paremeter dan masukkan class active didalamnya
}