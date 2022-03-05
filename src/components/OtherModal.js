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

export default function OtherModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className='skillsButton'>Other</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Other Skills & Interests:
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Business
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>e-commerce</li>
              <li>Branding</li>
              <li>Marketing</li>
              <li>Team Building</li>
              <li>Hiring</li>
              <li>Training</li>
              <li>B2B</li>
              <li>Startups</li>
              <li>Compliance</li>
              <li>Subscription</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Food
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>Menu Planning</li>
              <li>Kitchen Mgmt</li>
              <li>Catering</li>
              <li>Butchery</li>
              <li>Seasonality</li>
              <li>Local Sourcing</li>
              <li>Sustainablity</li>
              <li>Consulting</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
          Dogs
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>Rescue</li>
              <li>Socialization</li>
              <li>Nutrition</li>
              <li>Nutrigenomics</li>
              <li>Immunology</li>
              <li>Meal Planning</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
          Outdoors
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>Fly Fishing</li>
              <li>Fly Tying</li>
              <li>Archery</li>
              <li>Search & Rescue</li>
              <li>Survivalist</li>
              <li>Primitive Skills</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <button className='closeButton' onClick={handleClose}><FaTimesCircle /></button>
        </Box>
      </Modal>
    </div>
  );
}