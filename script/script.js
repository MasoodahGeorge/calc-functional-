let per = document.querySelector('[value="%"]')
let divide = document.querySelector('[value="/"]')
let c = document.querySelector('[value="C"]')
let del = document.querySelector('[value="del"]')
let frac = document.querySelector('[value="1/x"]')
let x = document.querySelector('[value="x"]')
let eight = document.querySelector('[value="8"]')
let nine = document.querySelector('[value="9"]')
let multi = document.querySelector('[value="*"]')
let four = document.querySelector('[value="4"]')
let five = document.querySelector('[value="5"]')
let six = document.querySelector('[value="6"]')
let minus = document.querySelector('[value="-"]')
let one = document.querySelector('[value="1"]')
let two = document.querySelector('[value="2"]')
let three = document.querySelector('[value="3"]')
let plus = document.querySelector('[value="+"]')
let plusMinus = document.querySelector('[value="+/-"]')
let deci = document.querySelector('[value="."]')
let equal = document.querySelector('[value="="]')

let inp1 = document.querySelector('[name="display"]')


per.addEventListener('click',()=>{
    inp1.value += per.value
})
divide.addEventListener('click',()=>{
    inp1.value += divide.value
})
frac.addEventListener('click',()=>{
    inp1.value += frac.value
})
x.addEventListener('click',()=>{
    inp1.value += x.value
})
eight.addEventListener('click',()=>{
    inp1.value += eight.value
})
nine.addEventListener('click',()=>{
    inp1.value += nine.value
})
multi.addEventListener('click',()=>{
    inp1.value += multi.value
})
four.addEventListener('click',()=>{
    inp1.value += four.value
})
five.addEventListener('click',()=>{
    inp1.value += five.value
})
six.addEventListener('click',()=>{
    inp1.value += six.value
})
minus.addEventListener('click',()=>{
    inp1.value += minus.value
})
one.addEventListener('click',()=>{
    inp1.value += one.value
})
two.addEventListener('click',()=>{
    inp1.value += two.value
})
three.addEventListener('click',()=>{
    inp1.value += three.value
})
plus.addEventListener('click',()=>{
    inp1.value += plus.value
})
plusMinus.addEventListener('click',()=>{
    inp1.value += plusMinus.value
})
deci.addEventListener('click',()=>{
    inp1.value += deci.value
})

// equal
equal.addEventListener('click', function() {
    evaluateSum();
});
function evaluateSum() {
    //your input by blok
    inp1.value = eval(inp1.value);
}

// clear
c.addEventListener('click', function() {
    clearSum();
});
function clearSum() {
    inp1.value = '';
}

// delete
