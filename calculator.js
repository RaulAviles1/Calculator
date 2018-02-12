$(document).ready(function() {
  
  //Variables we will need
  var entry = '';
  var operator ='';
  var result = '';
  var memoryOne = 0;
  var memoryTwo = 0;
  var output = [];
  var regex = /(\.)\1/i;
  
  //round funtion (to milis)
  function round(entry){
    return Math.round(entry * 1000) / 1000;
  }
  
  //Number buttons click function
  $('.number').click(function() {
    entry = $(this).attr("value"); 
    output.push(entry);
    
    //check for ourput length
    if(output.length > 10){
      $('#answer').html("error");
    }
    //check for double "."
    else if(regex.test(output.join(''))){
      $('#answer').html("error");
    }
    //checking for zero on the left
    else if(output[0] === 0 && output[1] !== "."){
      console.log(output);
      output.splice(0,1);
      $('#answer').html(output.join(""));
    }
    //output answer
    else{
      $('#answer').html(output.join(""));
    }
  });
  
  //Reset butttons click function
  $('.reset').click(function() {
    entry = $(this).attr("value");
    if(entry == "ce"){
      output = [0];
      memoryOne = 0;
      memoryTwo = 0;
    }
    else if(entry == "ac"){
      output = [0];
      memoryOne = 0; 
    }
    $('#answer').html(output);
  });
  
  //Operation buttons click function
  $('.operator').click(function() {
    operator = $(this).attr("value");
    memoryOne = parseFloat(output.join(""));
    output.length = 0;
    $('#answer').html('0');
   });
  
  //equal button click function
  $('.calculate').click(function() {
    memoryTwo = parseFloat(output.join(""));
    if(operator === "/"){
      result = memoryOne / memoryTwo;
      $('#answer').html(round(result));
    }
    else if(operator == "*"){
      result = memoryOne * memoryTwo;
      $('#answer').html(round(result));
    }
    else if(operator == "-"){
      result = memoryOne - memoryTwo;
      $('#answer').html(round(result));
    }
    else if(operator == "+"){
      result = memoryOne + memoryTwo;
      $('#answer').html(round(result));
    }
    else{
      $('#answer').html("error");
    }
   });

//end document ready.
});

  