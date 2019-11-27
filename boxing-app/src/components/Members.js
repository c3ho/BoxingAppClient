import React from 'react'
import Table from 'react-bootstrap/Table'
import moment from 'moment'
import Button from 'react-bootstrap/Button'
import MemberModal from './MemberModal'
import UserForm from './UserForm'

class Members extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            members: []
        }
        //this.addMember = this.addMember.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.preventDefault();
        window.location.href = "http://localhost:3000/form";
    }

    componentDidMount() {
        fetch('https://fathomless-ridge-51130.herokuapp.com/members')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    members: data
                })
            }).catch(err => {
                console.log('There was an error retrieving data: ' + err);
            })
    }

    render() {
        return (
            <div>
                <Button id='add_button' variant="primary" size="md" onClick={this.handleClick}>Add Member</Button>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Enroll Date</th>
                            <th>Membership Expire Date</th>
                            <th>Last Paid Date</th>
                            <th>Last Active Date</th>
                            <th>Medical</th>
                            <th>Active</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.members.map((members, index) => {
                            return (
                                <tr>
                                    <td>{members.firstName}</td>
                                    <td>{members.lastName}</td>
                                    <td>{moment(members.enrollDate).format('LL')}</td>
                                    <td>{moment(members.expireDate).format('LL')}</td>
                                    <td>{moment(members.lastPaidDate).format('LL')}</td>
                                    <td>{moment(members.lastActiveDate).format('LL')}</td>
                                    <td>{moment(members.medical).format('LL')}</td>
                                    <td>{members.active}</td>
                                    <td>{members.note}</td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Members