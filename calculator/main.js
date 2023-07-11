

// displa
const display= document.querySelector('.display input');

//insert number
function insert(num) {
    display.value += num;
};

  //clear button
function clr(){
    display.value=''
};

//delete button
function del() {
    display.value = display.value.slice(0, -1);
};
//calculation

function cal(){
   
    display.value = eval(display.value);
};