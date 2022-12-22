"use strict";

getData();
function updateLocalStorage(radioButton) {
    localStorage.setItem(radioButton.name, radioButton.id);
}

async function getData(){
    
    try{
        let response = await fetch("./quiz.json");

        if(response.status !== 200) {
            throw new Error("Error while reading file.");
        }

        let quizJson = await response.json();

        console.log(quizJson);
        
        for (let key of Object.keys(quizJson.quiz)){
            let element = quizJson.quiz[key];
            document.body.innerHTML += '<h2>' + element.question + '</h2>'
            
            for (let i = 0; i < element.options.length; i++) {
                let optString = key + 'opt' + (i+1);
                document.body.innerHTML += '<input type="radio" id="'+ optString + '" name="' + key + '" onclick="updateLocalStorage(this);">' + '<label for="' + optString + '">' + element.options[i] + '</label><br></br>'
            }
        }

        for (let key of Object.keys(localStorage)) {
            document.getElementById(localStorage.getItem(key)).checked = true;
        }
    }

    catch (err){
        alert("Fetch problem: " + err.message);
    }
    
    finally {
        console.log("Load sucessful!");
    }
}




