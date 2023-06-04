//using ES6 Class
class FetchLibrary {

  //Since we are not using ES6 we can use classes and define the methods in the class
  //block without this or prototype
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }
  //Finish with post(url, data), put(url, data) and delete(url)
  post(url, data){
    //Your code here
  }

  put(url, data){
    //Your code here
  }

  delete(url){
    //Your code here
  }
  
}