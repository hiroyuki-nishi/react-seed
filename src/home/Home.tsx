import { Grid } from "@material-ui/core";

import { GenericTemplate } from "../common/template/GenerateTemplate";
import { DeviceCard } from "./DeviceCard";

export const Home = () => {
  const deviceCards = [...Array(6)].map(_ => {
    return (
      <Grid item xs={4}><DeviceCard /></Grid>
    )
  })
  return (
    <GenericTemplate>
      <Grid container spacing={2}>
        {deviceCards}
      </Grid>
    </GenericTemplate>
  );
};
