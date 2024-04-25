let name = prompt("Ismingizni kiriting").toLocaleLowerCase();
let name1 = prompt("Bironta harf kiriting").toLocaleLowerCase();
let test = name.includes(name1)

if (test) {
    alert("Sizning ismingizda " + name1 + " bu harif mavjud...");
} else {
    alert("Sizning ismingizda " + name1 + " bu harif mavjud emas ...");
}