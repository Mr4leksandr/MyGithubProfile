class Github {

     constructor(){
         this.client_ID = "9ad55c7a2f2df617b501";
         this.Client_Secret = "09e74bb904daffe10043d5fbc0777f8496523904";
         this.user = "Mr4leksandr";
         this.apiUrl = "https://api.github.com/users/";
         this.repos_count = 5;
         this.repos_sort = "created: asc";
     }

     async getUserData(){
         let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.Client_Secret}`;
         let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&clint_id=${this.client_ID}&client_secret=${this.Client_Secret}`;
        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}