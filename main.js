let name = prompt ("Ismingizni kiriting");
let name1 = prompt ("Bironta harf kiriting");
let test = name1.includes(name)

if (test) {
    alert("Sizning ismingizda bu harif mavjud...");
}else {
    alert("Sizning ismingizda bu harif mavjud emas...");
}