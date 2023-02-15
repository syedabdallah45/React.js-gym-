import React from 'react';
import { useForm } from "react-hook-form";
import classNames from 'classnames'
import '../index.css';
export default function Contact() {
    const { register, handleSubmit , formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <div className="container mt-5">
           <form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className={classNames("form-control",{"is-invalid":errors.Email})} id="Email"  name="email"  {...register("Email", { required: "email is required", pattern: {value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message:"email must contain all this  characters"} })} aria-describedby="emailHelp"/>
 {errors.Email && (<div className="invalid-feedback">{errors.Email.message}</div>)}

  {/* {errors.Email?.type === 'minLength' && (<div className="invalid-feedback">email must be atleast more than 4 characters</div>)} */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}
