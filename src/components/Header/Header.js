import React from 'react'
import {connect} from 'react-redux';
import {getUserSession} from '../../redux/reducer'

class Header extends React.Component{

    componentDidMount(){
        this.props.getUserSession();
    }

    render(){
        console.log("Header props: ",this.props)
    return <div>
        {
            (this.props.loading)
            ?
            <div>
                Loading...
            </div>
            :
            <div>
                Welcome, {this.props.user.username}!
            </div>
        }
        </div>
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    getUserSession
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)