import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../theam';
import { makeStyles } from '@material-ui/core/styles';

import ScopedCssBaseline  from '@material-ui/core/ScopedCssBaseline';
import Container from '@material-ui/core/Container';

import LIcon from '../../assets/logo-icon.svg'

const useStyles = makeStyles({
  container: {
    paddingTop: '50px'
  },
});

export default (props) => {
  const styles = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline >
        <Container className={styles.container}>
          <div className="form-wrapper">
            <div className="logo">
              <div className="logo-img">
                <LIcon />
              </div>
              <div className="logo-label">
                <div className="labelText labelText1">CREDIT</div>
                <div className="labelText labelText2">INFO</div>
                <div className="department1 animatedUA">Україна</div>
              </div>

            </div>
            <div className="form-body">
              <Container className="textMain">
                {props.children}
              </Container>
            </div>
          </div>
        </Container>
      </ScopedCssBaseline>
    </ThemeProvider>
  )
}