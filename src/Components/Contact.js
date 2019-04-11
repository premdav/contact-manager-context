import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    state = {
        showContactInfo: false
    };

    onExpandClick = (e) => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    }

    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }

    render() {
        const { name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <div className='card card-body mb-3'>
                <h4>
                    {name} 
                    <i
                        style={{cursor: 'pointer'}}
                        onClick={this.onExpandClick} 
                        className='fas fa-sort-down' 
                    />
                    <i 
                        className='fas fa-times' 
                        style={{ cursor: 'pointer',
                            float: 'right', 
                            color: 'red' }} 
                        onClick={this.onDeleteClick}
                    />
                </h4>
                {showContactInfo ? (
                    <ul className='list-group'>
                    <li className='list-group-item'>Email: {email}</li>
                    <li className='list-group-item'>Phone: {phone}</li>
                </ul>
                ) : null }
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;