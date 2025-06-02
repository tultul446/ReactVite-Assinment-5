import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GoMoveToBottom } from "react-icons/go";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #0001',
  boxShadow: 24,
  p: 2,
};

 const BasicModal =() =>{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}> BellaItalia</Button> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > 
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <img src="./menu1.png" alt="" />
          </Typography>
          <Typography id="modal-modal-description"  sx={{ mt: 2, textSize: '18px', color: '#000' }}>
            <p className='ml-16 text-xl font-bold'>Menu Bella Italia</p>
           
          </Typography>
          <Typography >
            <button className='flex w-60 gap-2 h-9 mt-2 border p-2 rounded-full mx-auto text-blue-500'><GoMoveToBottom className='mt-1 ml-3 '/>Dowload this menu</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default BasicModal;