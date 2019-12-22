import React from "react";
import Post from "./Post.js";

export default function Feed(props) {
  let favoriteIDs = props.favoritesData.map(favorite => favorite.data.id);

  const posts = props.feedData.map(post => {
    const { id, title, permalink, author, ups, created_utc, preview } = post.data;
    let isFavorited = favoriteIDs.some(favoriteID => favoriteID === id);

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
        isFavorited={isFavorited}
      />
    );
  });

  return (
    <main className="reddit-feed-container feed">
      <div>
        <h1 className="heading">Top posts</h1>

        {posts}
        
        <div>
          <span className="fin">- fin -</span>
        </div>
      </div>
    </main>
  );
}