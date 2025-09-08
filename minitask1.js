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