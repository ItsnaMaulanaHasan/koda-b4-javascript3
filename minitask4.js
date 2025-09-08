const url = "https://jsonplaceholder.typicode.com/users";

// Dengan Built-in Method

fetch(url)
  .then((res) => {
    res
      .json()
      .then((res) => {
        res.forEach((element) => {
          element.email = element.email.toLowerCase();
        });

        const daftarEmail = res.map((element) => {
          return element.email;
        });

        console.log(daftarEmail);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

async function getEmail() {
  try {
    const res = await fetch(url);
    const resJson = await res.json();
    resJson.forEach((element) => {
      element.email = element.email.toLowerCase();
    });
    const daftarEmail = resJson.map((element) => {
      return element.email;
    });

    console.log(daftarEmail);
  } catch (err) {
    console.log(err);
  }
}

getEmail();

// Dengan Manual

const charMap = {
  A: "a",
  B: "b",
  C: "c",
  D: "d",
  E: "e",
  F: "f",
  G: "g",
  H: "h",
  I: "i",
  J: "j",
  K: "k",
  L: "l",
  M: "m",
  N: "n",
  O: "o",
  P: "p",
  Q: "q",
  R: "r",
  S: "s",
  T: "t",
  U: "u",
  V: "v",
  W: "w",
  X: "x",
  Y: "y",
  Z: "z",
};

fetch(url)
  .then((res) => {
    res
      .json()
      .then((res) => {
        let arrEmail = [];
        for (let i = 0; i < res.length; i++) {
          let result = "";
          for (let j = 0; j < res[i].email.length; j++) {
            let char = res[i].email[j];
            if (charMap[char]) {
              result += charMap[char];
            } else {
              result += char;
            }
          }
          arrEmail[i] = result;
        }
        console.log(arrEmail);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

async function getEmailManual() {
  try {
    const res = await fetch(url);
    const resJson = await res.json();
    let arrEmail = [];
    for (let i = 0; i < resJson.length; i++) {
      let result = "";
      for (let j = 0; j < resJson[i].email.length; j++) {
        let char = resJson[i].email[j];
        if (charMap[char]) {
          result += charMap[char];
        } else {
          result += char;
        }
      }
      arrEmail[i] = result;
    }
    console.log(arrEmail);
  } catch (err) {
    console.log(err);
  }
}

getEmailManual();
