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

export default function ArtDesignModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className='skillsButton'>Art/Design</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Art & Design Skills:
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Painting
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>Oil</li>
              <li>Acrylic</li>
              <li>Aerosol</li>
              <li>Mural</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Printmaking
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>Linocut</li>
              <li>Monoprint</li>
              <li>Etching</li>
              <li>Silkscreen</li>
              <li>Lithography</li>
              <li>Engraving</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Sculpture
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>Ceramic</li>
              <li>Carving</li>
              <li>Metal Casting</li>
              <li>Resin Casting</li>
              <li>Assemblage</li>
              <li>Installation</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Digital
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Procreate</li>
              <li>RoughAnimator</li>
              <li>Final Cut Pro</li>
              <li>VS Code</li>
              <li>Canvas-sketch</li>
              <li>Ableton Live</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Woodworking
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>Shaping & Molding</li>
              <li>Scrollwork</li>
              <li>Lathe Turning</li>
              <li>Lamination</li>
              <li>Veneering</li>
              <li>Woodbending</li>
              <li>Wood Carving</li>
              <li>Inlay</li>
              <li>Dovetailing</li>
              <li>Structural</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <button className='closeButton' onClick={handleClose}><FaTimesCircle /></button>
        </Box>
      </Modal>
    </div>
  );
}