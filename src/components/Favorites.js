import React from "react";
import Post from "./Post.js";

function Favorites(props) {
  const posts = props.favoritesData.map(post => {
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

  if (posts.length !== 0) {
    return (
      <div className="reddit-feed-container favorites">
        <div>
          <h1 className="heading">Your favorites</h1>
          {posts}
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="reddit-feed-container favorites">
        <div className="no-favorites">
          <p>No favorites yet.</p>
        </div>
      </div>
    );
  }

  
};

export default Favorites;