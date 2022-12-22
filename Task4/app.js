let inputStr = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      inputStr = eval(inputStr);
      document.querySelector('input').value = inputStr;
    }
    else if(e.target.innerHTML == 'C'){
      inputStr = ""
      document.querySelector('input').value = inputStr;
    }
    else if(e.target.innerHTML == 'DEL'){
      inputStr= document.querySelector('input').value=inputStr.slice(0,-1);
    
    }
    else{ 
    console.log(e.target)
    inputStr = inputStr + e.target.innerHTML;
    document.querySelector('input').value = inputStr;
    }
  })
})