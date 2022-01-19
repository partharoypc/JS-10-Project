const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const alldays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const giveaway = document.querySelector('.giveway');
const dedline = document.querySelector('.dedline');
const dedlineData = document.querySelectorAll('.dedline-data h1');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const giveawayDay = new Date(tempYear, tempMonth, tempDay + 15, 12, 30, 0);


// let giveawayDay = new Date(2022, 1, 20, 10, 59, 0);

const year = giveawayDay.getFullYear();
const date = giveawayDay.getDate();
const hours = giveawayDay.getHours();
const minutes = giveawayDay.getMinutes();

let month = giveawayDay.getMonth();
month = months[month];

let weekday = giveawayDay.getDay();
weekday = alldays[weekday];

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes} am`;

// Total Time in milisecond
const totalFutureTime = giveawayDay.getTime();

function remainingTime() {
    const todayDate = new Date().getTime();
    const t = totalFutureTime - todayDate;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }
    dedlineData.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        dedline.innerHTML = `<h1 class="expired">sorry, this giveaway has expired!</h1>`;
    }


}
// countdown;
let countdown = setInterval(totalFutureTime, 1000);
//set initial values

remainingTime();