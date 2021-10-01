//mode switch
function swapStyle(sheet){
    document.getElementById('myStylesheet').href = sheet
}



//github api fetching

var  form = document.getElementById("myForm")

form.addEventListener("submit",function(e){
    e.preventDefault()

    var search = document.getElementById("search").value
    
    //remove the space between entry words
    var originalName = search.split(" ").join("")

  


    //fetch to api
    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            var d = new Date(data.created_at);
            const day = d.getDate();
            const month = months[d.getMonth()];
            const year = d.getFullYear();


        document.getElementById("result").innerHTML = `

            <img src="${data.avatar_url}">
            <h1>${data.name}</h1>
            <h5>@${data.login}</h5>

            
            <h3 class="date">Joined ${day} ${month} ${year} </h3>


            <p>${data.bio}</p>
            <div class='data-box'>
                <p id="repo">Repos</p>
                <p id="space">Followers</p>
                <p id="space2">Following</p>
                <br><br>
                <p id="space5">${data.public_repos}</p>
                <p id="space3">${data.followers}</p>
                <p id="space4">${data.following}</p>     
            </div><br>
            <div class="location"> ${data.location}</div><br>
            <div class="blog"><a>${data.blog}</a></div><br>
            <div class="twitter">${data.twitter_username}</div><br>
            <div class="company">${data.company}</div>                  
        `   
    })

    


})


