import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography  from '@material-ui/core/Typography';
import Button  from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CheckIcon from '@material-ui/icons/Check';

import DateFnsUtils from '@date-io/date-fns';
import uaLocale from "date-fns/locale/uk";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import {
  generatePassword,
  getField,
  makeForm,
  postForm,
} from './functions';

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
  const [file, setFile] = React.useState();
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [gotRestonse, setGotRestonse] = React.useState(false);
  const fileInput = React.useRef();

  return (
  <>
    <Typography variant="h3">
      Форма обміну даними
    </Typography>

    <Typography variant="h6">
      Оберіть файл (.zip, .7z, .rar, .csv, .xlsx).
    </Typography>
    
    <input id="fileInput" type="file" 
      ref={fileInput} style={{ display: 'none' }} 
      accept=".zip, .7z, .rar, .csv, .xlsx"
      onChange = {(e)=> setFile(e.target.files[0]) }
    />
    <Button color="primary" variant="contained"
      className={styles.spaceRight}
      onClick={() => fileInput.current.click() }
    >
      Обрати
    </Button>
    <span id='fileName'>
      {'' || file?.name}
    </span>


    <Typography variant="h6">
      Вкажіть адресу, на яку очікуєте відповідь.
    </Typography>
    <TextField id="email" placeholder="Електронна пошта"/>

    
    <Typography variant="h6">
      Сгенеруйте пароль доступу до файлу, або вкажіть пароль до архіву.
    </Typography>
    <TextField className={styles.spacer} id="tfNewPass"
      placeholder="Пароль доступу" value = {password}
      onChange = {(e) => {
        const newValue = e.target.value
        if(newValue.length<=16) {
          setPassword(newValue) 
        }
      }}
    />
    <Button id="btnNewPass" color="primary"  variant="contained"
      onClick = { () => setPassword(generatePassword()) }
    >
      Згенерувати новий
    </Button>


    <Typography variant="h6">
      Вкажіть до якої дати файл може бути доступний.
    </Typography>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={uaLocale}>
      <KeyboardDatePicker
        id='expired' variant="inline" format="dd.MM.yyyy"
        disableToolbar value={selectedDate}
        label="поточна дата + 14 днів"
        onChange={(date) => setSelectedDate(date)}
      />
    </MuiPickersUtilsProvider>


    <TextField placeholder='коментар' id="comment" multiline rows={3} fullWidth/>
    <Button color='primary' variant='contained' fullWidth
      className={styles.spaceTop}
      onClick={()=>{
        const form = makeForm({
          'file': getField('fileInput').files[0],
          'email': getField('email').value,
          'password': getField('tfNewPass').value,
          'expired': getField('expired').value,
          'comment': getField('comment').value,
        });

        postForm(
          'http://www.upload.ci/api/upload',
          form,
          (result) => {
            console.log(result)
            if(result['result'] === 'error'){
              setError(result['data'])
            }
            else{
              setError('')
            }
            setGotRestonse(true)
          }
        )
      }}
    >
      Завантажити
    </Button>

    <Dialog open={gotRestonse} onClose={()=>{setGotRestonse(false)}}>
      <DialogTitle>
        { 
          error === ''
          ? <>Завантажено успішно! <CheckIcon/></> 
          : <>Помилка<br/>{error}</>
        }
      </DialogTitle>
    </Dialog>
  </>
)}