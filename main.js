const linksSocialMedia = {
    github: "YuriMont",
    youtube: "YuriMont",
    facebook: "YuriMont",
    instagram: "yuri.monteiro1043",
    twitter: "YuriMont"
}

//DOM

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class');
        li.children[0].href= `https://${social}.com/${linksSocialMedia[social]}/`
    }
}

changeSocialMediaLinks();

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("bio").textContent=data.bio  
    });
}

getGitHubProfileInfos();