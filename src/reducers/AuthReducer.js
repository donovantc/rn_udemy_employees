import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: {},
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action ) => {
    switch (action.type){
        case EMAIL_CHANGED:
            return Object.assign({}, state, {
                email: action.payload
            });
        case PASSWORD_CHANGED:
            return Object.assign({}, state, {
                 password: action.payload
             });
        case LOGIN_USER:
            return Object.assign({}, state, {
                error: '',
                loading: true
            });     
        case LOGIN_USER_SUCCESS:
            /* TODO: RESET FORM WITH ...INITIAL_STATE */
            return Object.assign({}, state, {
                email: '',
                password: '',
                user: action.payload,
                error: '',
                loading: false
            });
        case LOGIN_USER_FAIL:
            return Object.assign({}, state, {
                error: 'Authentication Failed.',
                password: '',
                loading: false
            });
        default:
            return state;
    }
}