const names = ['foo', 'bar', 'bazz', 'quq', 'fizz', 'buzz'];
const colors = ['red', 'blue', 'yellow', 'green']
const productsList = window.document.querySelector
('#productsList');
console.log(productsList);

function generateRandom(){
  const nameIdx = Math.floor(Math.random()*names.length);
  const name = names[nameIdx];
  const colorIdx = Math.floor(Math.random()*colors.length);
  const color = colors[colorIdx];
const cost = Math.ceil(Math.random()* 10);

  return {
    name,
    color,
    cost
  };
}

function render(){
    const lis = products.map((product)=> {
        return `
        <li>
        ${product.name} is ${product.color}
        and costs ${product.price}
        </li>`;
    }).join('');
    console.log(lis);
}

const products = [];
products.push(generateRandom());
products.push(generateRandom());

render();