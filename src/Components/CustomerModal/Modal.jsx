import * as React from 'react';
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import ModalContext from '../../Context/ModalContext'
import './Modal.css'
import axios from 'axios';
import UserContext from '../../Context/UserContext/UserContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderColor: "darkslategrey"
};

export default function BasicModal() {
  const {users, setUsers} = useContext(UserContext);
  const context = useContext(ModalContext);
  const handleClose = () => {
    context.setShowModal(false);
    setName('');
    setEmail('');
    setGst('');
    setInvoice('');
    setInvoiceDue('');
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('active')
  const [gst, setGst] = useState('')
  const [invoice, setInvoice] = useState('')
  const [invoiceDue, setInvoiceDue] = useState('')

    const handleSubmit = async () => {
        if(name !== '' && email !== '' && gst != '' && invoice !== '' && invoiceDue !== ''){
            if(/\S+@\S+\.\S+/.test(email)){
              let newData = await axios({
                method: 'post',
                url: 'https://dummyjson.com/users/add',
                data: {
                    firstName: name,
                    email: email,
                    ein: gst,
                    domain: status,
                    age: invoice,
                    height: invoiceDue
                }
              });
              users.unshift(newData.data);
              setUsers(users);
              console.log(newData);
              context.setShowModal(false);
              setName('');
              setEmail('');
              setGst('');
              setInvoice('');
              setInvoiceDue('');
            }else{
                alert('please enter correct email')
            }
        }else{
            alert('please fill all the fields');
        }
    }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={context.showModal}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal">
          <Typography id="modal-modal-title" style={{textAlign:"center"}} variant="h5">
            Add  Customer
          </Typography>
          <div className='modal-input'>
            <span>Name:</span>
            <TextField required style={{padding:'0'}} size='small' id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e)=>{setName(e.target.value)}} />
          </div>
          <div className='modal-input'>
            <span>Email:</span>
            <TextField required size='small' id="outlined-basic" label="abc@example.com" variant="outlined" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className='modal-input'>
            <span>GST Number:</span>
            <TextField required size='small' id="outlined-basic" label="" variant="outlined" value={gst} onChange={(e)=>{setGst(e.target.value)}}/>
          </div>
          <div className='modal-input'>
            <span>Status:</span>
            <select name="active" id="" value={status} onChange={(e)=>{setStatus(e.target.value)}}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className='modal-input'>
            <span>Total Invoices:</span>
            <TextField required size='small' id="outlined-basic" label="" variant="outlined" value={invoice} onChange={(e)=>{setInvoice(e.target.value)}} />
          </div>
          <div className='modal-input'>
            <span>Total Invoices Due:</span>
            <TextField required size='small' id="outlined-basic" label="" variant="outlined" value={invoiceDue} onChange={(e)=>{setInvoiceDue(e.target.value)}} />
          </div>
        <div className='modal-bottom'>
            <Button variant="outlined" color="error" onClick={handleClose}>Close</Button>
            <Button variant="outlined" color="success" onClick={handleSubmit}>Add</Button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}