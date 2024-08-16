// now we will start with logic behind clock
// we will use setInterval method for updating clock in every 1s
// it takes two parameter funtion and time duration
// time duration will be in milliseconds

setInterval(showtime = () => {  
    // here showtime is funtion deefined using arrow funtion method 
    // first we will create instance of date object
    let time = new Date();
    // now using instance of date object we will get hours,minutes,second,day,date and year 
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    // now we will declared variable am_pm with initial value AM 
    am_pm = "AM";
    // now we will use if statement for checking whether it is AM or PM 
    if(hour > 12){
        hour -= 12; // it means hour = hour - 12
        am_pm = "PM";
    }
    if(hour == 0){
        hour = 12;
        am_pm = "AM";
    }

    // now we will use ternary operator for checking whether the time is less than 10 or not if it is less than 10 then '0' will be added before time 
    hour = hour < 10 ? "0"+hour:hour;
    minute = minute < 10 ? "0"+minute:minute;
    second = second < 10 ? "0"+second:second;

    // we will get the Element using getElementById method 
    hourdiv = document.getElementById("hour");
    mindiv = document.getElementById("minute");
    secdiv = document.getElementById("second");
    ampm = document.getElementById("am-pm");
    
    // now we will display the  result on computer screen using innerHTML
    hourdiv.innerHTML =hour;
    mindiv.innerHTML = ": "+minute;
    secdiv.innerHTML =": "+second;
    ampm.innerHTML = am_pm;
    
    // for displaying week of the day we will use getDay() method but it will display the number from 0-6 where 0 - sunday and 6-saturday
    // firstly we will create array of day of the week 
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    // as u know that indexing of array starts from 0
    // for getting item from array using index we use method like
    // array_name[index_no_of_item]
    // for e.g by using getDay() i got day of the week 4
    // then we can get day of week from array using that number by passing it as index in array like
    // weekday[4] it will return thu from array 
    let day = weekday[time.getDay()];
    
    dayspan = document.getElementById("day");
    dayspan.innerHTML = day+",";

    let date = time.getDate();

    // for month we will use getMonth() method but it returns number from 0-11 where 0-january and 11-december
    // we will do same as we had done to find day of the week we will create array of month and the number that will get from getMonth() method will be passed in array as index 
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let currmonth = month[time.getMonth()];
    datespan = document.getElementById("date");
    datespan.innerHTML = date+" "+currmonth;
    

    yearspan = document.getElementById("year");
    yearspan.innerHTML = time.getFullYear();
    

}
,1000);

// now we will call the function 
showtime();