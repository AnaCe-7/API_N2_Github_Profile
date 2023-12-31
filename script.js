const APIURL = 'https://api.github.com/users/'
const searchProfile = document.getElementById('search');
const main = document.getElementById('main');

function showProfile () {
    axios.get(APIURL)
        .then((response) => {
            const profile = response.data

            profile.forEach(profile => {

                const card =
                `<div class="card">
                    <img class="avatar" src="${response.data.avatar_url}" alt="Pokemon avatar">
                    <div class="user-info">
                        <h2 class="name">${response.data.name}</h2>
                        <p class="bio">${response.data.bio}</p>
                        <ul>
                            <li>${response.data.followers_url} Followers</li>
                            <li>${response.data.following_url} Following</li>
                            <li>${response.data.public_repos} Repos</li>        
                        </ul>

                        <ul>
                            <li>${response.data.repos_url.name}</li>      
                        </ul>
                    </div>
                </div>`

                main.innerHTML = card;
            });

        })
        .catch((err) => {
            console.error(err);
        })
};


