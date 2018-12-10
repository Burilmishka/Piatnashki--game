var arr = [1,2,3,4,5,6,7,8,'x'];
var classArr = ['cell1','cell2','cell3','cell4','cell5','cell6','cell7','cell8','cell9'];
function howToSort(a,b){
    var t = Math.random() - 0.3;
    return t;
}
arr.sort(howToSort);
// alert(arr);

function mix(array){
    for(i = 0; i <= array.length - 1; i++){
        var cellElem = document.getElementsByClassName(classArr[i]);
        var textNode = document.createTextNode(array[i]);
        cellElem[0].appendChild(textNode);
    }
}
mix(arr);

function clean(array){
    for(i = 0; i <= array.length - 1; i++){
        var cellElem = document.getElementsByClassName(classArr[i]);
        cellElem[0].removeChild(cellElem[0].firstChild);
    } 
}
    
function clickOnMix(){
    clean(arr);
    arr.sort(howToSort);
    mix(arr);
}


var opt1 = ['cell2','cell4'];
var opt2 = ['cell1','cell3','cell5'];
var opt3 = ['cell2','cell6'];
var opt4 = ['cell1','cell5','cell7'];
var opt5 = ['cell2','cell4','cell6','cell8'];
var opt6 = ['cell3','cell5','cell9'];
var opt7 = ['cell4','cell8'];
var opt8 = ['cell7','cell5','cell9'];
var opt9 = ['cell8','cell6'];

function piatnMain(){
    var clickElemClass = event.target.className;
    // alert(clickElemClass);
    var clickElem = document.getElementsByClassName(clickElemClass);
    var clickElemValue = clickElem[0].textContent;
    // alert(clickElemValue);
    switch(clickElemClass){
        case 'cell1':
        for(i = 0; i <= opt1.length - 1; i++){
            var optElem = document.getElementsByClassName(opt1[i]);
            if(optElem[0].textContent == 'x'){
                optElem[0].textContent = clickElemValue;
                clickElem[0].textContent = 'x';
            }
        }
        break;

        case 'cell2':
        for(i = 0; i <= opt2.length - 1; i++){
            var optElem = document.getElementsByClassName(opt2[i]);
            if(optElem[0].textContent == 'x'){
                optElem[0].textContent = clickElemValue;
                clickElem[0].textContent = 'x';
            }
        }
        break;

        case 'cell3':
        for(i = 0; i <= opt3.length - 1; i++){
            var optElem = document.getElementsByClassName(opt3[i]);
            if(optElem[0].textContent == 'x'){
                optElem[0].textContent = clickElemValue;
                clickElem[0].textContent = 'x';
            }
        }
        break;

        case 'cell4':
        for(i = 0; i <= opt4.length - 1; i++){
            var optElem = document.getElementsByClassName(opt4[i]);
            if(optElem[0].textContent == 'x'){
                optElem[0].textContent = clickElemValue;
                clickElem[0].textContent = 'x';
            }
        }
        break;

        case 'cell5':
        for(i = 0; i <= opt5.length - 1; i++){
            var optElem = document.getElementsByClassName(opt5[i]);
            if(optElem[0].textContent == 'x'){
                optElem[0].textContent = clickElemValue;
                clickElem[0].textContent = 'x';
            }
        }
        break;

        case 'cell6':
        for(i = 0; i <= opt6.length - 1; i++){
            var optElem = document.getElementsByClassName(opt6[i]);
            if(optElem[0].textContent == 'x'){
                optElem[0].textContent = clickElemValue;
                clickElem[0].textContent = 'x';
            }
        }
        break;

        case 'cell7':
        for(i = 0; i <= opt7.length - 1; i++){
            var optElem = document.getElementsByClassName(opt7[i]);
            if(optElem[0].textContent == 'x'){
                optElem[0].textContent = clickElemValue;
                clickElem[0].textContent = 'x';
            }
        }
        break;

        case 'cell8':
        for(i = 0; i <= opt8.length - 1; i++){
            var optElem = document.getElementsByClassName(opt8[i]);
            if(optElem[0].textContent == 'x'){
                optElem[0].textContent = clickElemValue;
                clickElem[0].textContent = 'x';
            }
        }
        break;

        case 'cell9':
        for(i = 0; i <= opt9.length - 1; i++){
            var optElem = document.getElementsByClassName(opt9[i]);
            if(optElem[0].textContent == 'x'){
                optElem[0].textContent = clickElemValue;
                clickElem[0].textContent = 'x';
            }
        }
        break;
    }
}

