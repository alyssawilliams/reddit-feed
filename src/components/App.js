import React from 'react';
import Header from './Header.js';
import Feed from './Feed.js';

class App extends React.Component {
  state = {
    feed: []
  }

  componentDidMount() {
    fetch('https://www.reddit.com/r/makeupaddiction/top.json')
    .then(res => res.json())
    .then((data) => {
      let feed = data.data.children.filter(post => {
        // Only show posts that have large preview images
        if (post.data.preview.images[0].resolutions[3].url !== undefined) {
          return post;
        }
      });

      this.setState( { feed: feed });
    })
    .catch(console.log);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Feed feed={this.state.feed}/>
      </div>
    );
  }
}

export default App;
