document.getElementById("itemImage").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const preview = document.getElementById("preview");
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("addItemForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Item submitted successfully!");
  this.reset();
  document.getElementById("preview").style.display = "none";
});
