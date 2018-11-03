/**
 * GitHub Finder
 * @version 1.0
 */
class Ui{
    constructor(){
        this.profile = document.getElementById('profile');
    }


    // Display user profile
    showProfile(user){
        // console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="user_avatar_url" class="img-fluid mb-2">
                <a href="${user.html_url}" target="_blank" 
                    class="btn btn-primary btn-block mb-4">View Profile
                </a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
					<span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
					<span class="badge badge-success">Followers: ${user.followers}</span>
					<span class="badge badge-info">Following: ${user.following}</span>
                    <br>
                    <br>
					<ul class="class-group">
						<li class="list-group-item">Company: ${user.company}</li>
						<li class="list-group-item">Website: ${user.blog}</li>
						<li class="list-group-item">Location: ${user.location}</li>
						<li class="list-group-item">Member Since: ${user.created_at}</li>
					</ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos">
        `;
    }


    // Show user repos
    showRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output += `
    <div class="card card-body mb-2">
        <div class="row">
            <div class="col-md-6"> 
                <a href="${repo.ntml_url}" target="_blank" 
                    class="btn btn-primary btn-block mb-4">${repo.name}
                </a>
            </div>
            <div class="col-md-6">
                <span class="badge badge-primary"> Starts: ${repo.stargazers_count} </span>
                <span class="badge badge-secondary">Watchers: ${repo.watchers_count} </span>
                <span class="badge badge-success">Forks: ${repo.forks_count} </span>    
            </div>
        </div>
    </div>
            `;
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;
    }


    // Clear alert MSG
    clearAlert(){
        let currentAlert = document.querySelector('.alert');
            if (currentAlert){
                currentAlert.remove();
            }
    }

    // Clear user profile
    clearProfile(){
        this.clearProfile.innerHTML = '';
    }


    // Show alert MSG
    showAlert(message, className){
        // Clear alert
        this.clearAlert();
        // Create div
        let div = document.createElement('div');
        // Add clases
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        let container = document.querySelector('searchContainer');
        // Get search box
        let search = document.querySelectorAll('.search');
        // Insert alert
        container.insertBefore(div, search);
        // Timout after 3 sec
        setTimeout( ()=>{
            this.clearAlert();
        }, 3000);
    }
 }