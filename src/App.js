import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'

const API = 'AIzaSyBECSqS6rO-6vj6yOWYf295pWPVywmOuBQ'

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet`

class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        resultyt: []
      };
      this.getVideos = this.getVideos.bind(this);
    }

    getVideos(text){
      fetch(finalURL + '&q=' + text)
        .then((response) => response.json())
        .then((responseJson) => {
          const resultyt = responseJson.items.map(video => "https://www.youtube.com/embed/"+video.id.videoId);
          this.setState({resultyt});
        })
        .catch((error) => {
          console.error(error);
        })
    }

  render(){
    return (
      <div>
      <Form getVideos={this.getVideos}/>
      <div className="videoDisplay">
        {
          this.state.resultyt.map((link, i) => {
            console.log(link);
            var frame = <div className="youtube" key={i}><iframe width="560" height="315" src={link}></iframe></div>
            return frame
          })
        }
      </div>
    </div>
   )
  }
 }

export default App;
