const input = document.querySelector("input.input-feild");

input?.addEventListener("change", (e) => {
  e.preventDefault();
  const { target } = e;
  if (!target.value || target.value == 0) return;
  const url = new URL("/search", window.location.origin);
  url.searchParams.set("q", target.value);
  window.location.assign(url.toString());
});
