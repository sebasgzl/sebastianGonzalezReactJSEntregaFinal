const products = [
    {
        "id": "tapete00001",
        "name": "Alfombra Panaderos",
        "price": 100000,
        "stock": 10,
        "category": "Jet",
        "image": "https://drive.google.com/uc?export=view&id=13FyA0CzHqxTTaGXUdhsh5o3RQPZe5_ED"
    },
    {
        "id": "tapete00002",
        "name": "Alfombra K9",
        "price": 100000,
        "stock": 9,
        "category": "Transito Medio",
        "image": "https://drive.google.com/uc?export=view&id=1g3spd-pdMXTKf1B6WQ5lw3vveNoP6a_2"
    },
    {
        "id": "tapete00003",
        "name": "Alfombra Slices",
        "price": 100000,
        "stock": 15,
        "category": "Transito Medio",
        "image": "https://drive.google.com/uc?export=view&id=1rWN3o_bcQD3fy3_0WO9pP-NEPZldchuX"
    },
    {
        "id": "tapete00004",
        "name": "Alfombra Arcor",
        "price": 100000,
        "stock": 12,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=1P-JFzcAhVt0CPZSl3aeP5bCIJSDCxyFY"
    },
    {
        "id": "tapete00005",
        "name": "Alfombra Caramelitos",
        "price": 100000,
        "stock": 6,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=18TIaJkK0bjfqF5zogMcoKpxFSJA5P4jl"
    },
    {
        "id": "tapete00006",
        "name": "Alfombra Bajo El Mar",
        "price": 100000,
        "stock": 1,
        "category": "Jet",
        "image": "https://drive.google.com/uc?export=view&id=1XoxonhjIMIOQJhHE8OnqXLTOd2Md6GoL"
    },
    {
        "id": "tapete00007",
        "name": "Alfombra Yumi",
        "price": 100000,
        "stock": 30,
        "category": "Transito Medio",
        "image": "https://drive.google.com/uc?export=view&id=1FFZXc9zQEuXSmlEzAXstjA7WedOCvwo3"
    },
    {
        "id": "tapete00008",
        "name": "Alfombra Montagne",
        "price": 100000,
        "stock": 7,
        "category": "Jet",
        "image": "https://drive.google.com/uc?export=view&id=1MfSq3kcjwVMckf8vY8RZfe5XbHji-4KG"
    },
    {
        "id": "tapete00009",
        "name": "Alfombra Maxikioso Pablito",
        "price": 100000,
        "stock": 18,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=1QzncQYptYlswDeh3TpyT-Iam98iVA7i_"
    },
    {
        "id": "tapete00010",
        "name": "Alfombra Harmatiuk",
        "price": 100000,
        "stock": 1,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=1PvBfuxV_nrzR7nvECLSVYdQrbSZ2-cJ7"
    },
    {
        "id": "tapete00011",
        "name": "Alfombra Harley Davidson",
        "price": 100000,
        "stock": 0,
        "category": "Transito Medio",
        "image": "https://drive.google.com/uc?export=view&id=1IDjN4cnC75TI_Yifxxvn1J6dHl9NyJw-"
    },
    {
        "id": "tapete00012",
        "name": "Alfombra Dakros Maxikiosko",
        "price": 100000,
        "stock": 10,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=1wO8DWpI10QAR5dpMmE_DrPRuleZ3ICSq"
    },
    {
        "id": "tapete00012",
        "name": "Alfombra Bigg",
        "price": 100000,
        "stock": 10,
        "category": "Jet",
        "image": "https://drive.google.com/uc?export=view&id=1Qau7AnKmZxxX_zsieUlxJkWCRg-m5S6X"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}


export function getProductById(itemId) {
    return new Promise((resolve, reject) => {
      const productRequested = products.find(
        (item) => item.id === itemId
      );
  
      setTimeout(() => {
        resolve(productRequested);
      }, 2000);
    });
  }

export function getProductsByCategory(categoryId) {
    return new Promise((resolve) => {
      const categoryRequested = products.filter((item) => {
        return item.category === categoryId;
      });
  
      setTimeout(() => {
        resolve(categoryRequested);
      }, 2000);
    });
  }