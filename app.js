// 2 Times Table
let list2 = document.getElementById('draggable-list2')
const check2 = document.getElementById('check-button2')
const randomOrderButton2 = document.getElementById('random-Order2')
let orderOfCalculation2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const multiplesOfTwo = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
let listItems2 = [];

createList2();

randomOrderButton2.addEventListener('click', function () { randomOrder2(orderOfCalculation2) })
check2.addEventListener('click', function () { checkOrder(listItems2, 2, orderOfCalculation2) })

// Store ListItems

let dragStartIndex2;

// Insert List Items into DOM;
function createList2() {
    [...multiplesOfTwo].map(a => ({ value: a, sort: Math.random() }))

        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((multiple, index) => {


            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
        <span class='number'> 2 x ${orderOfCalculation2[index]}</span>
        <div class='draggable draggable2' draggable="true">
        <p class="person-name">${multiple}</p>
      
        </div>
        `;
            listItems2.push(listItem)
            list2.appendChild(listItem);
            addEventListeners2()

        })

}

function randomOrder2(orderOfCalculation2) {
    list2.innerHTML = '';
    listItems2 = [];
    shuffle(orderOfCalculation2);
    createList2()
}



function addEventListeners2() {
    const draggables = document.querySelectorAll('.draggable2');
    const dragListItems = document.querySelectorAll(`#draggable-list2 li`);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart2);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver2);
        item.addEventListener('drop', dragDrop2);
        item.addEventListener('dragenter', dragEnter2);
        item.addEventListener('dragleave', dragLeave2);
    });
}

function dragStart2() {
    dragStartIndex2 = +this.closest('li').getAttribute('data-index');

}

function dragEnter2() {
    this.classList.add('over')
}

function dragLeave2() {
    this.classList.remove('over')
}

function dragOver2(e) {
    e.preventDefault();
}

function dragDrop2() {

    const dragEndIndex2 = +this.getAttribute('data-index')
    swapItems2(dragStartIndex2, dragEndIndex2)
    this.classList.remove('over')
}

function swapItems2(fromIndex2, toIndex2) {
    const itemOne = listItems2[fromIndex2].querySelector('.draggable2');
    const itemTwo = listItems2[toIndex2].querySelector('.draggable2');
    listItems2[fromIndex2].appendChild(itemTwo);
    listItems2[toIndex2].appendChild(itemOne)
}


// 3 Times Table
let list3 = document.getElementById('draggable-list3')
const check3 = document.getElementById('check-button3')
const randomOrderButton3 = document.getElementById('random-Order3')
let orderOfCalculation3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const multiplesOfThree = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]
let listItems3 = [];

createList3();

randomOrderButton3.addEventListener('click', function () { randomOrder3(orderOfCalculation3) })
check3.addEventListener('click', function () { checkOrder(listItems3, 3, orderOfCalculation3) })



// Store ListItems

let dragStartIndex3;




// Insert List Items into DOM;
function createList3() {
    [...multiplesOfThree].map(a => ({ value: a, sort: Math.random() }))

        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((multiple, index) => {


            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
        <span class='number'> 3 x ${orderOfCalculation3[index]}</span>
        <div class='draggable draggable3' draggable="true">
        <p class="person-name">${multiple}</p>
      
        </div>
        `;
            listItems3.push(listItem)
            list3.appendChild(listItem);
            addEventListeners3()

        })

}

function randomOrder3(orderOfCalculation3) {
    list3.innerHTML = '';
    listItems3 = [];
    shuffle(orderOfCalculation3);
    createList3()
}



function addEventListeners3() {
    const draggables = document.querySelectorAll('.draggable3');
    const dragListItems = document.querySelectorAll(`#draggable-list3 li`);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart3);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver3);
        item.addEventListener('drop', dragDrop3);
        item.addEventListener('dragenter', dragEnter3);
        item.addEventListener('dragleave', dragLeave3);
    });
}

function dragStart3() {
    dragStartIndex3 = +this.closest('li').getAttribute('data-index');

}

function dragEnter3() {
    this.classList.add('over')
}

function dragLeave3() {
    this.classList.remove('over')
}

function dragOver3(e) {
    e.preventDefault();
}

