// ==UserScript==
// @name SFSU GRADE CALCULATOR
// @description ADDS EVERYTHING TOGETHER
// @author shdw
// @include *ilearn.sfsu.edu/ay2122/grade/report/user/*
// @version 1.0
// @grant none
// @license MIT
// ==/UserScript==

(function() {
    let grades = document.getElementsByClassName("level2 leveleven item b1b itemcenter  column-grade");
    let innergrades = document.getElementsByClassName("level3 levelodd item b1b itemcenter  column-grade");
    let graderange = 0;
    let totalscore = 0;

    let i = 0;
    for (i = 0; i < grades.length; i++) {
        let score = Number(grades[i].innerText.split(' (')[0])
        if (!isNaN(score)) {
            totalscore += score
        }
    }

    let j = 0;
    for (j = 0; j < innergrades.length; j++) {
        let score = Number(innergrades[j].innerText.split(' (')[0])
        if (!isNaN(score)) {
            totalscore += score
        }
    }

    document.getElementsByClassName("level1 levelodd oddd1 b2t column-itemname")[0].innerHTML += " ⏩⏩ | CALCULATED GRADE: " + totalscore;
    try {
        let range = document.getElementsByClassName("level1 levelodd oddd1 baggb itemcenter  column-range")[0].innerText.split('–')[1];
        graderange = range;
        let percentage = Math.floor((totalscore / graderange) * 100)
        document.getElementsByClassName("level1 levelodd oddd1 b2t column-itemname")[0].innerHTML += " | PERCENTAGE: " + percentage + "%";
    } catch (error) {
        console.log("COULD NOT FIND GRADE")
        graderange = "N/A"
    }


})();
