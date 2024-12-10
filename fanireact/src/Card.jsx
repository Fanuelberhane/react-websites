import mypic from './assets/profile holder.jpg';


function Card(props) {
    return(
    
      <div className="card"> 
      <img src={mypic} alt="my image"/>
      <h2>Name: {props.name}</h2>
      <p>Age:{props.age}</p>
      <p>Enrolled:{props.Enrolled ? "yes": "No"} </p>
      </div>
     

    );

}

Card.defaultProps={
  name:"hello",
  age:0,
  isEnrolled:false
}

export default Card