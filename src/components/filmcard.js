import React from 'react';
import Stars from './stars'
import Addfilm from './addfilm'
import Hocmovielist from './hocmovielist'
import { connect } from "react-redux";

import Remove from '../actions/remove';


const mapStateToProps = state => {
  return {...state};
};

function mapDispatchToProps(dispatch) {
  return {
      Movielist: ()=> dispatch({type:"movielist"}),
      Remove: (id)=> dispatch(Remove(id))
  };
}



class Filmcard extends React.Component  {
  constructor(props) {
    super(props)
  
   }

   searchfilm =(el) => {
    if (el.title.toLowerCase().indexOf(this.props.Searchreducer.filmsearch )!==-1) return el 
    }

    duplicate = (el, index, arry) =>{return arry.indexOf(el) !== index }

    searchrate= (el) => {
      if (this.props.Ratestars.rateindex=== 0 ) return el
      if (el.yellowstars === this.props.Ratestars.rateindex) return el
      }
 

       
render () {

  this.tab2=this.props.Datareducer.tab.filter(this.searchfilm)
  this.tab3=this.props.Datareducer.tab.filter(this.searchrate)
  this.tab4=this.tab2.concat(this.tab3).filter(this.duplicate)

 return ( <div className="filmlist"> 
 
   {this.tab4.map((el)=> <div className="card" >
    <img src={el.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{el.title}</h5>
      <Stars starscolor={el.yellowstars}/>
      <a href="#" className="btn btn-warning" > Play </a>
      <a href="#" className="btn btn-danger" onClick={()=>
        { if (window.confirm("Are you sure you want to delete this task?"))
        this.props.Remove(el.id)} }> remove </a>
    </div>
  </div>
    )}
   
   <Addfilm /> 
    
   </div>
  
  );
  
 }

}
export default connect(mapStateToProps, mapDispatchToProps)(Hocmovielist(Filmcard));
  