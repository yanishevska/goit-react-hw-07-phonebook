import React, { useEffect } from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilterContacts } from "../../redux/contacts/contacts-selector";
import { fetchContacts,deleteContactsEl } from "../../redux/contacts/contacts-operation";


function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);

  useEffect(() => {
    dispatch(fetchContacts());

  }, [dispatch]);

  return (<>
    {contacts ?( <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <span className={s.nameForm}>{name}:</span>
          <span className={s.numberForm}>{number}</span>
          <button
            className={s.btnDelete}
            type="button"
            onClick={() => {
             dispatch(deleteContactsEl(id)) 
            }}
          >
            <img
              className={s.svgBtnDelete}
              src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-lineal-color-kiranshastry.png"
              alt="delete button"
            />
          </button>
        </li>
      ))}
    </ul>): null
}
    </>
  );
};


ContactList.defaultProps = {
  name: "Name Surname",
  number: "123 456 789",
};

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;

