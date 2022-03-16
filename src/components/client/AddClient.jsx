import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button,  Typography, Container } from '@material-ui/core';
import { addClient as addClientApi, getClientById, updateClient } from '../../services/client-api';
import { useNavigate, useParams } from 'react-router-dom';

const initialValue = {
    id: null,
    first_name: '',
    last_name: '',
    email: ''
}


function AddClient(){
    const [client, setClient] = useState(initialValue);
    const { first_name, last_name, email } = client;
    const navigate = useNavigate();
    const { id } = useParams();
    const editing = id != null ? true : false;

    useEffect(() => {
        if(editing){
            getClientById(id).then((response) => setClient(response.data));
        }
    },[]);

    const onValueChange = (event) => {
        setClient({...client, [event.target.name]: event.target.value})
    }

    const submitClient = () => {

        if(editing){
            updateClient(id, client);
        }else{
            addClientApi(client);
        }
       
        navigate('/all', {replace: true});
    }

    return (
        <Container maxWidth="sm">
            <FormGroup >
                <Typography variant="h4">Add User</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='first_name' value={first_name} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='last_name' value={last_name} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
                </FormControl>
                <FormControl>
                    <Button variant="contained" color="primary" onClick={() => submitClient()}>Add User</Button>
                </FormControl>
            </FormGroup>
        </Container>
    )
}
export default AddClient;