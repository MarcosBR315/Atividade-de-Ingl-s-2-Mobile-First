let count = 0;
let counter = document.getElementById("p_1").innerHTML = count;

function counterLess() {
    if(count > 0){
        count = count - 1;
    }
    console.log("Quantidade: ", count);

    let updateLess = document.getElementById("p_1").innerHTML = count;
};

function counterPlus() {
    if(count < 10) {
        count = count + 1;
    }
    console.log("Quantidade: ", count);

    let updatePlus = document.getElementById("p_1").innerHTML = count;
};

