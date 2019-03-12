import React from 'react';
import Addcard from '../Images/addcard.jpg'
import { connect } from "react-redux";
import Addmovie from '../actions/addmovie'
import uuidv1 from "uuid"; 



function mapDispatchToProps(dispatch) {
  return {
    Addmovie: (data)=> dispatch(Addmovie(data))   
  };
}



class Addfilm  extends React.Component  {
  constructor(props) {
    super(props)
    this.state= {newimage: "" , newtitle : "" , newyellowstars: 0   }
    this.Addtostore = this.Addtostore.bind(this)
   }

 
 Addtostore (e) {
    e.preventDefault();
    this.props.Addmovie({id:uuidv1(),image:this.state.newimage , title : this.state.newtitle , yellowstars:this.state.newyellowstars} )
    }
    
    
  render () 
  { return ( <div className="cardadd" >
     <button type="button" className="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModalLong">
      <img src={Addcard} className="card-img-top addimage" alt="..."/>
         </button>
               
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
            aria-hidden="true">
             <div class="modal-dialog" role="document">
             <div  className="modal-content">
                <div  className="modal-header">
                <h5  className="modal-title" id="exampleModalLongTitle">  Add A New Movie </h5>
                      <button type="button"  className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                             </button>
                             </div>
                                <div class="modal-body ">

                                    <div class="information">
                                        <form >
                                            <label for="firstname"> Title : </label>
                                            <input type="text" name="lastname" id="first_name" className="inputarea" onChange={(e)=> this.setState({newtitle:e.target.value}) }/>

                                            <label for="lastname"> Rate: </label>
                                            <input type="text" name="firstname" id="last_name" className="inputarea" onChange={(e)=> this.setState({newyellowstars:parseInt(e.target.value)})}/>

                                            <label for="pic"> Image : </label>                                       
                                             <input type="file" name="pic" accept="image/*" onChange={(e)=> this.setState({newimage:e.target.value})}/>

                                            <label for="comments"> Comments</label>
                                            <textarea name="comment" id="comments" class="inputarea"></textarea>
                                            <div class="subres">
                                               <button type="button" class="submit" data-dismiss="modal"onClick={this.Addtostore}  > Add  </button>
                                                <button type="reset" class="reset"> Reset </button>
                                            </div>
                                        </form>


                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

    </div>
    
    );
    }
  }
           
  export default connect(null, mapDispatchToProps)(Addfilm); 