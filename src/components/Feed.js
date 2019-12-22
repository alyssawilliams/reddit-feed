import React from "react";
import Post from "./Post.js";

function Feed(props) {
  const posts = props.feedData.map(post => {
    const { id, title, permalink, author, ups, created_utc, preview } = post.data;

    return (
      <Post 
        key={id} 
        id={id}  
        title={title}
        permalink={permalink}
        author={author} 
        upvotes={ups} 
        posted={created_utc}
        image={preview.images[0].resolutions[3].url}
        handleFavorite={props.handleFavorite}
        favoriteAction={props.favoriteAction}
      />
    );
  });

  return (
    <main className="feed">
      {posts}
    </main>
  );
}

export default Feed;