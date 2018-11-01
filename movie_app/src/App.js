import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';




class App extends Component {

  state = {
  
    
  }

  componentDidMount(){
    setTimeout(() => {
        // this.state.greeting = '안녕하세요'
        // this.setState({
        //   greeting: '안녕하세요'
        // })

        this.setState({
          movies: [
            
            {
              title :"matrix",
              poster : "http://ticketimage.interpark.com/Movie/still_image/V16/V1601447p_s01.gif"
            },
            {
              title : "Full Metal Jacket",
              poster : "https://www.imagetoday.co.kr/images/event/event_201810_pop.jpg"
            },
            {
              title : "Old Boy",
              poster : "http://img2.sbs.co.kr/img/sbs_cms/PG/2015/09/04/PG39131527_w1280_h720.jpg"
            },
            {
              title : "Star Wars",
              poster : "http://ticketimage.interpark.com/Movie/still_image/V16/V1601447p_s01.gif"
            }
          ]
        })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie ,index)=> {
            
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }


  render() {
    console.log("render")
    
    return (

      <div className="App">
        {this.state.movies ? this._renderMovies() : 'loading' }

      </div>
    );
  }
}

export default App;
