import  React  from "react";
class Profile extends  React.Component {

    constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:10,  // in class comp all state variable crete in one objext
            userInfo:{
                name:"Dummy name",
                location:"dummy loc"
            }
          
        }
        // this.state = {
         
        // }
        console.log("child- constructor")
    }
async componentDidMount(){
    //API calls
    const data = await fetch(" https://api.github.com/users/naveenkarukola");
    const json = await  data.json();
    console.log(json)
    this.setState({
        userInfo:json
    })

    console.log(" child - componentidimount")
}
componentDidMount(){
    this.timer = setInterval(()=>{
        console.log("naveen")
    },1000)
}
componentWillUnmount(){
    console.log("clearing")
    clearInterval(this.timer);
}
render() {
    console.log(" child render")
    const {count} = this.state; // destructirizing or else we need to use it like this.state.count
return <>
<h1>Profile class</h1>
<h2>Name:{this.state.userInfo.login}</h2>
<img src={this.state.userInfo.avatar_url} ></img>
<h2>created at:{this.state.userInfo.created_at}</h2>
{/* <h3>class comp count : {count} </h3>  
<button onClick={()=>
//we do not mutate stae directly
//never do thi.state = something
{ this.setState ({
    count:1,
    count2:2,
})}}>class setcount</button> */}
</>
}
}
export default Profile;