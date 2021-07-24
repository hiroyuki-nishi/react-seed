import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

export const Home = () => {
  const history = useHistory();

  return (
    <>
    <ArrowBackIcon onClick={() => history.push("/")}/>
    <h1>Home</h1>
    </>
  );
}