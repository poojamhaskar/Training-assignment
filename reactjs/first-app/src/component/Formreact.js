import React, { Component } from "react";


export default class Reg extends Component
 {
  constructor(props)
   {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      phNumber: "",
      email: "",
          };
  }
validation=(event)=>
    {
        let fName=this.state.fName;
        let lName=this.state.lName;
        let phNumber=this.state.phNumber;
        let email=this.state.email;

        if(!fName || !lName || !phNumber || !email)
            {
                alert("Plz enter valid data!!!");
               return;
            }
          alert(`Your data is submited successfully and data is as follow\n
             First Name is :: ${fName}\n 
             Last Name  is :: ${lName}\n
             Contact detail is :: ${phNumber}\n
             Email is ::  ${email}`);
    }

    edit = (event) => {
        let element = event.target.id;
        this.setState({ [element]: event.target.value });
      };
    
resetField = (event) => {
  document.getElementById("fName").value="";
  document.getElementById("lName").value="";
  document.getElementById("phNumber").value="";
  document.getElementById("email").value="";
 };

    render()
    {
        return(
     <form className="Formreact">
         <pre>
        <p className="line">Student Registration Form</p>
        {<br/>}{<br/>}
     Enter Your First Name : <input type="text" id="fName" value={this.state.fName} onChange={this.edit}/>
    {<br/>}{<br/>}{<br/>}
     Enter Your Last Name  : <input type="text" id="lName" value={this.state.lName} onChange={this.edit}/>
     {<br/>}{<br/>}{<br/>}
     Enter Your Mobile No. : <input type="text" id="phNumber" value={this.state.phNumber} onChange={this.edit}/>
     {<br/>}{<br/>}{<br/>}
     Enter Your Email      : <input type="email" id="email"  value={this.state.email} onChange={this.edit}/>
     {<br/>}{<br/>}{<br/>}
    <button type="button" name="Submit" className="btn1"  onClick={this.validation}>Submit</button>        <button type="button" className="btn2" onClick={this.resetField} name="Reset">Reset</button>
    </pre>
        </form>


        );
    }
}

 
