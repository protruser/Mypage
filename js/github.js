url = 'https://api.github.com/users/';
const username = 'protruser';

addEventListener('DOMContentLoaded', () => {
    fetch(url + username)
        .then((response) => {
            if (!response.ok) throw new Error('Connection is not successful');
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .then((data) => {
            const avatar_url = data['avatar_url'];
            const bio = data.bio;
            const name = data.name;
            const public_repos = data.public_repos;
            const following = data.following;
            const followers = data.followers;
            const company = data.company;

            const container = document.getElementById('container');

            //intro
            const intro = document.createElement('div');
            intro.className = 'intro';
            container.appendChild(intro);

            // intro-photo
            const introPhoto = document.createElement('img');
            introPhoto.className = 'intro-photo';
            introPhoto.src = avatar_url;
            intro.appendChild(introPhoto);

            // intro-info
            const introInfo = document.createElement('div');
            introInfo.className = 'intro-info';
            intro.appendChild(introInfo);

            // name
            const gitname = document.createElement('h1');
            gitname.textContent = name;
            introInfo.appendChild(gitname);

            //
            const gitcompany = document.createElement('a');
            gitcompany.textContent = `${company}`;
            gitcompany.href = 'https://github.com/ST-ITM';
            introInfo.appendChild(gitcompany);

            // gitbio
            const gitbio = document.createElement('h5');
            gitbio.textContent = `bio: ${bio}`;
            introInfo.appendChild(gitbio);

            // repository
            const repos = document.createElement('h5');
            repos.textContent = `💾 Repository count: ${public_repos}`;
            introInfo.appendChild(repos);

            // follow+following
            const follow = document.createElement('h5');
            follow.textContent = `🤝 Followers: ${followers} / Followings: ${following}`;
            introInfo.appendChild(follow);
        })
        .catch((err) => {
            console.error(`${err} : There is an API info connection error`);
        });
});

addEventListener('DOMContentLoaded', () => {
    async function repoList(url) {
        try {
            const response = await fetch(`${url}${username}/repos`);

            if (!response.ok) throw new Error(`There is an API repository connection error : ${response.statusText}`);
            repos = await response.json();

            const container = document.getElementById('container');

            const h2 = document.createElement('h2');
            h2.textContent = '📁 Repositories';
            h2.style.margin = '0 0 20px 20px';
            container.appendChild(h2);

            // repo name, description, primary language, star counts, forks, and a link to the repository
            repos.forEach((repo) => {
                const reponame = repo.name;
                const repolanguage = repo.language;
                const repodescription = repo.description;
                const repofork = repo.forks;
                const linkurl = repo.html_url;
                const starcount = repo.stargazers_count;

                const card = document.createElement('div');
                card.className = 'repo-card';

                card.innerHTML = `
                    <h3><a href="${linkurl}" target="_blank"> ${reponame}</a></h3>
                    <p>${repodescription ? repodescription : 'No Description'}</p>
                    <div class="repo-meta">
                        <span> ${repolanguage ? repolanguage : 'No Language'}</span>
                        <span>⭐ ${starcount}</span>
                        <span>🍴 ${repofork}</span>
                    </div>
                `;

                container.appendChild(card);
            });
        } catch (e) {
            console.log(`${e} : There is an API repository connection error`);
        }
    }

    repoList(url);
});
