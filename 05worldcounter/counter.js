console.log("jay Bajrangbali");


function wc() {
   let text = document.getElementById("text-area").value;
   
   
   let words = text.trim().split(/\s+/).length;
   
   
   document.getElementById("count").innerText = "Word Count : " + words;
}
function uc() {
   let ti = document.getElementById("text-area");
   ti.value = ti.value.toUpperCase();
}
function lc() {
   let ti = document.getElementById("text-area");
   ti.value = ti.value.toLowerCase();
}
function letterc() {
   let text1 = document.getElementById("text-area").value;
   let letter = text1.replace(/[^a-zA-Z]/g, '');
   document.getElementById("lcount").innerText = "Letter Count : " + letter.length;
}
//    let area = document.getElementById("text-area");
//    let span = document.getElementById("error");
//    function checktext(){
//       if(text-area.value ==""){
//           span.innerText="name feild is empty";
//           span.style.color = "red"
//       }else if (text-area.value.length <2){
//           alert("name is too short, must contain 2 letters")
//       }
//   }