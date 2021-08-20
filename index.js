// Write your code here!
const element = document.getElementById('main');
element.remove()

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Hathor is the champion';
document.body.append(newHeader);