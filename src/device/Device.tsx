import { Grid, IconButton } from "@material-ui/core";
import CodeIcon from '@material-ui/icons/Code';
import { useState } from "react";

import { FullScreanDialog } from "../common/dialog/FullScreanDialog";
import { GenericTemplate } from "../common/template/GenerateTemplate";
import { DeviceCard } from "./DeviceCard";
import { DeviceGrid } from "./DeviceGrid";


export const Device = () => {
  const [showCards, setShowCards] = useState(true);
  const [open, setOpenDialog] = useState(false);
  const onOpenDialog = () => setOpenDialog(true)
  const onCloseDialog = () => setOpenDialog(false)
  const deviceCards = [...Array(6)].map(_ =>
    <Grid item xs={4}><DeviceCard onMediaClick={onOpenDialog} /></Grid>)

  return (
    <GenericTemplate subHeader={
      <>
        {/* TODO: 部品化する */}
        <IconButton color="inherit" onClick={() => setShowCards(!showCards)}>
          <CodeIcon />
        </IconButton>
      </>
    }>
      {showCards ? deviceCards : <DeviceGrid />}
      <FullScreanDialog open={open} close={onCloseDialog} />
    </GenericTemplate>
  );
};
