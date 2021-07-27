import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { MaterialButton } from '../common/button/MaterialButton';

export interface DeviceCardProps {
  onMediaClick: () => void
}

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

export const DeviceCard = (props: DeviceCardProps) => {
  const classes = useStyles();

  return (
    <Card variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          onClick={props.onMediaClick}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            description
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <MaterialButton text="レンタル" color="primary" onClick={() => console.log("click")}></MaterialButton>
      </CardActions>
    </Card>
  );
}