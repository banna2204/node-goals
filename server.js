// Synchronous programming
console.log('start');

function add(a, b) {
  return a + b;
}

const result = add(2,4);
console.log(result);

const multiply = (x,y) => x * y;
console.log(multiply(2,4));

console.log('End!!');

// Asynchronous Programming

console.log('asynchronous start');

setTimeout(()=> {
  console.log('timeout');
},0);

console.log('Asynchronous end');


// callback function

const greet = (name,callback) => {
  console.log(name);

  callback();
}

const init = () => {
  console.log('callback function execute!!')
} 

greet('test124', init);