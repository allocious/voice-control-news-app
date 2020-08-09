import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  container: {
    padding: '0 5%',
    width: '100%',
    margin: 0
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'Center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white'
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  strong: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '0.865rem',
    fontWeight: 'normal'
  },
  h6: {
    fontFamily: "'Comfortaa', cursive",
    fontSize: '1.1rem'
  }
});
