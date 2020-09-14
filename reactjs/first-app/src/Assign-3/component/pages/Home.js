import React, { Component } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../assets/Home.css";
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Home">
        <h1>Student Registration</h1><br/>
        <div className="StudentForm">
            <StudentForm />
            </div>
            </div>
      );
    }
  }
    const StudentForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      Email: "",
      Contact: "",
      State: "",
      City: "",
      Pincode: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm({ values: "" });
    },
      validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First name is required"),
      lastName: Yup.string()
        .required("Lastname is required"),
      Email: Yup.string()
        .email("Please enter valid email id")
        .required("Email is required"),
      Contact: Yup.string()
        .matches(/^[0-9]+$/, "Mobile number is not valid")
        .min(10, "Contact number must be of 10 digits")
        .max(10, "Contact number must be of 10 digits")
        .required("Contact number is required"),
      State: Yup.string()
        .required("State name is required"),
      City: Yup.string()
        .required("City name is required"),
      Pincode: Yup.string()
        .min(6, "Pincode must have 6 digits")
        .max(6, "Pincode must have 6 digits")
        .matches((/^\d{6}$/), "Must be only 6 digits")
        .required("Pinode is required"),
        
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <div className="element">
        <div className="label">
          <label htmlFor="firstName">First Name : </label>
        </div>
        <div className="input">
          <input id="firstName" name="firstName" type="text" onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.firstName}
           />
           </div>
         </div>
         {formik.errors.firstName && formik.touched.firstName ? (
           <div className="error">{formik.errors.firstName}</div>
         ) : null}  
          <div className="element">
        <div className="label">
          <label htmlFor="lastName">Last Name : </label>
        </div>
        <div className="input">  
        <input id="lastName" name="lastName" type="text" onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.lastName}
        />
           </div>
         </div>
         {formik.errors.lastName && formik.touched.lastName ? (
           <div className="error">{formik.errors.lastName}</div>
         ) : null}    
          <div className="element">
        <div className="label">
          <label htmlFor="Email">Email : </label>
        </div>
        <div className="input">
          <input id="Email" name="Email" type="email" onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.Email}
           />
           </div>
         </div>
         {formik.errors.Email && formik.touched.Email ? (
           <div className="error">{formik.errors.Email}</div>
         ) : null}
           <div className="element">
           <div className="label">
             <label htmlFor="Contact">Contact No : </label>
           </div>
           <div className="input">
             <input id="Contact" name="Contact" type="text" onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.Contact}
              />
              </div>
            </div>
            {formik.errors.Contact && formik.touched.Contact ? (
              <div className="error">{formik.errors.Contact}</div>
            ) : null}
      
            <div className="element">
              <div className="label">
                <label htmlFor="State">State : </label>
              </div>
              <div className="input">
                <input  id="State"  name="State"  type="text" onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.State}
                 />
                 </div>
               </div>
               {formik.errors.State && formik.touched.State ? (
                 <div className="error">{formik.errors.State}</div>
               ) : null}
               <div className="element">
                 <div className="label">
                   <label htmlFor="City">City : </label>
                 </div>
                 <div className="input">
                   <input id="City" name="City" type="text" onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.City}
                     />
                     </div>
                   </div>
                   {formik.errors.City && formik.touched.City ? (
                     <div className="error">{formik.errors.City}</div>
                   ) : null} 
                    <div className="element">
                 <div className="label">
                   <label htmlFor="Pincode">Pincode : </label>
                 </div>
                 <div className="input"> 
                 <input id="Pincode" name="Pincode" type="text" onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.Pincode}
                   />
                  </div>
               </div>
               {formik.errors.Pincode && formik.touched.Pincode ? (
                 <div className="error">{formik.errors.Pincode}</div>
               ) : null}   
                <div className="btn">
               <button type="submit">Save</button>
               </div>
             </form>
           );
         };
         
      
          
            
            
            
            
            
         
      
            
            
            
            
                       
          
            
            
            
            
            
            
           
           
           
            
            
            
         
     
            
            
         
      
          
            
            
            
            
            
        
      