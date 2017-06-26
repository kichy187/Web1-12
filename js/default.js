document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').word.value);
};
var message;
var messaget;
 for(var i=1;i<100;i++){
   var li= document.createElement('li');
   li.textContent = i + '回目';
   document.getElementById('list').appendChild(li);
   var keisan = i%3;
   if(keisan = 1)
   {
     messaget = Fizz;
   }
   keisan = i%5;
   if(keisan = 1)
   {
     messaget = Buzz;
   }
   document.getElementById('choice').textContent = message;
   document.getElementById('choice').textContent = messaget;
 }
