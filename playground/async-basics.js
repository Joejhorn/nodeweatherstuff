console.log('Starting App');

setTimeout (() => {
  console.log('inside of callback');
}, 2000);

setTimeout (() => {
  console.log('inside of second callback');
},0);



console.log('Finsihing Up');