function dragDrop3() {

    const dragEndIndex3 = +this.getAttribute('data-index')
    swapItems3(dragStartIndex3, dragEndIndex3)
    this.classList.remove('over')
}

function swapItems3(fromIndex3, toIndex3) {
    const itemOne = listItems3[fromIndex3].querySelector('.draggable3');
    const itemTwo = listItems3[toIndex3].querySelector('.draggable3');
    listItems3[fromIndex3].appendChild(itemTwo);
    listItems3[toIndex3].appendChild(itemOne)
}


// 4 times table Elements
let list4 = document.getElementById('draggable-list4')
const check4 = document.getElementById('check-button4')
const randomOrderButton4 = document.getElementById('random-Order4')
let orderOfCalculation4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const multiplesOfFour = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48]
let listItems4 = [];

createList4();

randomOrderButton4.addEventListener('click', function () { randomOrder4(orderOfCalculation4) })
check4.addEventListener('click', function () { checkOrder(listItems4, 4, orderOfCalculation4) })


// Store ListItems
let dragStartIndex4;

// Insert List Items into DOM;
function createList4() {
    [...multiplesOfFour].map(a => ({ value: a, sort: Math.random() }))

        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((multiple, index) => {


            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
        <span class='number'> 4 x ${orderOfCalculation4[index]}</span>
        <div class='draggable draggable4' draggable="true">
        <p class="person-name">${multiple}</p>
   
        </div>
        `;
            listItems4.push(listItem)
            list4.appendChild(listItem);
            addEventListeners4()

        })

}

function randomOrder4(orderOfCalculation4) {
    list4.innerHTML = '';
    listItems4 = [];
    shuffle(orderOfCalculation4);
    createList4()
}

function addEventListeners4() {
    const draggables = document.querySelectorAll('.draggable4');
    const dragListItems = document.querySelectorAll(`#draggable-list4 li`);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver4);
        item.addEventListener('drop', dragDrop4);
        item.addEventListener('dragenter', dragEnter4);
        item.addEventListener('dragleave', dragLeave4);
    });
}

function dragStart() {
    dragStartIndex4 = +this.closest('li').getAttribute('data-index');
}

function dragEnter4() {
    this.classList.add('over')
}

function dragLeave4() {
    this.classList.remove('over')
}

function dragOver4(e) {
    e.preventDefault();
}

function dragDrop4() {

    const dragEndIndex4 = +this.getAttribute('data-index')
    swapItems4(dragStartIndex4, dragEndIndex4)
    this.classList.remove('over')
}

function swapItems4(fromIndex4, toIndex4) {

    const itemOne = listItems4[fromIndex4].querySelector('.draggable4');
    const itemTwo = listItems4[toIndex4].querySelector('.draggable4');
    listItems4[fromIndex4].appendChild(itemTwo);
    listItems4[toIndex4].appendChild(itemOne)
}

// 5 Times Table
let list5 = document.getElementById('draggable-list5')
const check5 = document.getElementById('check-button5')
const randomOrderButton5 = document.getElementById('random-Order5')
let orderOfCalculation5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const multiplesOfFive = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
let listItems5 = [];

createList5();

randomOrderButton5.addEventListener('click', function () { randomOrder5(orderOfCalculation5) })
check5.addEventListener('click', function () { checkOrder(listItems5, 5, orderOfCalculation5) })



// Store ListItems

let dragStartIndex5;




// Insert List Items into DOM;
function createList5() {
    [...multiplesOfFive].map(a => ({ value: a, sort: Math.random() }))

        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((multiple, index) => {


            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
        <span class='number'> 5 x ${orderOfCalculation5[index]}</span>
        <div class='draggable draggable5' draggable="true">
        <p class="person-name">${multiple}</p>
      
        </div>
        `;
            listItems5.push(listItem)
            list5.appendChild(listItem);
            addEventListeners5()

        })

}

function randomOrder5(orderOfCalculation5) {
    list5.innerHTML = '';
    listItems5 = [];
    shuffle(orderOfCalculation5);
    createList5()
}



function addEventListeners5() {
    const draggables = document.querySelectorAll('.draggable5');
    const dragListItems = document.querySelectorAll(`#draggable-list5 li`);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart5);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver5);
        item.addEventListener('drop', dragDrop5);
        item.addEventListener('dragenter', dragEnter5);
        item.addEventListener('dragleave', dragLeave5);
    });
}

