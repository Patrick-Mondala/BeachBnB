import { deleteSession } from '../actions/session_actions';
import { connect } from 'react-redux';
import Greeting from './greeting';

//need to know current_user from state
const mapStateToProps = state => {
    const currentUserId = state.session.id;
    const currentUser = state.entities.users[currentUserId];
    return {
        currentUser
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(deleteSession())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);