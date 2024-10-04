document.addEventListener("DOMContentLoaded", function(){

    const searchButton = document.getElementById("search-btn");
    const userName = document.getElementById("user-input");
    const stateContainer = document.querySelector(".stats-container");
    const easyprogressCircle = document.querySelector(".easy-progress");
    const mediumprogressCircle = document.querySelector(".medium-progress");
    const hardprogressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".state-card");

    // return true or false based on a regex
    function validateUserName(userName){
        if(userName.trim() ===""){
            alert("username should be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(userName);
        if(!isMatching){
            alert("invalid username")

        }
        return isMatching;

    }

    async function fatchuserdetails(userName) {
        const url = 
    }
    
    searchButton.addEventListener('click', function(){
        const userName = userNameInput.value;
        console.log("login userName ",userName)
        if(validateUserName(userName)){
            fatchuserdetails(userName);
        }
    })
})