import { Container, Grid, IconButton, Toolbar } from "@material-ui/core";
import GridOnIcon from '@material-ui/icons/GridOn';
import { makeStyles } from "@material-ui/core/styles";

import { GenericTemplate } from "../common/template/GenerateTemplate";

import { DeviceCard } from "./DeviceCard";

const useStyles = makeStyles({
  toolbar: {
    minHeight: "36px",
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
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
      {/* TODO 部品切り出し */}
      <Toolbar className={classes.toolbar}>
        <section className={classes.rightToolbar}>
          <IconButton color="inherit">
            <GridOnIcon></GridOnIcon>
          </IconButton>
        </section>
      </Toolbar>
      </>
     }>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {deviceCards}
        </Grid>
      </Container>
    </GenericTemplate>
  );
};
