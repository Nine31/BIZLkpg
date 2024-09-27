import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Hutba } from '../models/hutba';
import NavBar from './NavBar';
import HutbaDashboard from '../../features/hutbe/dashboard/HutbaDashboard';
import {v4 as uuid} from 'uuid';

function App() {
  const [hutbe, setHutbe] = useState<Hutba[]>([]);
  const [selectedHutba, setSelectedHutba] = useState<Hutba | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Hutba[]>('http://localhost:5000/api/hutbe')
      .then(response => {
        setHutbe(response.data);
      })
  }, [])

  function handleSelectHutba(id: string) {
    setSelectedHutba(hutbe.find(x => x.id === id));
  }

  function handleCancelSelectHutba() {
    setSelectedHutba(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectHutba(id) : handleCancelSelectHutba();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditHutba(hutba: Hutba) {
    hutba.id
      ? setHutbe([...hutbe.filter(x => x.id !== hutba.id), hutba])
      : setHutbe([...hutbe, {...hutba, id: uuid()}]);
    setEditMode(false);
    setSelectedHutba(hutba);
  }

  function handleDeleteHutba(id: string) {
    setHutbe([...hutbe.filter(x => x.id !== id)])
  }

  return (
    <>
      <NavBar openForm={handleFormOpen}/>
      <Container className='hutba'>
        <HutbaDashboard 
        hutbe={hutbe} 
        selectedHutba={selectedHutba}
        selectHutba={handleSelectHutba}
        cancelSelectHutba={handleCancelSelectHutba}  
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        createOrEdit={handleCreateOrEditHutba}
        deleteHutba={handleDeleteHutba}
      />
      </Container>
    </>
  );
};

export default App
