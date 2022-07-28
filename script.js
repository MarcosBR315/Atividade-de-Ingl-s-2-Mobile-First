let count = 0;
let counter1 = document.getElementById("p_1").innerHTML = count;
let counter2 = document.getElementById("p_2").innerHTML = count;

function counterLess() {
    if(count > 0){
        count = count - 1;
    }
    console.log("Quantidade: ", count);

    let updateLess1 = document.getElementById("p_1").innerHTML = count;
    let updateLess2 = document.getElementById("p_2").innerHTML = count;
};

function counterPlus() {
    if(count < 10) {
        count = count + 1;
    }
    console.log("Quantidade: ", count);

    let updatePlus1 = document.getElementById("p_1").innerHTML = count;
    let updatePlus2 = document.getElementById("p_2").innerHTML = count;
};