function dis(val) {
            document.getElementById("result").value += val
        }

 function myFunction(event) {
            if (event.key == '0' || event.key == '1' 
                || event.key == '2' || event.key == '3'
                || event.key == '4' || event.key == '5' 
                || event.key == '6' || event.key == '7'
                || event.key == '8' || event.key == '9' 
                || event.key == '+' || event.key == '-'
                || event.key == '*' || event.key == '/')
                document.getElementById("result").value += event.key;
        }
 document.getElementById("checkbox").onclick = function() {
      myFunc()
    };

    function myFunc() {
      let color = document.body.style.background;
      if (color === "hsl(222, 26%, 31%)") {
        document.body.style.background = "hsl(0, 0%, 90%)";
      } else {
        document.body.style.background = "hsl(222, 26%, 31%)";
      }

    }
   function solve() {
            let x = document.getElementById("result").value
            let y = math.evaluate(x)
            document.getElementById("result").value = y
        }
 function clr() {
            document.getElementById("result").value = ""
        }
function  Backspace() {
     document.getElementById("result").value =  document.getElementById("result").value.substring(0,  document.getElementById("result").value.length - 1);
}
 function ftn() {
 var slider = document.getElementById("switch");
  var background = document.getElementById("background");
  
  slider.addEventListener("input", function(){
    var value = this.value;
    background.style.backgroundColor = "hsl(" + value + ", 100%, 50%)";
  });
}