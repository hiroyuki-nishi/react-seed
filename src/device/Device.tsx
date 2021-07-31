import { Grid, IconButton } from "@material-ui/core";
import CodeIcon from '@material-ui/icons/Code';
import { useState } from "react";

import { MaterialButton } from "../common/button/MaterialButton";
import { FullScreanDialog } from "../common/dialog/FullScreanDialog";
import { MaterialInput } from "../common/input/MaterialInput";
import { MaterialSelect } from "../common/input/MaterialSelect";
import { GenericTemplate } from "../common/template/GenerateTemplate";
import { DeviceCard } from "./DeviceCard";
import { MaterialGrid } from "./DeviceGrid";
import { DeviceModel } from "./DeviceModel";


export const Device = () => {
  const [showCards, setShowCards] = useState(true);
  const [open, setOpenDialog] = useState(false);
  const [device, setDevice] = useState(new DeviceModel(""));

  const FORM_KEYS = {
    NAME: 'name',
  }
  const deviceCards = [...Array(300)].map((_, i) => new DeviceModel("ITEM " + i.toString())).map(device =>
    <Grid item xs={4}><DeviceCard device={device} onMediaClick={(device: DeviceModel) => onOpenDialog(device)} /></Grid>)

  const onOpenDialog = (device: DeviceModel) => {
    setDevice(device)
    setOpenDialog(true)
  }
  const onCloseDialog = () => setOpenDialog(false)
  const onRental= () => {
    console.info("レンタル！")
  }

  const formChange = (formName: string) => {
    switch (formName) {
      case FORM_KEYS.NAME:
        console.log("NAME")
        break;
      default:
        console.log('key not found');
    }
  };

  return (
    <GenericTemplate
      subHeaderLeft={
        <MaterialSelect />
      }
      subHeader={
        <>
          {/* TODO: 部品化する */}
          <IconButton color="inherit" onClick={() => setShowCards(!showCards)}>
            <CodeIcon />
          </IconButton>
        </>
      }>
      {showCards ? deviceCards : <MaterialGrid onRowClick={() => onOpenDialog(new DeviceModel(""))}/>}
      <FullScreanDialog
        content={
          <MaterialInput
            formName={FORM_KEYS.NAME}
            fullWidth={true}
            inputProps={{ maxLength: 18 }}
            label="名前"
            variant="standard"
            changeValue={formChange}
          />
        }
        actions={
          <MaterialButton text="レンタル" color="primary" fullWidth={true} variant="contained" onClick={onRental} />
        }
        open={open}
        title={device.title}
        close={onCloseDialog} />
    </GenericTemplate>
  );
};
