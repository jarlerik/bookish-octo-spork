const component = (text = "Hello World") => {
  const element = document.createElement("div");
  element.className = `rounded bg-red-100 border max-w-md m-4 p-4`;
  element.innerHTML = text;
  return element;
};

export default component;
