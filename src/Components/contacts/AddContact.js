import React from 'react';
import { Consumer } from '../../Context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onFieldChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onFormSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };

        dispatch({ type: 'ADD_CONTACT', payload: newContact });
        // Clear State on form submission - also clears inputs
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    }

    render () {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card mb-3'>
                            <div className='card-header'>
                                Add Contact
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label='Name'
                                        name='name'
                                        placeholder='Enter Name'
                                        value={name}
                                        onChange={this.onFieldChange}
                                    />
                                    <TextInputGroup
                                        label='Email'
                                        name='email'
                                        type='email'
                                        placeholder='Enter Email'
                                        value={email}
                                        onChange={this.onFieldChange}
                                    />
                                    <TextInputGroup
                                        label='Phone'
                                        name='phone'
                                        placeholder='Enter PHone'
                                        value={phone}
                                        onChange={this.onFieldChange}
                                    />
                                    <input type='submit' 
                                        value='Add Contact' 
                                        className='btn btn-light btn-block' 
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContact;