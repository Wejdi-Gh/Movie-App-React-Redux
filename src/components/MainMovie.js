import React, { Component } from 'react';
import Searchbar from './SearchBar'
import Filmcard from './filmcard'
import '../App.css';


class Mainmovies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {dataresearch :"" , rateindex:0}
     
       }
    
      

     render() {
        return (<div>
<Searchbar />
 <div className="margin"></div>
 <Filmcard  />
 </div>

) }
        }

export default Mainmovies