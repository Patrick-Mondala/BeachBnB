import { createNewSession } from "../../actions/session_actions";
import { connect } from 'react-redux';
import SessionForm from './session_form';

//maybe do something with ownProps later?
const mapStateToProps = (state, ownProps) => ({
    formType: 'login',
    errors: state.errors.session,
    loggedIn: Boolean(state.session.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(createNewSession(user)) 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(SessionForm)