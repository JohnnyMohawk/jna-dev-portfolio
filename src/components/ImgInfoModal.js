import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ImgInfoPopover({info}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" className='imgInfoButton' onClick={handleClick}>
        Info
      </Button>
      <Popover
        sx={{ marginTop: '-140px'}}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
      >
        <Typography sx={{ p: 1, lineHeight: '10px', fontFamily: 'Josefin Sans', padding: '20px 20px 15px 20px', maxWidth: '250px'}}>{info.title}</Typography>
        <Typography sx={{ p: 1, lineHeight: '16px', fontFamily: 'Open Sans Condensed', padding: '0 20px', maxWidth: '250px'}}>{info.medium}</Typography>
        <Typography sx={{ p: 1, lineHeight: '18px', maxWidth: '250px', fontFamily: 'Open Sans Condensed', fontSize: '16px', padding: '10px 20px'}}>{info.description}</Typography>
      </Popover>
    </div>
  );
}