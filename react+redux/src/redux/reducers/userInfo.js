import {GET_USER_INFO} from 'actions/userInfo';

const initState = {
    userInfo: {
        nameMeaasge:'hello world'
    }
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            };
        default:
            return state;
    }
}
