import { Grid, IconButton } from "@material-ui/core";
import CodeIcon from '@material-ui/icons/Code';
import { useState } from "react";

import { GenericTemplate } from "../common/template/GenerateTemplate";
import { DeviceCard } from "./DeviceCard";
import { DeviceGrid } from "./DeviceGrid";


export const Device = () => {
  const [hidden, setHidden] = useState(true);
  const deviceCards = [...Array(6)].map(_ => {
    return (
      <Grid item xs={4}><DeviceCard /></Grid>
    )
  })
  return (
    <GenericTemplate subHeader={
      <>
        <IconButton color="inherit" onClick={() => setHidden(!hidden)}>
          <CodeIcon />
        </IconButton>
      </>
     }>
     { hidden ? deviceCards : <DeviceGrid /> }
    </GenericTemplate>
  );
};
