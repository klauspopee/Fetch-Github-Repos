// declare the main variables
let input = document.querySelector('.get-repos input');
let getBtn = document.querySelector('.get-btn');
let reposData = document.querySelector('.show-data');


getBtn.onclick = function () {

    getRepos();
}




// get repos function
function getRepos () {
    
    if (input.value == '') { // if the value is empty
        
        reposData.innerHTML = '<span>Please write Github Username</span>';

    } else {

        fetch('https://api.github.com/users/ElzeroWebSchool/repos')
        .then((response) => response.json()) 
        .then((repos) => {
            reposData.innerHTML = '';
        })
    }
}

