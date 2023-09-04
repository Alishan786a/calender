let dayscontainer = document.querySelector('#daysNumb>ul');

let nextBtn = document.querySelector('#nextBtn');
let backBtn = document.querySelector('#backBtn');
let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
let headerMonth = document.querySelector('#header-month');
let headerYear = document.querySelector('#header-year');
// this code is use for get currnet date and set in calender
let getDate = new Date();
headerMonth.innerText = monthList[getDate.getMonth()];
headerYear.innerText = getDate.getFullYear();

// this will get total daysin currnet month and then rander them
function daysFn(currYear, currMonth) {

    let li = "";
    //  below code use to  disable days of previous month
    let dayOnFirstDate = new Date(currYear, currMonth, 1).getDay(); //it will check day on first date of current month
    if (dayOnFirstDate != 0) {
        let daysInPrevMonth = new Date(currYear, currMonth, 0).getDate(); //it will check days in previous month
        // console.log(daysInPrevMonth);
        let disabledDaysOfPrevMonth = daysInPrevMonth - dayOnFirstDate;
        for (let i = dayOnFirstDate; i > 0; i--) {
            // console.log(daysInPrevMonth--); 
            li += `<li class="disabled" >${++disabledDaysOfPrevMonth}</li>`

        }
    }
    let daysInCurrMonth = new Date(currYear, currMonth + 1, 0).getDate();//check days in current or selected  month





    for (let i = 1; i <= daysInCurrMonth; i++) {
        li += `<li class="checking">${i}</li>`
        // console.log(li);

    }

    dayscontainer.innerHTML = '';
    let dayOnLastDate = new Date(currYear, currMonth, daysInCurrMonth).getDay(); //it will check day on last date of current month
    // console.log(dayOnLastDate);
    if (dayOnLastDate != 6) {
        let startDateOfNextMonth = 1;
        for (let i = dayOnLastDate; i < 6; i++) {
            console.log(i);
            li += `<li class="disabled" >${startDateOfNextMonth++}</li>`

        }


    }
    dayscontainer.innerHTML = li;
    // console.log(dayOnCurrMonth)
    activeClassFun()
   
}

daysFn(getDate.getFullYear(), getDate.getMonth())


// this below code will be use for header  next month and year
nextBtn.addEventListener('click', () => {
    let headerMonth = document.querySelector('#header-month');
    let headerYear = document.querySelector('#header-year');

    let indexOfCurrentMonth = monthList.indexOf(`${headerMonth.innerText}`);
    if (headerMonth.innerText != 'December') {
        console.log("yy");
        headerMonth.innerText = monthList[indexOfCurrentMonth + 1]

    } else {
        headerYear.innerText = Number(headerYear.innerText) + 1;
        headerMonth.innerText = 'January'


    }
    daysFn(headerYear.innerText, monthList.indexOf(headerMonth.innerText))

    //    days in month that is selected

})
// this below code will be use for header  back month and year
backBtn.addEventListener('click', () => {
    let headerMonth = document.querySelector('#header-month');
    let headerYear = document.querySelector('#header-year');

    let indexOfCurrentMonth = monthList.indexOf(`${headerMonth.innerText}`);
    if (headerMonth.innerText != 'January') {
        console.log("yy");
        headerMonth.innerText = monthList[indexOfCurrentMonth - 1]

    } else {
        headerYear.innerText = Number(headerYear.innerText) - 1;
        headerMonth.innerText = 'September'


    }
    daysFn(headerYear.innerText, monthList.indexOf(headerMonth.innerText))

})

// this function use to add active class
function activeClassFun(params) {
    let daysNumb = document.querySelectorAll('#daysNumb>ul>li.checking');

    daysNumb.forEach((e) => {
        e.classList.remove('active');
        e.addEventListener('click', () => {
            // console.log('oj');
            // use to set active class 

            daysNumb.forEach((e) => {
                e.classList.remove('active')
            });

            e.classList.add('active')
        })
    });
    // below function will set active class to to current date
    let date=new Date();
    let currMonth=date.getMonth();
    let currYear=date.getFullYear();

    if (currYear == headerYear.innerText && currMonth == monthList.indexOf(headerMonth.innerText)) {
        daysNumb.forEach((e) => {

            if (getDate.getDate() == e.innerText) {
                // console.log(e);
    
                e.classList.add('active')
            }
        }
        )
    }
   
}