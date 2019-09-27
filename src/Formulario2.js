import React,{Component} from 'react';
//import Button from 'react-bootstrap/Button';
import './index.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

//import 'typeface-roboto';
/*const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));*/
const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
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
class Formulario extends Component {
//	const classes = useStyles();
	constructor(props) {
    super(props);
    //this.state = {user: '',pass:'1234'};
	//	const [state, setState] = React.useState({
  //  checkedA: true
  //});
		this.state={
			user:'',
			pass:'',
			isGoing:true,
			numberGuest:2
		};
    this.alCambiar = this.alCambiar.bind(this);
    this.alEnviar = this.alEnviar.bind(this);
		this.inputChange=this.inputChange.bind(this);
  }
	inputChange(event){
		const target=event.target;
		const value=target.type==='checkbox'?target.checked:target.value;
		const name=target.name;
		this.setState({
			[name]:value
		});
	}
  alCambiar(event) {
    this.setState({user: event.target.value 	});

  }
  alEnviar(event) {
    alert('A user was submitted: ' + this.state.user);
    event.preventDefault();
  }
//	const handleChange = name => event => {
  //   setState({ ...state, [name]: event.target.checked });
   //};



  render() {
    return (

      <form className="form-horizontal" onSubmit={this.alEnviar}>
	<div className="bg"></div>

			<label >
       Is going:
			 <Checkbox
			 checked={this.state.isGoing}
			 onChange={this.inputChange}
			 //checked={state.checkedA}
			 //onChange={handleChange('checkedA')}
			 //value="checkedA"
			 inputProps={{
				 'aria-label': 'primary checkbox',
			 }}
		 />
		 <TextField
		         id="standard-password-input"
		         label="Password"
		         className={classes.textField}
		         type="password"
		         autoComplete="current-password"
		         margin="normal"
		       />
		<br/>
			 <input
             name="isGoing"
             type="checkbox"
             checked={this.state.isGoing}
             onChange={this.inputChange} />
         </label>
<br/>

        <label className="control-label">
          Usuario  :
          <input  className="form-control input-lg" type="text" name="user" id="user" placeholder="Usuario"
					value={this.state.user}
          onChange={this.inputChange} />
        </label>

				<br/>
        <label className="control-label">
          Password:
          <input  className="form-control input-lg" type="Password" name="pass" id="pass" placeholder="Contraseña"
					value={this.state.pass}
					onChange={this.inputChange} />
        </label>
				<br/>


<Button  type="submit" variant="contained" color="primary">Entrar</Button>


      </form>
    );
  }
}
export default Formulario;
