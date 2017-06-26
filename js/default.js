document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').word.value);
};

 for(var i = 1; i < 101; i++){
   var li = document.createElement('li');
   var message = document.createElement('message');
   var messaget = document.createElement('messaget');
   
   li.textContent = i + '回目';
   document.getElementById('list').appendChild(li);
   var keisan = i%3;
   if(keisan = 1)
   {
     message.textContent = 'Fizz';
     document.getElementById('re').appendChild(message);
   }
   var keisann = i%5;
   if(keisann = 1)
   {
     messaget.textContent = 'Buzz';
     document.getElementById('rere').appendChild(messaget);
   }
 }
