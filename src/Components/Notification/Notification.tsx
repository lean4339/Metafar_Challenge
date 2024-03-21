import { Snackbar, IconButton }from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar({open, handleClose, text}: {open: boolean, handleClose: (data: any) => void, text: string}) {

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={text}
        action={<IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>}
      />
    </>
  );
}
