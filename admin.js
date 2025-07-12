const itemsToModerate = [
  {
    id: 1,
    title: "Vintage T-shirt",
    image: "https://via.placeholder.com/150",
    description: "A cool vintage T-shirt."
  },
  {
    id: 2,
    title: "Leather Boots",
    image: "https://via.placeholder.com/150",
    description: "Stylish leather boots."
  }
];

const container = document.getElementById("admin-items");

itemsToModerate.forEach(item => {
  const card = document.createElement("div");
  card.className = "admin-card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <div>
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <button onclick="alert('Approved ${item.title}')">Approve</button>
      <button onclick="alert('Rejected ${item.title}')">Reject</button>
    </div>
  `;
  container.appendChild(card);
});