function dragStart5() {
    dragStartIndex5 = +this.closest('li').getAttribute('data-index');

}

function dragEnter5() {
    this.classList.add('over')
}

function dragLeave5() {
    this.classList.remove('over')
}

function dragOver5(e) {
    e.preventDefault();
}

function dragDrop5() {

    const dragEndIndex5 = +this.getAttribute('data-index')
    swapItems5(dragStartIndex5, dragEndIndex5)
    this.classList.remove('over')
}

function swapItems5(fromIndex5, toIndex5) {
    const itemOne = listItems5[fromIndex5].querySelector('.draggable5');
    const itemTwo = listItems5[toIndex5].querySelector('.draggable5');
    listItems5[fromIndex5].appendChild(itemTwo);
    listItems5[toIndex5].appendChild(itemOne)
}


// 6 Times Table
let list6 = document.getElementById('draggable-list6')
const check6 = document.getElementById('check-button6')
const randomOrderButton6 = document.getElementById('random-Order6')
let orderOfCalculation6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const multiplesOfSix = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72]
let listItems6 = [];

createList6();

randomOrderButton6.addEventListener('click', function () { randomOrder6(orderOfCalculation6) })
check6.addEventListener('click', function () { checkOrder(listItems6, 6, orderOfCalculation6) })

// Store ListItems

let dragStartIndex6;

// Insert List Items into DOM;
function createList6() {
    [...multiplesOfSix].map(a => ({ value: a, sort: Math.random() }))

        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((multiple, index) => {


            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
        <span class='number'> 6 x ${orderOfCalculation6[index]}</span>
        <div class='draggable draggable6' draggable="true">
        <p class="person-name">${multiple}</p>
      
        </div>
        `;
            listItems6.push(listItem)
            list6.appendChild(listItem);
            addEventListeners6()

        })

}

function randomOrder6(orderOfCalculation6) {
    list6.innerHTML = '';
    listItems6 = [];
    shuffle(orderOfCalculation6);
    createList6()
}



function addEventListeners6() {
    const draggables = document.querySelectorAll('.draggable6');
    const dragListItems = document.querySelectorAll(`#draggable-list6 li`);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart6);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver6);
        item.addEventListener('drop', dragDrop6);
        item.addEventListener('dragenter', dragEnter6);
        item.addEventListener('dragleave', dragLeave6);
    });
}

function dragStart6() {
    dragStartIndex6 = +this.closest('li').getAttribute('data-index');

}

function dragEnter6() {
    this.classList.add('over')
}

function dragLeave6() {
    this.classList.remove('over')
}

function dragOver6(e) {
    e.preventDefault();
}

function dragDrop6() {

    const dragEndIndex6 = +this.getAttribute('data-index')
    swapItems6(dragStartIndex6, dragEndIndex6)
    this.classList.remove('over')
}

function swapItems6(fromIndex6, toIndex6) {
    const itemOne = listItems6[fromIndex6].querySelector('.draggable6');
    const itemTwo = listItems6[toIndex6].querySelector('.draggable6');
    listItems6[fromIndex6].appendChild(itemTwo);
    listItems6[toIndex6].appendChild(itemOne)
}

// 7 Times Table
let list7 = document.getElementById('draggable-list7')
const check7 = document.getElementById('check-button7')
const randomOrderButton7 = document.getElementById('random-Order7')
let orderOfCalculation7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const multiplesOfSeven = [7, 14, 21, 28, 35, 42, 49, 54, 63, 70, 77, 82]
let listItems7 = [];

createList7();

randomOrderButton7.addEventListener('click', function () { randomOrder7(orderOfCalculation7) })
check7.addEventListener('click', function () { checkOrder(listItems7, 7, orderOfCalculation7) })

// Store ListItems

let dragStartIndex7;

