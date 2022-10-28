import LinkedList from "./LinkedList.js";

const linkedList = new LinkedList("Tony");
linkedList.append("Have ")
linkedList.append("a ")
linkedList.append("nice ")
linkedList.append("Day!")

const greeting = `Hello `;

/********* To Console: ************/
console.log(`${greeting} ${linkedList.name}!`, linkedList.toConsole());


/********* To Screen:  ************/
const container: HTMLElement | null = document.getElementById("container")!;

// ✅ Append text to `div` element
container.insertAdjacentText(
  "beforeend",
  greeting);
  
  // ✅ Append HTML to `div` element
  container.insertAdjacentHTML(
    'beforeend',
    `<span style="background-color: lime">${linkedList.name}</span>`,
);

// ✅ Append HTML to `div` element
container.insertAdjacentHTML(
    'afterend',
    `<span style="background-color: lime">${linkedList.toScreen().join("")}</span>`,
);


