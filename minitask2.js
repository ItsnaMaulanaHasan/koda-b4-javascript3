// 20 Built-in Method

// Built-in method pada tipe data string

// 1. string.toUpperCase()
// Mengubah string menjadi uppercase
let text1 = "Hello World!"
console.log(text1.toUpperCase())

console.log("")

// 2. string.toLowerCase()
// Mengubah string menjadi lowercase
let text2 = "Hello World!"
console.log(text2.toLowerCase())

console.log("")

// 3. string.trim()
// Menghapus spasi dari kedua sisi string
let text3 = "      Hello World!      ";
console.log(text3.trim())

console.log("")

// 4. string.replace()
// Mengganti nilai yang ditentukan dengan nilai lain dalam string
let text4 = "Hello World!";
console.log(text4.replace("World!", "Itsna"))

console.log("")

// 5. string.split()
// Mengonversi string ke array dengan pemisah yang ditentukan berdasarkan karakter yang ada di dalam string
let text5 = "Hello World!";
console.log(text5.split(" "))

console.log("")

// Built-in method pada tipe data number

// 6. Math.floor(x)
// Membulatkan ke bawah ke bilangan bulat terdekat
let number1 = 10.23
console.log(Math.floor(number1))

console.log("")

// 7. Math.ceil(x)
// Membulatkan ke atas ke bilangan bulat terdekat
let number2 = 10.51
console.log(Math.ceil(number2))

console.log("")

// 8. Math.max(...)
// Mencari Nilai Terbesar & Terkecil
console.log(Math.max(10, 5, 20, 8))

console.log("")

// 9. Math.pow(x, y)
// Menghitung nilai x pangkat y
console.log(Math.pow(2, 3))

console.log("")

// 10. Math.sqrt(x)
// Menghitung akar kuadrat dari x
let number3 = 36
console.log(Math.sqrt(number3))

console.log("")

// Built-in method pada tipe data array

// 11. array.toString()
// Method yang menguabah array menjadi string yang dipisahkan koma.
const array1 = ["Banana", "Orange", "Apple", "Mango"]
console.log(array1.toString())

console.log("")

// 12. array.join()
// Method yang menguabah array menjadi string yang pemisahnya bisa ditentukan.
const array2 = ["Banana", "Orange", "Apple", "Mango"]
console.log(array2.join(" * "))

console.log("")

// 13. array.pop()
// Menghapus element terakhir array
const array3 = ["Banana", "Orange", "Apple", "Mango"]
array3.pop()
console.log(array3)

console.log("")

// 14. array.include()
// Mengecek apakah sebuah value berada di array tersebut
const array4 = ["Banana", "Orange", "Apple", "Mango"]
console.log(array4.includes("Banana"))

console.log("")

// 15. array.shift()
// Menghapus element pertama array
const array5 = ["Banana", "Orange", "Apple", "Mango"]
array5.shift()
console.log(array5)

console.log("")

//  Built-in method pada tipe data Objek

// 16. Object.keys()
// Mengembalikan sebuah array yang berisi nama-nama key dari sebuah objek
const obj1 = {
  name: 'Budi',
  age: 25,
  city: 'Jakarta'
}
console.log(Object.keys(obj1))

console.log("")

// 17. Object.values()
// Mengembalikan sebuah array yang berisi value dari sebuah objek
const obj2 = {
  name: 'Budi',
  age: 25,
  city: 'Jakarta'
}
console.log(Object.values(obj2))

console.log("")

// 18. Object.entries()
// Mengembalikan sebuah array yang berisi pasangan [key, value] dari sebuah objek
const obj3 = {
  name: 'Budi',
  age: 25,
  city: 'Jakarta'
}
console.log(Object.entries(obj3))

console.log("")

// 19. Object.fromEntries()
// Mengubah daftar pasangan array [key, value] menjadi sebuah objek.
const dataArray = [
  ['name', 'Budi'],
  ['age', 25]
];
console.log(Object.fromEntries(dataArray));

console.log("")

// 20. Object.hasOwn(obj, prop)
// Memeriksa apakah sebuah objek memiliki properti tertentu
const obj4 = {
  name: 'Budi',
  age: 25,
  city: 'Jakarta'
}
console.log(Object.hasOwn(obj4, 'name'))



// 5 Built-in Method

// 1. parseInt()
// Mengubah string menjadi bilangan bulat (integer)
let example1 = "100";
example1 = parseInt(example1)
console.log(typeof example1);

// 2. setTimeout()
// Menjalankan sebuah fungsi setelah jeda waktu tertentu
setTimeout(() => {
  console.log("Pesan ini muncul setelah 2 detik");
}, 2000);

// 3. String()
// Mengubah nilai apa pun (angka, boolean) menjadi string
let example2 = 123;
example2 = String(example2)
console.log(typeof example2);

// 4. isNaN()
// Memeriksa apakah sebuah nilai adalah NaN (Not a Number)
let example3 = 123;
console.log(isNaN(example3));

// 5. Boolean()
// Mengubah nilai menjadi true atau false
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("halo"));
console.log(Boolean(""));

