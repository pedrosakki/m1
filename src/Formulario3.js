import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
       margin: theme.spacing(1),
     },
     leftIcon: {
       marginRight: theme.spacing(1),
     },
     rightIcon: {
       marginLeft: theme.spacing(1),
     },
     iconSmall: {
       fontSize: 20,
     },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


const alEnviar = user => event => {
  alert('A user was submitted: ' + this.state.user);
  event.preventDefault();
};


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function Formulario3() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
    user:'',
    pass:'',
    isGoing:true,
    numberGuest:2
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (

    <form className={classes.container,"form-horizontal"}
    noValidate autoComplete="off" href="#contained-buttons">

    <TextField
      id="standard-dense"
      label="Usuario"
      className={clsx(classes.textField, classes.dense)}
      margin="dense"
    />
<br/>
      <TextField
        id="standard-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
      />
  <br/>
    <Button  type="submit"
    variant="contained"
    className={clsx(classes.button)}
    color="primary">
    Entrar
    <DoubleArrowOutlinedIcon className={classes.rightIcon}></DoubleArrowOutlinedIcon>
    </Button>

    </form>
  );
}

//export default Formulari03;
