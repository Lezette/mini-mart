class Product {
  // title = "DEFAULT";
  // imageUrl;
  // price;
  // description;

  constructor(title, img, desc, price) {
    this.title = title;
    this.imageUrl = img;
    this.description = desc;
    this.price = price;
  }
}
class ProductList {
  products = [
    new Product(
      "iPhone 11 Pro",
      "https://source.unsplash.com/AvwGVZWuLYM",
      "An helluva phone",
      800.0
    ),
    new Product(
      "Macbook Pro",
      "https://source.unsplash.com/z8lfwpQVXJo",
      "That laptop from apple",
      2500.0
    ),
    new Product(
      "DSLR Camera",
      "https://source.unsplash.com/e6zDjSwb7hs",
      "crazy camera",
      500.0
    ),
    new Product(
      "Mouse",
      "https://source.unsplash.com/xo-MJALGPrI",
      "comes with a mousepad",
      50.0
    ),
    new Product(
      "Bag pack",
      "https://source.unsplash.com/wKd76ZD3Drc",
      "the attractive bag pack",
      50.9
    ),
  ];
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
            <img src="${prod.imageUrl}" alt="${prod.title}">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to cart</button>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}
