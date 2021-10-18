import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
            <Row className="text-start">
                <Col></Col>
                <Col xs={5}>
                    <form className="Appoinments-form" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />
                        <input placeholder="Problem You Facing" defaultValue="" {...register("Problem Details")} />
                        <input placeholder="Date & Time" defaultValue="" {...register("Date")} />
                        <input type="submit" defaultValue="" {...register("Get Appointment")}/>
                    </form>       
                </Col>
                <Col></Col>
            </Row>
        </Container>    









            
        </div>
    );
};

export default Appoinments;