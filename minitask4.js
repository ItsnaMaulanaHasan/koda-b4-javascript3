const url = "https://jsonplaceholder.typicode.com/users";

// Dengan Built-in Method

fetch(url)
  .then((ress) => {
    ress
      .json()
      .then((ress) => {
        ress.forEach((element) => {
          element.email = element.email.toLowerCase();
        });

        const daftarEmail = ress.map((element) => {
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
