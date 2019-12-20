import React from "react";
import Post from "./Post.js";

function Favorites(props) {
  const posts = props.favoritesData.map(post => {
    return (
      <Post 
        key={post.data.id} 
        id={post.data.id}  
        title={post.data.title}
        url={post.data.url}
        author={post.data.author} 
        upvotes={post.data.ups} 
        posted={post.data.created_utc}
        image={post.data.preview.images[0].resolutions[3].url}
        handleFavorite={props.handleFavorite}
        favoriteAction={props.favoriteAction}
      />
    );
  });

  return (
    <div className="favorites">
      {posts}
    </div>
  );
};

export default Favorites;