// Insert List Items into DOM;
function createList7() {
    [...multiplesOfSeven].map(a => ({ value: a, sort: Math.random() }))

        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((multiple, index) => {


            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
        <span class='number'> 7 x ${orderOfCalculation7[index]}</span>
        <div class='draggable draggable7' draggable="true">
        <p class="person-name">${multiple}</p>
      
        </div>
        `;
            listItems7.push(listItem)
            list7.appendChild(listItem);
            addEventListeners7()
        })

}

function randomOrder7(orderOfCalculation7) {
    list7.innerHTML = '';
    listItems7 = [];
    shuffle(orderOfCalculation7);
    createList7()
}



function addEventListeners7() {
    const draggables = document.querySelectorAll('.draggable7');
    const dragListItems = document.querySelectorAll(`#draggable-list7 li`);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart7);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver7);
        item.addEventListener('drop', dragDrop7);
        item.addEventListener('dragenter', dragEnter7);
        item.addEventListener('dragleave', dragLeave7);
    });
}

function dragStart7() {
    dragStartIndex7 = +this.closest('li').getAttribute('data-index');

}

function dragEnter7() {
    this.classList.add('over')
}

function dragLeave7() {
    this.classList.remove('over')
}

function dragOver7(e) {
    e.preventDefault();
}

function dragDrop7() {

    const dragEndIndex7 = +this.getAttribute('data-index')
    swapItems7(dragStartIndex7, dragEndIndex7)
    this.classList.remove('over')
}

function swapItems7(fromIndex7, toIndex7) {
    const itemOne = listItems7[fromIndex7].querySelector('.draggable7');
    const itemTwo = listItems7[toIndex7].querySelector('.draggable7');
    listItems7[fromIndex7].appendChild(itemTwo);
    listItems7[toIndex7].appendChild(itemOne)
}

// 8 Times Table
let list8 = document.getElementById('draggable-list8')
const check8 = document.getElementById('check-button8')
const randomOrderButton8 = document.getElementById('random-Order8')
let orderOfCalculation8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const multiplesOfEight = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96]
let listItems8 = [];

createList8();

randomOrderButton8.addEventListener('click', function () { randomOrder8(orderOfCalculation8) })
check8.addEventListener('click', function () { checkOrder(listItems8, 8, orderOfCalculation8) })

// Store ListItems

let dragStartIndex8;

// Insert List Items into DOM;
function createList8() {
    [...multiplesOfEight].map(a => ({ value: a, sort: Math.random() }))

        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((multiple, index) => {


            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
        <span class='number'> 8 x ${orderOfCalculation8[index]}</span>
        <div class='draggable draggable8' draggable="true">
        <p class="person-name">${multiple}</p>
      
        </div>
        `;
            listItems8.push(listItem)
            list8.appendChild(listItem);
            addEventListeners8()
        })

}

function randomOrder8(orderOfCalculation8) {
    list8.innerHTML = '';
    listItems8 = [];
    shuffle(orderOfCalculation8);
    createList8()
}



function addEventListeners8() {
    const draggables = document.querySelectorAll('.draggable8');
    const dragListItems = document.querySelectorAll(`#draggable-list8 li`);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart8);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver8);
        item.addEventListener('drop', dragDrop8);
        item.addEventListener('dragenter', dragEnter8);
        item.addEventListener('dragleave', dragLeave8);
    });
}

function dragStart8() {
    dragStartIndex8 = +this.closest('li').getAttribute('data-index');

}

function dragEnter8() {
    this.classList.add('over')
}

function dragLeave8() {
    this.classList.remove('over')
}

function dragOver8(e) {
    e.preventDefault();
}

function dragDrop8() {

    const dragEndIndex8 = +this.getAttribute('data-index')
    swapItems8(dragStartIndex8, dragEndIndex8)
    this.classList.remove('over')
}

function swapItems8(fromIndex8, toIndex8) {
    const itemOne = listItems8[fromIndex8].querySelector('.draggable8');
    const itemTwo = listItems8[toIndex8].querySelector('.draggable8');
    listItems8[fromIndex8].appendChild(itemTwo);
    listItems8[toIndex8].appendChild(itemOne)
}


//9 Times Table 

let list9 = document.getElementById('draggable-list9')
const check9 = document.getElementById('check-button9')
const randomOrderButton9 = document.getElementById('random-Order9')
let orderOfCalculation9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const multiplesOfNine = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108]
let listItems9 = [];

