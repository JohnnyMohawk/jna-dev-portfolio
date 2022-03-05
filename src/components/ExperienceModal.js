import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaTimesCircle } from 'react-icons/fa'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

export default function ExperienceModal() {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Button onClick={handleOpen} className='skillsButton'>Experience</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Experience:
        </Typography>
        <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '53%', flexShrink: 0, fontSize: '16px', fontFamily: 'Josefin Sans' }} className="jobTitle">
              Full-Stack Dev
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontFamily: 'Open Sans Condensed', fontSize: '20px' }}>Third Act Digital</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: 'Open Sans Condensed', fontSize: '20px', lineHeight: '22px', marginTop: '-20px' }}>
              <br/>
              <p>Nov 2021 - Present, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>New York, NY</em></p>
              <ul className='jobDetails'>
                <li>Analyze user needs and develop software solutions</li>
                <li>Work with project team to meet specifications</li>
                <li>Make upgrades to optimize operational efficiency</li>
                <li>Collaborate with team to design & optimize code</li>
                <li>Document all programming tasks and procedures</li>
                <li>Perform routine software maintenance</li>
                <li>Write automated tests for all code produced</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '53%', flexShrink: 0, fontSize: '16px', fontFamily: 'Josefin Sans' }} className="jobTitle">Engineering Fellow</Typography>
            <Typography sx={{ color: 'text.secondary', fontFamily: 'Open Sans Condensed', fontSize: '20px' }}>
              General Assembly
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: 'Open Sans Condensed', fontSize: '20px', lineHeight: '22px', marginTop: '-20px' }}>
              <p>Jun 2021 - Aug 2021, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Chicago, IL</em></p>
              <ul className='jobDetails'>
                <li>Trained in modern programming languages</li>
                <li>Built projects using React.js, Express, JavaScript, Python, Django, Node.js and Git version control</li>
                <li>Learned the skill of how to learn new tech rapidly</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '53%', flexShrink: 0, fontSize: '16px', fontFamily: 'Josefin Sans' }} className="jobTitle">
              Founder & CEO
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontFamily: 'Open Sans Condensed', fontSize: '20px'  }}>
              Chestnut & Grace
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: 'Open Sans Condensed', fontSize: '20px', lineHeight: '22px', marginTop: '-20px' }}>
              <p>Sep 2014 - Aug 2020, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Chicago, IL</em></p>
              <ul className='jobDetails'>
                <li>Built all elements of a brand from the ground up</li>
                <li>Created and maintained an e-commerce website to grow a subscription-based business model</li>
                <li>Developed 48-state cold-chain distribution system</li>
                <li>Built-out and oversaw a licensed commercial production facility complete with HACCP protocols</li>
                <li>Established a line of 28 dog food, treat and nutritional products</li>
                <li>Responsible for all aspects of PR, including issuing press releases and making news and media appearances on national and local outlets <br/> (NBC, ABC, FOX, WGN , WLS, Chicago Magazine)</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '53%', flexShrink: 0, fontSize: '16px', fontFamily: 'Josefin Sans' }} className="jobTitle">Sous Chef</Typography>
            <Typography sx={{ color: 'text.secondary', fontFamily: 'Open Sans Condensed', fontSize: '20px'  }}>
              GT Fish & Oyster
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: 'Open Sans Condensed', fontSize: '20px', lineHeight: '22px', marginTop: '-20px' }}>
              <p>Feb 2014 - Jan 2016, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Chicago, IL</em></p>
              <ul className='jobDetails'>
                <li>Sourced and ordered all fresh and live seafood, based on seasonality and sustainability</li>
                <li>Managed a prep team of 12 people to fulfill all food prep requirements for the restaurant, raw bar, and high-volume catering operation</li>
                <li>Wrote all raw bar menus and trained culinary team on sourcing and sustainability of all fish purchased</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '53%', flexShrink: 0, fontSize: '16px', fontFamily: 'Josefin Sans' }} className="jobTitle">Commis Chef</Typography>
            <Typography sx={{ color: 'text.secondary', fontFamily: 'Open Sans Condensed', fontSize: '20px'  }}>
              Alinea
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: 'Open Sans Condensed', fontSize: '20px', lineHeight: '22px', marginTop: '-20px' }}>
              <p>Dec 2013 - Feb 2014, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Chicago, IL</em></p>
              <ul className='jobDetails'>
                <li>Worked under Chef Grant Achatz in his Three Michelin Star kitchen.</li>
                <li>Learned and experimented with the concepts of Molecular Gastromy</li>
                <li>Made floating food on a nightly basis!</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '53%', flexShrink: 0, fontSize: '16px', fontFamily: 'Josefin Sans' }} className="jobTitle">Executive Chef</Typography>
            <Typography sx={{ color: 'text.secondary', fontFamily: 'Open Sans Condensed', fontSize: '20px'  }}>
              Gaslight Bar & Grille
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: 'Open Sans Condensed', fontSize: '20px', lineHeight: '22px', marginTop: '-20px' }}>
              <p>Aug 2010 - Dec 2013, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Chicago, IL</em></p>
              <ul className='jobDetails'>
                <li>Worked under Chef Grant Achatz in his Three Michelin Star kitchen.</li>
                <li>Learned and experimented with the concepts of Molecular Gastromy</li>
                <li>Made floating food on a nightly basis!</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '43%', flexShrink: 0, fontSize: '16px', fontFamily: 'Josefin Sans' }} className="jobTitle">Consultant</Typography>
            <Typography sx={{ color: 'text.secondary', fontFamily: 'Open Sans Condensed', fontSize: '20px'  }}>
              Chicago's Dog House
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: 'Open Sans Condensed', fontSize: '20px', lineHeight: '22px', marginTop: '-20px' }}>
              <p>Apr 2009 - Nov 2009, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Chicago, IL</em></p>
              <ul className='jobDetails'>
                <li>Contracted to help design and build a Quick Service Restaurant concept</li>
                <li>Designed a high profit, fast turn around menu to maximize business profitability</li>
                <li>Developed and trained owners and core staff in standard operationd procdures</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '53%', flexShrink: 0, fontSize: '16px', fontFamily: 'Josefin Sans' }} className="jobTitle">Sous Chef</Typography>
            <Typography sx={{ color: 'text.secondary', fontFamily: 'Open Sans Condensed', fontSize: '20px'  }}>
              Extra Virgin
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: 'Open Sans Condensed', fontSize: '20px', lineHeight: '22px', marginTop: '-20px' }}>
              <p>Jan 2006 - Jun 2007, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Chicago, IL</em></p>
              <ul className='jobDetails'>
                <li>Worked with executive and corporated chef to design menu for a new shared plates upscale dining concept for Restaurants America Group</li>
                <li>Trained and managed all line cooks, prep staff and dishwashers</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '53%', flexShrink: 0, fontSize: '16px', fontFamily: 'Josefin Sans' }} className="jobTitle">Lead Line Chef</Typography>
            <Typography sx={{ color: 'text.secondary', fontFamily: 'Open Sans Condensed', fontSize: '20px'  }}>
              La Valencia Hotel
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: 'Open Sans Condensed', fontSize: '20px', lineHeight: '22px', marginTop: '-20px' }}>
              <p>Jan 2005 - Jan 2006, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>La Jolla, CA</em></p>
              <ul className='jobDetails'>
                <li>Operated four restaurants, a tapas bar, and 24-hour room service out of one kitchen</li>
                <li>Controlled flow and timing of cooks on the line to meet needs of the expeditor, servers and guests</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '53%', flexShrink: 0, fontSize: '16px', fontFamily: 'Josefin Sans' }} className="jobTitle">Sous Chef</Typography>
            <Typography sx={{ color: 'text.secondary', fontFamily: 'Open Sans Condensed', fontSize: '20px'  }}>
              Le Petit Paris
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: 'Open Sans Condensed', fontSize: '20px', lineHeight: '22px', marginTop: '-20px' }}>
              <p>Jan 2003 - Dec 2005, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Chicago, IL</em></p>
              <ul className='jobDetails'>
                <li>Worked with owmers and executive chef to modernize a dated menu to attract new clientelle while staying true to the original concept</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '53%', flexShrink: 0, fontSize: '16px', fontFamily: 'Josefin Sans' }} className="jobTitle">Line Cook</Typography>
            <Typography sx={{ color: 'text.secondary', fontFamily: 'Open Sans Condensed', fontSize: '20px'  }}>
              Bangkok Inn
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: 'Open Sans Condensed', fontSize: '20px', lineHeight: '22px', marginTop: '-20px' }}>
              <p>Feb 2001 - May 2002, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Chicago, IL</em></p>
              <ul className='jobDetails'>
                <li>My best friend convinced me to work with him on the line at his family's Thai restaurant...<br/>Little did I know this would lay the ground work for many years of my career to come</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0, fontSize: '16px', fontFamily: 'Josefin Sans' }} className="jobTitle">Actor</Typography>
            <Typography sx={{ color: 'text.secondary', fontFamily: 'Open Sans Condensed', fontSize: '20px' }}>
              The Young and the Restless
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: 'Open Sans Condensed', fontSize: '20px', lineHeight: '22px', marginTop: '-20px' }}>
              <p>Jan 1991 - Nov 1994, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Los Angeles, CA</em></p>
              <ul className='jobDetails'>
                <li>Played the role of young Nicholas Newman on the #1 Daytime drama</li>
                <li>Outstanding Child Actor Nomination<br/>Soap Opera Digest Awards · May 1994</li>
                <li>Best Youth Actor Nomination<br/>Young Artists Awards · Feb 1994</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
          <button className='closeButton' onClick={handleClose}><FaTimesCircle /></button>
        </Box>
      </Modal>
    </div>
  );
}