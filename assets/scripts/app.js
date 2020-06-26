const productList = {
  products: [
    {
      title: "iPhone 11 Pro",
      imageUrl: "https://unsplash.com/s/photos/iphone-11-pro-max",
      price: 800.0,
      description: "An helluva phone",
    },
    {
      title: "Macbook Pro",
      imageUrl: "",
      price: 2500.0,
      description: "That laptop from apple",
    },
    {
      title: "DSLR Camera",
      imageUrl: "",
      price: 500.0,
      description: "crazy camera",
    },
    {
      title: "Mouse",
      imageUrl: "",
      price: 50.0,
      description: "comes with a mousepad",
    },
    {
      title: "Bag pack",
      imageUrl: "",
      price: 50.9,
      description: "the attractive bag pack that's also long lasting",
    },
  ],
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
  },
};

productList.render();
