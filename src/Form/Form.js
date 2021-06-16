import React, { useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography  from '@material-ui/core/Typography';
import Button  from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import DateFnsUtils from '@date-io/date-fns';
import uaLocale from "date-fns/locale/uk";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles({
  spacer: {
    marginRight: '10px',
    marginBottom: '10px'
  },
  spaceRight:{
    marginRight: '10px',
  },
  spaceTop:{
    marginTop: '10px',
  },
  
});

export default (props) => {
  const styles = useStyles();

  const date = new Date();
  date.setDate(date.getDate() + 14)
  const [selectedDate, setSelectedDate] = React.useState(date);

  const myInput = useRef();

  return (
  <>
    <Typography variant="h3">
      Форма обміну даними
    </Typography>

    <Typography variant="h6">
      Оберіть файл (.zip, .7zip, .rar, .csv, .xlsx).
    </Typography>
    
    <input id="myInput" type="file" 
      ref={myInput} style={{ display: 'none' }} 
      accept=".zip, .7zip, .rar, .csv, .xlsx"
    />
    <Button color="primary" variant="contained"
      className={styles.spaceRight}
      onClick={(e) => myInput.current.click() }
    >
      Обрати
    </Button>
    <span id='fileName'/>


    <Typography variant="h6">
      Вкажіть адресу, на яку очікуєте відповідь.
    </Typography>
    <TextField
      id="email"
      placeholder="Електронна пошта"
    />

    <Typography variant="h6">
      Сгенеруйте пароль доступу до файлу, або вкажіть пароль до архіву.
    </Typography>
    <TextField
      className={styles.spacer}
      id="tfNewPass"
      placeholder="Пароль доступу"
    />
    <Button
      id="btnNewPass"
      color="primary" 
      variant="contained"
    >
      Згенерувати новий
    </Button>

    <Typography variant="h6">
      Вкажіть до якої дати файл може бути доступний.
    </Typography>

    <MuiPickersUtilsProvider 
      utils={DateFnsUtils}
      locale={uaLocale}
    >
      <KeyboardDatePicker
        variant="inline"
        format="dd.MM.yyyy"
        disableToolbar
        value={selectedDate}
        label="поточна дата + 14 днів"
        onChange={(date) => setSelectedDate(date)}
      />
    </MuiPickersUtilsProvider>

    <TextField placeholder='коментар' id="asdfsdaf" multiline rows={3} fullWidth/>
    <Button color='primary' variant='contained' fullWidth
      className={styles.spaceTop}
    >
      Завантажити
    </Button>

  </>
)}