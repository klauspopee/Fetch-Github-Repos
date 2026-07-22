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

        fetch(`https://api.github.com/users/${input.value}/repos`)
        .then((response) => response.json()) 
        .then((repos) => {
        
            // REMOVE NO DATA MSG 
            reposData.innerHTML = '';
    
            // LOOP ON THE REPOS
            repos.forEach(repo => {
                
                // creat the main div
                let mainDiv = document.createElement("div");

                // creat repo name text 
                let repoName = document.createTextNode(repo.name)

                // append the text to main div
                mainDiv.appendChild(repoName);

                // creat repo url elemetn
                let theUrl = document.createElement('a');
                
                // creat repo url text
                let urlText = document.createTextNode('Visit')

                // append the text to the a element 
                theUrl.appendChild(urlText)

                // add the href to the a
                theUrl.href = `https://github.com/${input.value}/${repo.name}`;

                // set attr balnk
                theUrl.setAttribute('target','_blank')

                // append the url to the main div
                mainDiv.appendChild(theUrl)

                // creat star coutns span
                let starsSpan =  document.createElement('span')

                // creat the stars span Text
                let starsSpanText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                // add start count text to stars span
                starsSpan.appendChild(starsSpanText);

                // append stars span count to the main div
                mainDiv.appendChild(starsSpan);

                // add classname to the main div
                mainDiv.className = 'repos-box'

                // append the main div to container 
                reposData.appendChild(mainDiv)
            })
        })
        
    }
}

