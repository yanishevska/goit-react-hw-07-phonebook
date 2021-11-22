import React from "react";
import PropTypes from 'prop-types';
import { useSelector,useDispatch } from "react-redux";
import { getFilter} from "../../redux/contacts/contacts-selector";
import actions from "../../redux/contacts/contacts-actions";
import s from "./Filter.module.css";

const { changeContact } = actions;
function Filter () {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(changeContact(e.target.value));
  };


 return (
  <label className={s.filterLabel}>
    Find contacts by name
    <input
      className={s.formInput}
      type="text"
      value={filter}
      onChange={changeFilter}
    />
  </label>)
};


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};


export default Filter;
