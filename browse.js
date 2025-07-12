const browseItems = [
  { title: "green dress", image: "p11.jpg", id: 1 },
  { title: "frock", image: "p4.jpg", id: 2 },
  { title: "top", image: "p5.jpg", id: 3 }
];

const itemGrid = document.getElementById("itemGrid");

browseItems.forEach(item => {
  const div = document.createElement("div");
  div.className = "item-card";
  div.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <h4>${item.title}</h4>
    <button onclick="location.href='item.html?id=${item.id}'">View Details</button>
  `;
  itemGrid.appendChild(div);
});
