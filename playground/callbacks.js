var getUser = (id, callback) => {
  var user = {
    id: id,
    name: "Joe"
  };
  setTimeout(() => {
    callback(user);
  },3000);


};

getUser(50, (user) => {
  console.log(user);
});
