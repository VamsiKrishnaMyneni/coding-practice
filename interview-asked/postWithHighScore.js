const posts = [
    { id: 1, title: 'Post 1', likes: 0, Comment: 0, share: 0 }];

// Find the post with the highest score
// for like 2points, comment 3points, share 5points
// The post with the highest score is Post 4
// The score is 30(likes) + 4(Comment) + 20(share) = 54

const maxScorePost = (posts) => posts.reduce((max, post, index) => {
    const score = post.likes * 2 + post.Comment * 3 + post.share * 5;
    return (score > max.score || index === 0) ? { id: post.id, title: post.title, score } : max;
}, { id: 0, title: '', score: 0 });

const postWithHighScore = (posts) => {
    let post = { id: 0, title: '', likes: 0, Comment: 0, share: 0 };
    for (let i = 0; i < posts.length; i++) {
        const score = posts[i].likes * 2 + posts[i].Comment * 3 + posts[i].share * 5;
        if (score > post.score || i === 0) {
            post = { id: posts[i].id, title: posts[i].title, score: score };
        }
    }
    return post;
}

console.log(
    maxScorePost(posts), // { id: 4, title: 'Post 4', score: 54 }
    postWithHighScore(posts) // { id: 4, title: 'Post 4', score: 54 }
); 