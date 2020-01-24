import React, {useState} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchState, filterColors } from './actions'
import Loader from 'react-loader-spinner'
import CardFrame from './components/cardFrame';

const App = props => {

  const [colorSelected, setColor] = useState('White');

  const handleChange = e => {
      setColor(e.target.value);
      console.log(colorSelected);
  }

  const handleSubmit = a => {
    a.preventDefault();
    props.filterColors(colorSelected);
  }

  return (
    <div className="App">
      <div className="searchHeader">

        <h1>MTG Card Viewer</h1>
        <h2>Pick a color</h2>
{/* onSubmit={() => props.filterColors(colorSelected)} */}
        <form onSubmit={handleSubmit}>
          <select defaultValue={colorSelected} onChange={(e) => handleChange(e)}>
            <option selected value='white'>White</option>
            <option value='Blue'>Blue</option>
            <option value='Black'>Black</option>
            <option value='Red'>Red</option>
            <option value='Green'>Green</option>
          </select>
          <button onClick={props.fetchState}>Submit</button>
        </form>
</div>
  <div className="cardContainer">
          {props.isLoading && (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          )}

          {props.cards && !props.isLoading && props.cards.map(e => {
            return (
              <CardFrame 
              id={e.id}
              name={e.name}
              colors = {e.colors}
              url = {e.imageUrl}
              />
              )
            })
          }
  </div>  
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    isLoading: state.isLoading
  }
}


export default connect(mapStateToProps, {fetchState, filterColors})(App);
