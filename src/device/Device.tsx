import { Grid, IconButton, Toolbar } from "@material-ui/core";
import GridOnIcon from '@material-ui/icons/GridOn';
import { makeStyles } from "@material-ui/core/styles";

import { GenericTemplate } from "../common/template/GenerateTemplate";

import { DeviceCard } from "./DeviceCard";

const useStyles = makeStyles({
  toolbar: {
    minHeight: `36px`, // minHeight を再設定する
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -18
  }
})

export const Device = () => {
  const classes = useStyles()
  const deviceCards = [...Array(6)].map(_ => {
    return (
      <Grid item xs={4}><DeviceCard /></Grid>
    )
  })
  return (
    <GenericTemplate subHeader={
      <>
      <Toolbar className={classes.toolbar}>
        <section className={classes.rightToolbar}>
          <IconButton color="inherit">
            <GridOnIcon></GridOnIcon>
          </IconButton>
        </section>
      </Toolbar>
      </>
     }>
      <Grid container spacing={2}>
        {deviceCards}
      </Grid>
    </GenericTemplate>
  );
};
