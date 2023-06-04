const http = new FetchLibrary;

//Using the Get method on users
//Remember that Get returns a promise
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

//Use the Post method for a new user
//Your Code here

//Update requires the id of the record you want to update and the new data to update with
//Use the Put(Update) method to update a user
//Your Code here

// Delete requires the id of the record you want to delete
//Use the Delete method to delete a user
//Your Code here