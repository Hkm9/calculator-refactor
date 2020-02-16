
  // read & process user input from event
function calc(){
    var a = parseFloat(document.querySelector("#value1").value);
    var b = parseFloat(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var Calculate = doMath(op, a, b);

  // pass user input through core logic

  // render output to DOM for user
document.querySelector("#result").innerHTML = Calculate;
  // log user action for developers
console.log(Calculate);
  // return true for the browser
  return true;
}
