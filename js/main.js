(()=> {
  myApp.mainGreeting();

  myApp.module2.saySomething('sup');

  function myFunc() {
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }
})();
