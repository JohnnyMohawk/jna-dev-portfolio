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

export default function SkillsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className='skillsButton'>Tech Skills</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Technical Skills:
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Languages
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>EJS</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Frameworks
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>React</li>
              <li>React Native</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>Hugo</li>
              <li>Express</li>
              <li>AWS Amplify</li>
              <li>Mongoose</li>
              <li>Django</li>
              <li>jQuery</li>
              <li>Material UI</li>
              <li>Bootstrap</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Databases
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>GraphQL</li>
              <li>MongoDB</li>
              <li>DynamoDB</li>
              <li>AWS S3</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Tools
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>Git</li>
              <li>GitHub</li>
              <li>Bitbucket</li>
              <li>Jira</li>
              <li>Strapi</li>
              <li>Heroku</li>
              <li>Netlify</li>
              <li>AWS</li>
              <li>LucidChart</li>
              <li>Whimsical</li>
              <li>Figma</li>
              <li>Cypress</li>
              <li>Jasmine</li>
              <li>WordPress</li>
              <li>MailChimp</li>
              <li>Shopify</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <Typography id="modal-subtitle" variant="h6" component="h2">
            Blockchain
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <ul className='modalUl'>
              <li>Solidity</li>
              <li>OpenZeppelin</li>
              <li>Hardhat</li>
              <li>Ethers.js</li>
              <li>Web3.js</li>
              <li>ERC-20</li>
              <li>ERC-721</li>
              <li>ERC-1155</li>
            </ul>
          </Typography>
          <div id='popupBreak'></div>
          <button className='closeButton' onClick={handleClose}><FaTimesCircle /></button>
        </Box>
      </Modal>
    </div>
  );
}