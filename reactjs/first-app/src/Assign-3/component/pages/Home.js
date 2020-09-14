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
      userEmail: Yup.string()
        .email("Please enter valid email id")
        .required("Email is required"),
      userContact: Yup.string()
        .matches(/^[0-9]+$/, "Mobile number is not valid")
        .min(10, "Contact number must be of 10 digits")
        .max(10, "Contact number must be of 10 digits")
        .required("Contact number is required"),
      userState: Yup.string()
        .required("State name is required"),
      userCity: Yup.string()
        .required("City name is required"),
      userPincode: Yup.string()
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
          <input
            id="firstName"
            name="firstName"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
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
          <input
            id="lastName"
            name="lastName"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
      </div>
      {formik.errors.lastName && formik.touched.lastName ? (
        <div className="error">{formik.errors.lastName}</div>
      ) : null}
      <div className="element">
        <div className="label">
          <label htmlFor="userEmail">Email : </label>
        </div>
        <div className="input">
          <input
            id="userEmail"
            name="userEmail"
            type="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userEmail}
          />
        </div>
      </div>
      {formik.errors.userEmail && formik.touched.userEmail ? (
        <div className="error">{formik.errors.userEmail}</div>
      ) : null}
        <div className="element">
        <div className="label">
          <label htmlFor="userContact">Contact No : </label>
        </div>
        <div className="input">
          <input
            id="userContact"
            name="userContact"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userContact}
          />
        </div>
      </div>
      {formik.errors.userContact && formik.touched.userContact ? (
        <div className="error">{formik.errors.userContact}</div>
      ) : null}

      <div className="element">
        <div className="label">
          <label htmlFor="userState">State : </label>
        </div>
        <div className="input">
          <input
            id="userState"
            name="userState"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userState}
          />
        </div>
      </div>
      {formik.errors.userState && formik.touched.userState ? (
        <div className="error">{formik.errors.userState}</div>
      ) : null}
      <div className="element">
        <div className="label">
          <label htmlFor="userCity">City : </label>
        </div>
        <div className="input">
          <input
            id="userCity"
            name="userCity"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userCity}
          />
        </div>
      </div>
      {formik.errors.userCity && formik.touched.userCity ? (
        <div className="error">{formik.errors.userCity}</div>
      ) : null}
      <div className="element">
        <div className="label">
          <label htmlFor="userPincode">Pincode : </label>
        </div>
        <div className="input">
          <input
            id="userPincode"
            name="userPincode"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userPincode}
          />
        </div>
      </div>
      {formik.errors.userPincode && formik.touched.userPincode ? (
        <div className="error">{formik.errors.userPincode}</div>
      ) : null}
      <div className="btn">
      <button type="submit">Save</button>
      </div>
    </form>
  );
};
