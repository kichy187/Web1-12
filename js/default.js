document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').word.value);
};

var message;
var messaget;
 for(var i = 1; i < 101; i++){
   var li = document.createElement('li');
   li.textContent = i + '回目';
   document.getElementById('list').appendChild(li);
   
   var keisan = i%3;
   if(keisan = 1)
   {
     message = Fizz;
     document.getElementById('re').textContent = message;
   }
   var keisann = i%5;
   if(keisann = 1)
   {
     messaget = Buzz;
     document.getElementById('rere').textContent = messaget;
   }
 }
