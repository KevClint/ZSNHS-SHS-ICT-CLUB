const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);

  result.style.display = "block"; // always make sure it’s visible
  result.innerHTML = "Please wait...";

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(object)
    });

    const data = await response.json();
    if (response.ok) {
      result.innerHTML = "Form submitted successfully";
    } else {
      result.innerHTML = data.message || "Something went wrong!";
    }
  } catch (error) {
    console.error(error);
    result.innerHTML = "Something went wrong!";
  }

  form.reset();

  // Instead of hiding, just clear the text after 3 seconds
  setTimeout(() => {
    result.innerHTML = "";
  }, 3000);
});

