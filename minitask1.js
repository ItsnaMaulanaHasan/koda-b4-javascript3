let biodata = {
    nama: "Itsna Maulana",
    alamat: "Pati"
}

let biodataExtra1 = {
    hobby: ["Badminton", "Game", "Nonton"],
    umur: 23
}

let biodataExtra2 = {
    universitas: "Universitas Dian Nuswantoro"
}

// Manual
biodata = { ...biodata, ...biodataExtra1}
console.log(biodata)

// Built-in Method
Object.assign(biodata, biodataExtra2)
console.log(biodata)

const arr = ["Itsna", "Maulana", "Hasan", 23, "Pati"]

// Manual
const search = "Itsna"
let found = false
for (let i = 0; i < arr.length; i++){
    if(arr[i] === search){
        found = true
    }
}

if(found){
    console.log("Ditemukan")
} else {
    console.log("Tidak ditemukan")
}

// Built-in Method
let isFound = arr.includes("Halo")
if(isFound){
    console.log("Ditemukan")
} else {
    console.log("Tidak ditemukan")
}
