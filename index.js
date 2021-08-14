var controller = new ScrollMagic.Controller();

const [red, green, blue] = [236, 240, 241]
const body = document.body;

// get element by class name
const buttons = document.getElementsByClassName('social-btns')[0];


window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

new ScrollMagic.Scene({
    duration: 800,
    offset: 0
})
    .setPin('#social-btns') 
    .addTo(controller); 

// github api

function getTimeSinceIso(iso) {
    let currentTime = new Date();
    let expireTime = new Date(iso);

    console.log(currentTime);
    console.log(expireTime);

    let seconds = Math.floor((currentTime - expireTime) / 1000);
    let minutes = Math.floor((currentTime - expireTime) / (1000 * 60));
    let hours = Math.floor((currentTime - expireTime) / (1000 * 60 * 60));
    let days = Math.floor((currentTime - expireTime) / (1000 * 60 * 60 * 24));
    let weeks = Math.floor((currentTime - expireTime) / (1000 * 60 * 60 * 24 * 7));
    let months = Math.floor((currentTime - expireTime) / (1000 * 60 * 60 * 24 * 30));
    let years = Math.floor((currentTime - expireTime) / (1000 * 60 * 60 * 24 * 365));

    console.log({seconds, minutes, hours, days, weeks, months, years});

    if (years > 0) {
        let unit;
        years > 1 ? unit = "years" : unit = "year";
        return years + ` ${unit} ago`;
    } else if (months > 0) {
        let unit;
        months > 1 ? unit = "months" : unit = "month";
        return months +` ${unit} ago`;
    } else if (weeks > 0) {
        let unit;
        weeks > 1 ? unit = "weeks" : unit = "week";
        return weeks + ` ${unit} ago`;
    }  else if (days > 0) {
        let unit;
        days > 1 ? unit = "days" : unit = "day";
        return days + ` ${unit} ago`;
    } else if (hours > 0) {
        let unit;
        hours > 1 ? unit = "hours" : unit = "hour";
        return hours + ` ${unit} ago`;
    } else if (minutes > 0) {
        let unit;
        minutes > 1 ? unit = "minutes" : unit = "minute";
        return minutes + ` ${unit} ago`;
    } else {
        let unit;
        seconds > 1 ? unit = "seconds" : unit = "second";
        return seconds + ` ${unit} ago`;
    };
};  

const github_div = document.getElementById('github-div'); 

console.log(github_div);

let jsondata = "";
let apiUrl = 'https://api.github.com/users/EliotHertenstein/repos';

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main() {
    repos = await getJson(apiUrl);

    // sort repos by new commits
    repos.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.pushed_at) - new Date(a.pushed_at);
    });
      
    
    // create a div for every repo
    for (let i = 0; i < repos.length; i++) {
        let repo = repos[i];
        let repo_name = repo.name;
        let repo_url = repo.html_url;
        let repo_description = repo.description;
        let repo_last_commit_ISO = repo.pushed_at;
        let repo_last_commit_time = getTimeSinceIso(repo_last_commit_ISO);

        console.log(repo_last_commit_ISO);

        let div = document.createElement('div')
        div.className = 'github-repo'
        div.innerHTML = `
        <div class="repo-name"><a href="${repo_url}">${repo_name}</a></div>
        <div class="repo-desc">${repo_description}</div> 
        <div class="repo-date"><a>${repo_last_commit_time}</a></div>
        `;
        github_div.appendChild(div)
    }
}

main();