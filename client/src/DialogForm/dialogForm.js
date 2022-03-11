import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios';

export default function FormDialog(props) {

  const [editValues, setEditValues] = useState({
    id: props.id,
    nome: props.nome,
    idade: props.idade,
    email: props.email,
    cargo: props.cargo,
    pais: props.pais
  });

  const handleChange = value => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const updateFuncionarios = () => {
    Axios.put('http://localhost:3001/updateFuncionarios',{
      id: editValues.id,
      nome: editValues.nome,
      idade: editValues.idade,
      email: editValues.email,
      cargo: editValues.cargo,
      pais: editValues.pais
    })
    handleClose();
  }

  const deletarFuncionarios = () => {
    Axios.delete(`http://localhost:3001/deletarFuncionarios/${editValues.id}`)
    handleClose();

  }

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      key={props.id}
    >
      <DialogTitle>Editar</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="nome"
          label="Nome"
          defaultValue={props.nome}
          onChange={handleChange}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="idade"
          label="Idade"
          defaultValue={props.idade}
          onChange={handleChange}
          type="number"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email"
          defaultValue={props.email}
          onChange={handleChange}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="cargo"
          label="Cargo"
          defaultValue={props.cargo}
          onChange={handleChange}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="pais"
          label="País"
          defaultValue={props.pais}
          onChange={handleChange}
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={updateFuncionarios}>Salvar</Button>
        <Button onClick={deletarFuncionarios}>Excluir</Button>
      </DialogActions>
    </Dialog>
  );
}
