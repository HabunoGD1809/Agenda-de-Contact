import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { ContactForm } from './components/ContactForm';
import { ItemContact } from './components/ItemContact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [contactData, setContactData] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  useEffect(() => {
    const getContacts = localStorage.getItem('contacts');
    if (getContacts !== null) {
      setContactData(JSON.parse(getContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactData));
  }, [contactData]);

  const addContact = (data) => {
    if (!contactData.find((c) => c.name.toLowerCase() === data.name.toLowerCase())) {
      data.id = Date.now();
      setContactData([...contactData, data]);
      Swal.fire({
        title: 'Contacto guardado!',
        icon: 'success',
        confirmButtonColor: '#9bc59d',
      });
    }
  };

  const updateContact = (data) => {
    const newContact = contactData.map((c) => (c.id === data.id ? data : c));
    setContactData(newContact);
    Swal.fire({
      title: 'Contacto actualizado!',
      icon: 'success',
      confirmButtonColor: '#9bc59d',
    });
  };

  const deleteContact = (id) => {
    Swal.fire({
      title: 'Quieres eliminar este contacto?',
      icon: 'advertencia',
      showCancelButton: true,
      confirmButtonColor: '#9bc59d',
      cancelButtonColor: '#212738',
      confirmButtonText: 'Si, eliminalo!',
    }).then((result) => {
      if (result.isConfirmed) {
        const newData = contactData.filter((c) => c.id !== id);
        setContactData(newData);
      }
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="row">
          <ContactForm addContact={addContact} updateContact={updateContact} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
          <ItemContact contactData={contactData} setDataToEdit={setDataToEdit} deleteContact={deleteContact} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
