function analyzeProfile(user){
    const years = (Date.now() - new Date(user.created_at)) / (1000 * 60 * 60 * 24 * 365);

    let profileLevel = 'Beginner';

    if(user.followers > 1000){
        profileLevel = 'Popular';
    } else if (user.followers > 100){
        profileLevel = 'Growing'
    }

    return {
        username: user.login,
        name: user.name,
        followers: user.followers,
        following: user.following,
        publicRepos: user.public_repos,
        profileLevel,
        accountAgeYears: Math.floor(years),
    };
}

module.exports = { analyzeProfile }