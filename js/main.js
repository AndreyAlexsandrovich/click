let number = document.getElementById('num');
let btn = document.getElementById('btn-click');
let num = 0;
number.innerHTML = num;

btn.addEventListener('click', () => { 
   let a = num++;
   number.innerHTML = a + 1;
   surprise()
})
surprise()
function surprise() { 
    if (num > 5) {
        btn.innerHTML = 'Молодец! Продолжай )';
    } else { 
        btn.innerHTML = "Нажимай!";
    }
}