createList9();

randomOrderButton9.addEventListener('click', function () { randomOrder9(orderOfCalculation9) })
check9.addEventListener('click', function () { checkOrder(listItems9, 9, orderOfCalculation9) })

// Store ListItems

let dragStartIndex9;

// Insert List Items into DOM;
function createList9() {
    [...multiplesOfNine].map(a => ({ value: a, sort: Math.random() }))

        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((multiple, index) => {


            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
        <span class='number'> 9 x ${orderOfCalculation9[index]}</span>
        <div class='draggable draggable9' draggable="true">
        <p class="person-name">${multiple}</p>
      
        </div>
        `;
            listItems9.push(listItem)
            list9.appendChild(listItem);
            addEventListeners9()
        })

}

function randomOrder9(orderOfCalculation9) {
    list9.innerHTML = '';
    listItems9 = [];
    shuffle(orderOfCalculation9);
    createList9()
}
function addEventListeners9() {
    const draggables = document.querySelectorAll('.draggable9');
    const dragListItems = document.querySelectorAll(`#draggable-list9 li`);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart9);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver9);
        item.addEventListener('drop', dragDrop9);
        item.addEventListener('dragenter', dragEnter9);
        item.addEventListener('dragleave', dragLeave9);
    });
}

function dragStart9() {
    dragStartIndex9 = +this.closest('li').getAttribute('data-index');

}

function dragEnter9() {
    this.classList.add('over')
}

function dragLeave9() {
    this.classList.remove('over')
}

function dragOver9(e) {
    e.preventDefault();
}

function dragDrop9() {

    const dragEndIndex9 = +this.getAttribute('data-index')
    swapItems9(dragStartIndex9, dragEndIndex9)
    this.classList.remove('over')
}

function swapItems9(fromIndex9, toIndex9) {
    const itemOne = listItems9[fromIndex9].querySelector('.draggable9');
    const itemTwo = listItems9[toIndex9].querySelector('.draggable9');
    listItems9[fromIndex9].appendChild(itemTwo);
    listItems9[toIndex9].appendChild(itemOne)
}


//10 Times Table
let list10 = document.getElementById('draggable-list10')
const check10 = document.getElementById('check-button10')
const randomOrderButton10 = document.getElementById('random-Order10')
let orderOfCalculation10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const multiplesOfTen = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let listItems10 = [];

createList10();

randomOrderButton10.addEventListener('click', function () { randomOrder10(orderOfCalculation10) })
check10.addEventListener('click', function () { checkOrder(listItems10, 10, orderOfCalculation10) })

// Store ListItems

let dragStartIndex10;

// Insert List Items into DOM;
function createList10() {
    [...multiplesOfTen].map(a => ({ value: a, sort: Math.random() }))

        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((multiple, index) => {


            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
        <span class='number'> 10 x ${orderOfCalculation10[index]}</span>
        <div class='draggable draggable10' draggable="true">
        <p class="person-name">${multiple}</p>
      
        </div>
        `;
            listItems10.push(listItem)
            list10.appendChild(listItem);
            addEventListeners10()
        })

}

function randomOrder10(orderOfCalculation10) {
    list10.innerHTML = '';
    listItems10 = [];
    shuffle(orderOfCalculation10);
    createList10()
}
function addEventListeners10() {
    const draggables = document.querySelectorAll('.draggable10');
    const dragListItems = document.querySelectorAll(`#draggable-list10 li`);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart10);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver10);
        item.addEventListener('drop', dragDrop10);
        item.addEventListener('dragenter', dragEnter10);
        item.addEventListener('dragleave', dragLeave10);
    });
}

function dragStart10() {
    dragStartIndex10 = +this.closest('li').getAttribute('data-index');

}

function dragEnter10() {
    this.classList.add('over')
}

function dragLeave10() {
    this.classList.remove('over')
}

function dragOver10(e) {
    e.preventDefault();
}

function dragDrop10() {

    const dragEndIndex10 = +this.getAttribute('data-index')
    swapItems10(dragStartIndex10, dragEndIndex10)
    this.classList.remove('over')
}

