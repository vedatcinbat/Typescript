const button = document.querySelector('button')!;

button.addEventListener('click', () => {
    console.log('Button Clicked!');
});


const map = new Map();
map.set('name', 'Max');
map.set('age', 30);

console.log(map);