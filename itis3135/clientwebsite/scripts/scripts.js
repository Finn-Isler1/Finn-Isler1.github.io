
function scrollGallery(direction) {
  const gallery = document.getElementById('gallery');
  const scrollAmount = 300;
  gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

document.querySelector("form").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const question = document.getElementById("question").value.trim();

  if (!name || !email || !question) {
    alert("Please fill out all fields before submitting.");
    event.preventDefault();
  }
});