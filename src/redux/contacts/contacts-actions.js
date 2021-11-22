import { createAction } from '@reduxjs/toolkit';

const getContactsRequest = createAction('contacts/getContactsRequest');
const getContactsSuccess = createAction('contacts/getContactsSuccess');
const getContactsError = createAction('contacts/getContactsError');


const addContactsRequest = createAction('contacts/addContactsRequest');
const addContactsSuccess = createAction('contacts/addContactsSuccess');
const addContactsError = createAction('contacts/addContactsError');

const deleteContactsRequest = createAction('contacts/ deleteContactsRequest');
const deleteContactsSuccess = createAction('contacts/ deleteContactsSuccess');
const deleteContactsError = createAction('contacts/ deleteContactsError');


const changeContact = createAction('contacts/changeContact');

const actions = {
    getContactsRequest,
    getContactsSuccess,
    getContactsError,
    addContactsRequest,
    addContactsSuccess,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError,
    changeContact,
};

export default actions;
