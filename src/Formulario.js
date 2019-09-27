import React,{Component} from 'react';


class Formulario extends Component {
	constructor(props) {
    super(props);
    this.state = {user: '',pass:'1234'};
    this.alCambiar = this.alCambiar.bind(this);
    this.alEnviar = this.alEnviar.bind(this);
  }
  alCambiar(event) {
    this.setState({user: event.target.value 	});

  }
  alEnviar(event) {
    alert('A user was submitted: ' + this.state.user);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.alEnviar}>

        <label>
          Usuario:
          <input type="text" id="user" value={this.state.user}
          onChange={this.alCambiar} />
        </label>
        <label>
          Password:
          <input type="text" id="pass" value={this.state.pass} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
	<dl>
	      {props.items.map(item => (
	        // Sin el prop 'key', React disparará una advertencia de key
	        <React.Fragment key={item.id}>
	          <dt>{item.term}</dt>
	          <dd>{item.description}</dd>
	        </React.Fragment>
	      ))}
	    </dl>

}

export default Formulario;
