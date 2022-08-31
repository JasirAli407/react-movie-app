import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
// console.log('hii',data);


class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
     
    store.subscribe(()=>{
      console.log('updated')
      //  console.log(this);
      this.forceUpdate()
    })
    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    })

    // console.log('state', store.getState());

  }
  render(){
    console.log('render');
    const movies = this.props.store.getState();
      return (
        <div className="App">
          <Navbar />      

          <div className='main'>

            <div className='tabs'>
              <div className='tab'>Movies</div>
              <div className='tab'>Favourites</div>
            </div>
              
              <div className='list'>
                {movies.map((movie, index)=>
              (<MovieCard movie={movie} key={`movies-${index}`} />))
                }            
              </div>

            </div>              
         </div>
    );
 }
}

export default App;
