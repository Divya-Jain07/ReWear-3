document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("rewear-user"));
  if (user) {
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;

    const itemImage = document.getElementById("uploadedItemImage");
    if (user.itemImage) {
      itemImage.src = user.itemImage;
      itemImage.style.display = "block";
    }
  }

  const uploadForm = document.getElementById("uploadForm");
  const newItemImage = document.getElementById("newItemImage");
  const newPreview = document.getElementById("newPreview");

  newItemImage.addEventListener("change", function () {
    const file = newItemImage.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        newPreview.src = e.target.result;
        newPreview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

  uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const file = newItemImage.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        alert("New item image saved (not yet integrated into full list).");
        localStorage.setItem("rewear-user-new-item", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
});
