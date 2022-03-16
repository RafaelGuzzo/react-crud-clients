import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getAllClients, deleteClient as deleteClientApi } from '../../services/client-api';
import { Link } from 'react-router-dom';

function AllClients() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        getAllClients().then((response) => setClients(response.data))
    },[]);

    const deleteClient = (id) => {
        deleteClientApi(id);
        let clientsFiltered = clients.filter((client) => { return client.id != id});
        setClients(clientsFiltered);

        /*
            navigate('/all', {replace: true});
        */
    }

    return(
        <Container maxWidth="md">
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Sobrenome</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell>Acão</TableCell>
                </TableRow> 
                </TableHead>
                <TableBody>
                    {clients.map((client) =>(
                        <TableRow key={client.id}>
                            <TableCell>{client.id}</TableCell>
                            <TableCell>{client.first_name}</TableCell>
                            <TableCell>{client.last_name}</TableCell>
                            <TableCell>{client.email}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${client.id}`}>Edit</Button>
                                <Button color="secondary" variant="contained" onClick={() => deleteClient(client.id)}>Delete</Button> 
                            </TableCell>   
                        </TableRow> 
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default AllClients;