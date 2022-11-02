import React from 'react'
import bgimg from '../img/img1.jpg';
import {useForm} from 'react-hook-form';


export default function Form() {

    const { register,handleSubmit } = useForm()
    const onSubmit = data => console.log(data);
  return (
    <section>
        <div className="register">
            <div className="col-1">
            <h2>Registration Form</h2>
            <span>Please Register Here</span>

            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("Username")} placeholder='Username' />
                <input type="text" {...register("Password")}placeholder='Password' />
                <input type="text" {...register("Confirm Password")}placeholder='Confirm Password'/>
                <input type="text" {...register("Mobile Number")}placeholder='Mobile Number'/>

                <button className='btn'>Register</button>          
            </form>
            
            </div>
            <div className="col-2">
                <img src={bgimg} alt="" />
            </div>
        </div>
    </section>
  )
}
