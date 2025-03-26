const posts = [
    { id: 1, title: 'Post 1', likes: 15, Comment: 3, share: 10 },
    { id: 2, title: 'Post 2', likes: 20, Comment: 2, share: 5 },
    { id: 3, title: 'Post 3', likes: 25, Comment: 5, share: 15 },
    { id: 4, title: 'Post 4', likes: 30, Comment: 4, share: 20 }];

// Find the post with the highest score
// for like 2points, comment 3points, share 5points
// The post with the highest score is Post 4
// The score is 30(likes) + 4(Comment) + 20(share) = 54

const maxScorePost = (posts) => posts.reduce((max, post) => {
    const score = post.likes * 2 + post.Comment * 3 + post.share * 5;
    return score > max.score ? { id: post.id, title: post.title, score } : max;
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
maxScorePost(posts); // { id: 4, title: 'Post 4', score: 54 }
postWithHighScore(posts); // { id: 4, title: 'Post 4', score: 54 }