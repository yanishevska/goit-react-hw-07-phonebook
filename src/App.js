import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Container from "./components/Container";
import Filter from "./components/Filter";


function App() {

  return (
    <>
      <Container title={"Phonebook"}>
        <ContactForm />
      </Container>

      <Container title={"Contacts"}>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};

export default App;

