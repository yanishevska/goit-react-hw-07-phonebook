import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const {
    getContactsSuccess,
    addContactsSuccess,
    deleteContactsSuccess,
    changeContact,
} = actions;

export const items = createReducer([], {
    [getContactsSuccess]: (_, { payload }) => payload,
    [addContactsSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactsSuccess]: (state, { payload }) => state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
    
    [changeContact]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
    items,
    filter,
    error,
})