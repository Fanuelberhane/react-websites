/*
function List( props){

 const catagory = props.catagory;

    const itemList = props.items;
    


 const fruits=[{id:1,name:"apple",calories:95},
        {id:2,name:"orange",calories:45},
        {id:3,name:"banana",calories:105},
        {id:4,name:"coconut",calories:159},
        {id:5,name:"pineapple",calories:37}];
    
   // fruits.sort((a,b)=> a.name.localeCompare(b.name));// aphabetical order
   //fruits.sort((a,b)=> b.name.localeCompare(a.name));//reverse order
   //fruits.sort((a,b)=> a.calories - b.calories);// number order
   //fruits.sort((a,b)=> b.calories - a.calories);/cal/ reverse number order
   //const lowcalFruits= fruits.filter(fruit=>fruit.calories < 100);
   
   //const highcalFruits= fruits.filter(fruit=>fruit.calories >= 100);

   const listItems= lowcalFruits.map(lowcalFruit => <li key={lowcalFruit.id}>{lowcalFruit.name}:
    &nbsp; <b>{lowcalFruit.calories}</b></li>);

    //const listItems= highcalFruits.map(highcalFruit => <li key={highcalFruit.id}> {highcalFruit.name} : &nbsp; <b>{highcalFruit.calories}</b></li>)



  const listItems = itemList.map(item => <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b></li>);

   return( <>
    <h3 className="list-catagory">{catagory}</h3>
<ol className="list-tems">{listItems}</ol>
</>

);

}
export default List
*/