import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button,  Typography, Container } from '@material-ui/core';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}


function AddUser(){
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

    return (
        <Container maxWidth="md">
            <FormGroup >
                <Typography variant="h4">Add User</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
                </FormControl>
                <FormControl>
                    <Button variant="contained" color="primary">Add User</Button>
                </FormControl>
            </FormGroup>
        </Container>
    )
}
export default AddUser;