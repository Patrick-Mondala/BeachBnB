import { createNewUser } from "../../actions/session_actions";
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    formType: 'sign up',
    errors: state.errors.session,
    loggedIn: Boolean(state.session.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(createNewUser(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(SessionForm)