function swapItems10(fromIndex10, toIndex10) {
    const itemOne = listItems10[fromIndex10].querySelector('.draggable10');
    const itemTwo = listItems10[toIndex10].querySelector('.draggable10');
    listItems10[fromIndex10].appendChild(itemTwo);
    listItems10[toIndex10].appendChild(itemOne)
}

//11 Times Table
let list11 = document.getElementById('draggable-list11')
const check11 = document.getElementById('check-button11')
const randomOrderButton11 = document.getElementById('random-Order11')
let orderOfCalculation11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const multiplesOfEleven = [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132]
let listItems11 = [];

createList11();

randomOrderButton11.addEventListener('click', function () { randomOrder11(orderOfCalculation11) })
check11.addEventListener('click', function () { checkOrder(listItems11, 11, orderOfCalculation11) })

// Store ListItems

let dragStartIndex11;

// Insert List Items into DOM;
function createList11() {
    [...multiplesOfEleven].map(a => ({ value: a, sort: Math.random() }))

        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((multiple, index) => {


            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
        <span class='number'> 11 x ${orderOfCalculation11[index]}</span>
        <div class='draggable draggable11' draggable="true">
        <p class="person-name">${multiple}</p>
      
        </div>
        `;
            listItems11.push(listItem)
            list11.appendChild(listItem);
            addEventListeners11()
        })

}

function randomOrder11(orderOfCalculation11) {
    list11.innerHTML = '';
    listItems11 = [];
    shuffle(orderOfCalculation11);
    createList11()
}
function addEventListeners11() {
    const draggables = document.querySelectorAll('.draggable11');
    const dragListItems = document.querySelectorAll(`#draggable-list11 li`);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart11);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver11);
        item.addEventListener('drop', dragDrop11);
        item.addEventListener('dragenter', dragEnter11);
        item.addEventListener('dragleave', dragLeave11);
    });
}

function dragStart11() {
    dragStartIndex11 = +this.closest('li').getAttribute('data-index');

}

function dragEnter11() {
    this.classList.add('over')
}

function dragLeave11() {
    this.classList.remove('over')
}

function dragOver11(e) {
    e.preventDefault();
}

function dragDrop11() {

    const dragEndIndex11 = +this.getAttribute('data-index')
    swapItems11(dragStartIndex11, dragEndIndex11)
    this.classList.remove('over')
}

function swapItems11(fromIndex11, toIndex11) {
    const itemOne = listItems11[fromIndex11].querySelector('.draggable11');
    const itemTwo = listItems11[toIndex11].querySelector('.draggable11');
    listItems11[fromIndex11].appendChild(itemTwo);
    listItems11[toIndex11].appendChild(itemOne)
}

//12 Times Table
let list12 = document.getElementById('draggable-list12')
const check12 = document.getElementById('check-button12')
const randomOrderButton12 = document.getElementById('random-Order12')
let orderOfCalculation12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const multiplesOfTwelve = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144]
let listItems12 = [];

createList12();

randomOrderButton12.addEventListener('click', function () { randomOrder12(orderOfCalculation12) })
check12.addEventListener('click', function () { checkOrder(listItems12, 12, orderOfCalculation12) })

// Store ListItems

let dragStartIndex12;

// Insert List Items into DOM;
function createList12() {
    [...multiplesOfTwelve].map(a => ({ value: a, sort: Math.random() }))

        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((multiple, index) => {


            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
        <span class='number'> 12 x ${orderOfCalculation12[index]}</span>
        <div class='draggable draggable12' draggable="true">
        <p class="person-name">${multiple}</p>
      
        </div>
        `;
            listItems12.push(listItem)
            list12.appendChild(listItem);
            addEventListeners12()
        })

}

function randomOrder12(orderOfCalculation12) {
    list12.innerHTML = '';
    listItems12 = [];
    shuffle(orderOfCalculation12);
    createList12()
}
function addEventListeners12() {
    const draggables = document.querySelectorAll('.draggable12');
    const dragListItems = document.querySelectorAll(`#draggable-list12 li`);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart12);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver12);
        item.addEventListener('drop', dragDrop12);
        item.addEventListener('dragenter', dragEnter12);
        item.addEventListener('dragleave', dragLeave12);
    });
}

