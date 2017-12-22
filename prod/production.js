myApp.modules = {
saySomething(message){
  console.log(myApp.mainMessage,message, 'second file');
},

doSomething(){
  console.log('called do something from mod 2');
}

};

myApp.module2 = {

doSomething(){
  console.log('called do something from mod 3');
}

};

var myApp ={
  mainMessage : "Welcome to my app",

  mainGreeting(){
    console.log('hey! welcome');
  }
};

(()=> {
  myApp.mainGreeting();

  myApp.module2.saySomething('sup');

  function myFunc() {
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }
})();
