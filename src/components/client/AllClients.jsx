import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getAllClients } from '../../services/client-api';

function AllUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllClients().then((response) => setUsers(response.data))
    },[]);


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
                    {users.map((user) =>(
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.first_name}</TableCell>
                            <TableCell>{user.last_name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell></TableCell>    
                        </TableRow> 
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default AllUsers;