function dragStart12() {
    dragStartIndex12 = +this.closest('li').getAttribute('data-index');

}

function dragEnter12() {
    this.classList.add('over')
}

function dragLeave12() {
    this.classList.remove('over')
}

function dragOver12(e) {
    e.preventDefault();
}

function dragDrop12() {

    const dragEndIndex12 = +this.getAttribute('data-index')
    swapItems12(dragStartIndex12, dragEndIndex12)
    this.classList.remove('over')
}

function swapItems12(fromIndex12, toIndex12) {
    const itemOne = listItems12[fromIndex12].querySelector('.draggable12');
    const itemTwo = listItems12[toIndex12].querySelector('.draggable12');
    listItems12[fromIndex12].appendChild(itemTwo);
    listItems12[toIndex12].appendChild(itemOne)
}






//Universal Functions
function checkOrder(listItems, timesTable, orderOfCalculation) {

    listItems.forEach((listItem, index) => {
        const answer = listItem.querySelector('.draggable').innerText.trim();
        const question = orderOfCalculation[index] * timesTable;

        if (+answer !== question) {
            listItem.classList.add('wrong')
            listItem.classList.remove('right')
        } else {
            listItem.classList.remove('wrong')
            listItem.classList.add('right')
        }
    })
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// Hide and Show Times Tables 
document.getElementById("two").addEventListener("click", function () {
    const timesTableContainer = document.querySelectorAll(".timesTable")

    timesTableContainer.forEach(container => {
        container.style.display = "none"
    })
    document.getElementById("timesTable2").style.display = "block"
})
document.getElementById("three").addEventListener("click", function () {
    const timesTableContainer = document.querySelectorAll(".timesTable")

    timesTableContainer.forEach(container => {
        container.style.display = "none"
    })
    document.getElementById("timesTable3").style.display = "block"
})
document.getElementById("four").addEventListener("click", function () {
    const timesTableContainer = document.querySelectorAll(".timesTable")

    timesTableContainer.forEach(container => {
        container.style.display = "none"
    })
    document.getElementById("timesTable4").style.display = "block"
})
document.getElementById("five").addEventListener("click", function () {
    const timesTableContainer = document.querySelectorAll(".timesTable")

    timesTableContainer.forEach(container => {
        container.style.display = "none"
    })
    document.getElementById("timesTable5").style.display = "block"
})
document.getElementById("six").addEventListener("click", function () {
    const timesTableContainer = document.querySelectorAll(".timesTable")

    timesTableContainer.forEach(container => {
        container.style.display = "none"
    })
    document.getElementById("timesTable6").style.display = "block"
})
document.getElementById("seven").addEventListener("click", function () {
    const timesTableContainer = document.querySelectorAll(".timesTable")

    timesTableContainer.forEach(container => {
        container.style.display = "none"
    })
    document.getElementById("timesTable7").style.display = "block"
})
document.getElementById("eight").addEventListener("click", function () {
    const timesTableContainer = document.querySelectorAll(".timesTable")

    timesTableContainer.forEach(container => {
        container.style.display = "none"
    })
    document.getElementById("timesTable8").style.display = "block"
})
document.getElementById("nine").addEventListener("click", function () {
    const timesTableContainer = document.querySelectorAll(".timesTable")

    timesTableContainer.forEach(container => {
        container.style.display = "none"
    })
    document.getElementById("timesTable9").style.display = "block"
})
document.getElementById("ten").addEventListener("click", function () {
    const timesTableContainer = document.querySelectorAll(".timesTable")

    timesTableContainer.forEach(container => {
        container.style.display = "none"
    })
    document.getElementById("timesTable10").style.display = "block"
})
document.getElementById("eleven").addEventListener("click", function () {
    const timesTableContainer = document.querySelectorAll(".timesTable")

    timesTableContainer.forEach(container => {
        container.style.display = "none"
    })
    document.getElementById("timesTable11").style.display = "block"
})
document.getElementById("twelve").addEventListener("click", function () {
    const timesTableContainer = document.querySelectorAll(".timesTable")

    timesTableContainer.forEach(container => {
        container.style.display = "none"
    })
    document.getElementById("timesTable12").style.display = "block"
})
