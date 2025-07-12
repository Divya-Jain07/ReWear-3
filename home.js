const items = [
  { title: "Denim Jacket", image: "p5.jpg" },
  { title: "Floral Dress", image: "p4.jpg" },
  { title: "Hoodie", image: "p2.jpg" }
];

const carousel = document.querySelector(".carousel");
if (carousel) {
  items.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `<img src="${item.image}" alt="${item.title}" /><p>${item.title}</p>`;
    carousel.appendChild(div);
  });
}