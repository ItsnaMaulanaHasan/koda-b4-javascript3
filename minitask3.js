const wait = (str, time) => {
    return new Promise((resolve, reject) => {
        if (typeof str !== "string"){
            reject("Tipe data tidak sesuai")
        } else {
            setTimeout(() => {
                resolve(str)
            }, time)
        }
    })
}

wait("John", 1500).then((res) => {
    console.log(res)
    wait("Ed", 2000).then((res) => {
        console.log(res)
        wait("Jane", 500).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }).catch((err) => {
        console.log(err)
    })
}).catch((err) => {
    console.log(err)
})

async function main() {
    try {
        const ress1 = await wait("John", 1500)
        console.log(ress1)
        const ress2 = await wait("Ed", 2000)
        console.log(ress2)
        const ress3 = await wait("Jane", 500)
        console.log(ress3)
    } catch (err) {
        console.log(err)
    }
} 

// main()