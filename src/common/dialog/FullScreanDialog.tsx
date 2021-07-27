import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';


export interface DialogProps {
 open: boolean
 close: () => void 
}

export const FullScreanDialog = (props: DialogProps) => {

  return (
    <div>
      <Dialog
        open={props.open ? true : false}
        onClose={props.close}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            aaaaaa
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={props.close} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}