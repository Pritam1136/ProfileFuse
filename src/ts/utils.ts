const input = document.querySelector("input.input-feild");
let myValue: any;

input?.addEventListener("keyup", (e: Event & { target: HTMLInputElement }) => {
  const { target } = e;
  myValue = target.value;
});

export default myValue;
