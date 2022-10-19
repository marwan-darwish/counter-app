import React,{useRef} from 'react'
import Select from 'react-select'
import { useForm,Controller } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    const { register,trigger, handleSubmit,formState: { errors, isValid },watch,control } = useForm({mode:"all"});
    const onSubmit = (data) => console.log(data);
console.log(errors);
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
  
<div className="d-flex justify-content-center ">

<Form onSubmit={handleSubmit(onSubmit)}>
<Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text"  {...register('fName',{required:true})} />
      {errors.fName?.type==="required"&&<p className="text-danger">Name required</p> }
     
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text"  {...register('lName',{required:true})} />
      {errors.lName?.type==="required"&&<p className="text-danger">Name required</p> }
     
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  {...register('email',{required:true})} />
      {errors.email?.type==="required"&&<p className="text-danger">email required</p> }
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" onClick={async()=> {const result=await trigger("confirmpassword.validate")}} {...register("password",{required:true,pattern:{value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,        message: "invalid Password"}})} />
        {errors.password?.type==="required"&&<p className="text-danger">password required</p> }
        {errors.password?.type==="pattern"&&<p className="text-danger">password not valid</p> }

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("confirmpassword",{required:true,validate:value=>value===watch("password")||"passwords dont match" })} />
        {errors.confirmpassword?.type==="required"&&<p className="text-danger">password required</p> }
        {errors.confirmpassword?.type==="validate"&&<p className="text-danger">{errors.confirmpassword.message}</p> }

      </Form.Group>

      <Controller
        name="select"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={options}
        />}
        rules={{ required: true }}

      />
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree to conditions" {...register("check",{required:true})} />
        {errors.check?.required&& <p>PLease agree to the terms and condtiosn</p>}
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isValid}>
        Submit
      </Button>
    </Form>
</div>

    )
}

export default Register