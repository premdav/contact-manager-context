import React from 'react';

class AddContact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    render () {
        const { name, email, phone } = this.state;
        return (
            <div className='card mb-3'>
                <div className='card-header'>
                    Add Contact
                </div>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input 
                                name='name'
                                type='text'
                                className='form-control form-control-lg'
                                placeholder='Enter Name...'
                                value={name}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input 
                                name='email'
                                type='email'
                                className='form-control form-control-lg'
                                placeholder='Enter Email...'
                                value={email}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='phone'>Phone</label>
                            <input 
                                name='phone'
                                type='text'
                                className='form-control form-control-lg'
                                placeholder='Enter phone...'
                                value={phone}
                            />
                        </div>
                        <input type='submit' 
                            value='Add Contact' 
                            className='btn btn-light btn-block' 
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;