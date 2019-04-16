import axios from 'axios';

export const GET_USER_INFO = "userInfo/GET_USER_INFO";

export function getUserInfo() {
    return (dispatch, getState) => {
        axios
            .post('/api/user')
            .then((res) => {
                let data = JSON.parse(res.request.responseText);
                // let storeCounter=getState().counter;
                // console.log('storeCounter电风扇地方', storeCounter);
                dispatch({type: GET_USER_INFO, payload: data});
            })
    }
}
