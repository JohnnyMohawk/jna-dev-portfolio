import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaTimesCircle } from 'react-icons/fa'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 375,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function EducationModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className='skillsButton'>Education</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Education:
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Generally Assembly
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            
            <p className='eduDeets'>Software Engineering Immersive</p>
            <p className='eduDeets'>Certificate of Completion</p>
            <p className='eduDeets'>Chicago, IL, June 2021 - August 2021</p>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Roosevelt University
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <p className='eduDeets'>Bachelor of Professional Studies,</p>
            <p className='eduDeets'>Individualized Major:</p>
            <p className='eduDeets'>Economics and Hospitality Management</p>
            <p className='eduDeets'>Graduated with honors. Benjamin Franklin Honors Scociety</p>
            <p className='eduDeets'>Chicago, IL, 2006 - 2009</p>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            The Cooking & Hospitality Institute
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <p className='eduDeets'>Associate in Applied Science:</p>
            <p className='eduDeets'>Culinary Arts</p>
            <p className='eduDeets'>Chicago, IL, 2002 - 2004</p>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Milwaukee Institute of Art & Design
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <p className='eduDeets'>Coursework in Sculture, Printmaking, 2D and 3D design</p>
            <p className='eduDeets'>Fine Arts</p>
            <p className='eduDeets'>Milwaukee, WI, 2001 - 2002</p>
          </Typography>
          <div id='popupBreak'></div>
          
          <button className='closeButton' onClick={handleClose}><FaTimesCircle /></button>
        </Box>
      </Modal>
    </div>
  );
}