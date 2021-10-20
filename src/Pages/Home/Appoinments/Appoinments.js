import React from 'react';
import { Container} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Appoinments.css';


const Appoinments = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <Container>
                <h2 className="my-5">Please Fillup the following Form for Appoinment</h2>
                <p>We have professional doctors panel to solve any minor or critical cases. Please feel free to call or contact us.</p>
                <h3>We are open : <br/> sat-thu: 11AM to 10PM </h3>
                    <div className="container overflow-hidden">
                        <div className="row gx-5">
                            <div className="col">
                                <div className="p-3 border bg-light">
                                    <form className="Appoinments-form" onSubmit={handleSubmit(onSubmit)}>
                                        <input defaultValue={user.displayName} {...register("name")} />
                                        <input defaultValue={user.email} {...register("email", { required: true })} />
                                        {errors.email && <span className="error">This field is required</span>}
                                        <input placeholder="phone number" defaultValue="" {...register("phone")} />
                                        <input placeholder="Problem You Facing" defaultValue="" {...register("Problem Details")} />
                                        <input placeholder="Date & Time" defaultValue="" {...register("Date")} />
                                        <input type="submit" efaultValue="Appointment"/>
                                    </form>    
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>      
        </div>
    );
};

export default Appoinments;