import React from 'react';

class Car extends React.Component { 
   state = {Person :{ 
      fullName:"mohamed",
      bio:"meta",
      imgSrc:"https://th.bing.com/th/id/OIP.Bekqf6MUA-Hk-D8_IvJliwHaLH?pid=ImgDet&rs=1",
      profession:"developer"} ,
      shows:true
    
    
    };

  componentDidMount()
  {
      this.setState({brand:"peugo"})
  }
     change=()=>
     {this.setState({shows:true})}
  render() {
    return (
      <div>
        {this.state.shows?<>
        <img src ={this.state.Person.imgSrc}></img>
        <h1>Name: {this.state.Person.fullName}</h1>
        <h1>  bio: {this.state.Person.bio}</h1>
        <h1>profession: {this.state.Person.profession}</h1>
        </>:null
        }
         <button onClick={this.change ()}>show</button>
      </div>
    );
  }
}
export default Car;