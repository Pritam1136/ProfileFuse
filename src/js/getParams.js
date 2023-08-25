const input = document.querySelector("input.input-feild");
const img = document.querySelector(".img-src");
const slug = document.querySelector(".slug");
const name = document.querySelector(".name");
const hidden = document.querySelector(".hidden");

function searchUser(users, search) {
  if (users.name != search) {
    console.log("sorry");
  } else {
    (hidden.style.display = "block"),
      (name.innerText = users.name),
      (img.src = users.img),
      (slug.href = users.slug);
  }
}

async function fetchSearchResults(search) {
  if (search.length == 0) return;
  try {
    const res = await fetch(`/search.json`);
    if (!res.ok) {
      throw new Error("Something went Wrongg !!!!!!");
    }
    const data = await res.json();
    data?.map((user) => {
      searchUser(user, search);
    });
  } catch (error) {
    console.error(error);
  }
}

window?.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search).get("q");
  input.focus();
  fetchSearchResults(urlParams);
});
