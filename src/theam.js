import { createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersContext, MuiPickersUtilsProvider } from '@material-ui/pickers';

const theam = createMuiTheme({
  palette: {
    primary: {
      light: '#ff5c4c',
      main: '#dc1c22',
      dark: '#a20000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6d6262',
      main: '#423838',
      dark: '#1c1212',
      contrastText: '#a8abae',
    },
    background: {
      default: "#c1c1c1"
    }
  },
  overrides: {
    // MuiPickersToolbar: {
    //   // toolbar: {
    //   //   backgroundColor: 'red',
    //   // },
    // },
    MuiPaper:{
      root:{
        backgroundColor: '#f2eae7'
      }
    }
  }
});

export default theam;