
function Button(){
   /* const handleClick= () => console.log("ouch");
    const handleClick2=(name)=> console.log(`${name} stop clicking me`);

    //return(<button onClick={()=>handleClick2('bro')}>click me</button>);
    
    let count=0;

    const handleClick =(name)=> {
        if(count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} times`);

        }
        else {
            console.log(`${name}stop clicking me`);
        }
    }
    
    
    return(<button onClick={()=>handleClick('bro')}>clickme</button>)
*/

const handleClick = (e) => e.target.textContent = "ouch!! hurry up";

return (<button onDoubleClick={(e)=> handleClick(e)}>click me</button>)


}
export default Button