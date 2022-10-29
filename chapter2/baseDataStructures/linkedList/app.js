import LinkedList from "./LinkedList.js";
import Node from "./Node.js";
const appendNode1 = new Node("Have ");
const appendNode2 = new Node("a ");
const appendNode3 = new Node("nice ");
const appendNode4 = new Node("day! ");
const prependNode1 = new Node("Thanks ");
const prependNode2 = new Node("for ");
const prependNode3 = new Node("stopping ");
const prependNode4 = new Node("by! ");
const linkedList = new LinkedList("Tony");
linkedList.append(appendNode1);
linkedList.append(appendNode2);
linkedList.append(appendNode3);
linkedList.append(appendNode4);
//Prepend notes must be in reverse order
linkedList.prepend(prependNode4);
linkedList.prepend(prependNode3);
linkedList.prepend(prependNode2);
linkedList.prepend(prependNode1);
const greeting = `Hello `;
/********* To Console: ************/
console.log(`${greeting} ${linkedList.name}!`, linkedList.toConsole());
/********* To Screen:  ************/
const container = document.getElementById("container");
// ✅ Append text to `div` element
container.insertAdjacentText("beforeend", greeting);
// ✅ Append HTML to `div` element
container.insertAdjacentHTML('beforeend', `<span style="background-color: lime">${linkedList.name}</span>`);
// ✅ Append HTML to `div` element
container.insertAdjacentHTML('afterend', `<span style="background-color: lime">${linkedList.toScreen().join("")}</span>`);
