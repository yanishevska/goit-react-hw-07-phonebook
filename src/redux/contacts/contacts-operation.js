import axios from 'axios';
import actions from './contacts-actions';

const {
    getContactsRequest,
    getContactsSuccess,
    getContactsError,
    addContactsRequest,
    addContactsSuccess,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError,
} = actions;

axios.defaults.baseURL = 'https://6198a98e164fa60017c23173.mockapi.io/api/v1';


export const fetchContacts = () => async (dispatch) => {
    dispatch(getContactsRequest());
    try {
        const { data } = await axios.get('/contacts');
        dispatch(getContactsSuccess(data));

    } catch (error) {
        dispatch(getContactsError(error));
    }
};

export const addContactEl = (item) => async (dispatch) => {
    dispatch(addContactsRequest());

    await axios
        .post('/contacts', item)
        .then(({ data }) => dispatch(addContactsSuccess(data)))
        .catch((error) => dispatch(addContactsError(error)));
};

export const deleteContactsEl = (id) => (dispatch) => {
    dispatch(deleteContactsRequest());

    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactsSuccess(id)))
        .catch((error) => dispatch(deleteContactsError(error)));
    
};