import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

import styles from './signin.css';

class Signin extends Component {
  handleFormSubmit({email, password}) {
    console.log(email, password);
  }
  
  render() {
    const {handleSubmit} = this.props;
    
    return (
      <form className={styles.form} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"></Field>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password"></Field>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin'
})(Signin);