import { Grid, IconButton } from "@material-ui/core";
import CodeIcon from '@material-ui/icons/Code';
import { useState } from "react";

import { FullScreanDialog } from "../common/dialog/FullScreanDialog";
import { GenericTemplate } from "../common/template/GenerateTemplate";
import { DeviceCard } from "./DeviceCard";
import { DeviceGrid } from "./DeviceGrid";


export const Device = () => {
  const [hidden, setHidden] = useState(true);
  const [open, setOpenDialog] = useState(false);
  const deviceCards = [...Array(6)].map(_ => {
    return (
      <Grid item xs={4}><DeviceCard /></Grid>
    )
  })
  const onOpenDialog = () => setOpenDialog(true)
  const onCloseDialog = () => setOpenDialog(false)

  return (
    <GenericTemplate subHeader={
      <>
        {/* TODO: 部品化する */}
        <IconButton color="inherit" onClick={() => setHidden(!hidden)}>
          <CodeIcon />
        </IconButton>
      </>
     }>
     { hidden ? deviceCards : <DeviceGrid /> }
     <button onClick={onOpenDialog}></button>
      <FullScreanDialog open={open} close={onCloseDialog}/>
    </GenericTemplate>
  );
};
