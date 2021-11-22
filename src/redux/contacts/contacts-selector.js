export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilterContacts = state => {
    const data = getContacts(state);
    const filter = getFilter(state);
    if (filter) {
        let normalizedFilter = filter.toLowerCase();
        return data.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
    } else {
        return data;
    }
};

