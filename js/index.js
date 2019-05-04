// Your code goes here










// Hover over the Fun Bus logo to double its size.
const navLogoHeading = document.querySelector('.logo-heading');
navLogoHeading.addEventListener("mouseover", (e) => e.target.style.transform = "scale(2.0)");
navLogoHeading.addEventListener('mouseleave', (e) => e.target.style.transform = "scale(1.0)");

// Drag the intro img to increase its size. 
const funBusBanner = document.querySelector(".intro > img");
funBusBanner.addEventListener('drag', (e) => e.target.style.transform = 'scale(1.25)');

// Double click the nav links to change their background color to red.
const nav = document.querySelector(".nav");
nav.addEventListener("dblclick", (e) => { e.target.style.backgroundColor = 'red'; });

// Press any keyboard key to make the header disappear. 
const body = document.querySelector('body');
const header = document.querySelector('.main-navigation');
body.addEventListener("keydown", () => { header.style.opacity = "0" });