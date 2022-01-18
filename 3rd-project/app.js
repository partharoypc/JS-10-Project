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

let giveawayDay = new Date(2022, 4, 22, 10, 59, 0);

const year = giveawayDay.getFullYear();
const date = giveawayDay.getDate();
const hours = giveawayDay.getHours();
const minutes = giveawayDay.getMinutes();

let month = giveawayDay.getMonth();
month = months[month];

let weekday = giveawayDay.getDay();
weekday = alldays[weekday];

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes} am`;