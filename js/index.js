const input = document.querySelector(".display")
document.addEventListener("click",e => {
   const target = e.target
   input.addEventListener('keyup', e => { 
	  if (e.keyCode == 13) Calc() 
   })
   if (target.classList.contains('btn-num')) input.value += target.innerText                
   if (target.classList.contains('btn-clear')) input.value = ''
	if (target.classList.contains('btn-del')) input.value = input.value.slice(0,-1)
	if (target.classList.contains('btn-eq')) Calc()
    
})
function Calc() {
    try {                  
        const calc = eval(input.value)
        if (!calc) return alert("Conta invalida")
        input.value = calc
    }catch(e) {
        return alert("Conta invalida")
    }
}

