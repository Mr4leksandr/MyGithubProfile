const github = new Github;

github.getUserData()
.then(data => {
    console.log(data.profile);
    console.log(data.repos);
})
