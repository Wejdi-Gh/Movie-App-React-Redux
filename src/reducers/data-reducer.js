
import film1 from '../Images/Film1.jpg'
import film2 from '../Images/Film2.jpg'
import film3 from '../Images/Film3.jpg'
import film4 from '../Images/Film4.jpg'
import film5 from '../Images/Film5.jpg'
import film6 from '../Images/Film6.jpg'
import film7 from '../Images/Film7.jpg'
import film8 from '../Images/Film8.jpg'
import uuidv1 from "uuid"; 

let intiatestate =  {tab : [
    {id: uuidv1(),image:film1 , title : "ALIEN" , yellowstars: 3 },
    {id: uuidv1(),image:film2 , title : "RED SPPAROW",yellowstars : 3 } ,
    {id: uuidv1(),image:film3 , title : "TRUTH OR DARE",yellowstars : 2 },
    {id: uuidv1(),image:film4 , title : "GLASS" ,yellowstars : 5 },
    {id: uuidv1(),image:film5 , title : "ALL THE MONEY",yellowstars : 4  },
    {id: uuidv1(),image:film6 , title : "THOR" ,yellowstars : 2 } ,
    {id: uuidv1(),image:film7 , title : "BRIDGE OF SPIES",yellowstars : 3 },
    {id: uuidv1(),image:film8 , title : "CHOOSE",yellowstars : 1 },
    ] }

    function Datareducer (state=intiatestate,action){

    if (action.type === "movielist") {

        return state 
    }
    else if (action.type==="Remove"){
         console.log({tab: state.tab, action})
        return {tab:state.tab.filter((el) => el.id !== action.payload)}
    }
 
    else if (action.type==="add") {

         return {tab: state.tab.concat(action.payload)}
    }
    else  return state 
}



    export default Datareducer;