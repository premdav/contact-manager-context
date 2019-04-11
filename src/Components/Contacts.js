import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Shawn Mendes',
                email: 'smend@outlook.com',
                phone: '444-444-4444'
            },
            {
                id: 3,
                name: 'Henry Travis',
                email: 'henry@gmail.com',
                phone: '333-333-3333'
            }
        ]
    };

    deleteContact = (id) => {
        const { contacts } = this.state;

        const newContacts = contacts.filter(contact => contact.id !== id);
        this.setState({
            contacts: newContacts
        });
    }

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                { contacts.map((contact) => {
                   return (
                      <Contact 
                        key={contact.id}
                        contact={contact}
                        deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                        />
                   )}) 
                }
            </React.Fragment>
        );
    }
}

export default Contacts;