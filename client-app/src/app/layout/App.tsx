import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Hutba } from '../models/hutba';
import NavBar from './NavBar';
import HutbaDashboard from '../../features/hutbe/dashboard/HutbaDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {
  const [hutbe, setHutbe] = useState<Hutba[]>([]);
  const [selectedHutba, setSelectedHutba] = useState<Hutba | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Hutbe.list().then(response => {
      let hutbe: Hutba[] = [];
      response.forEach(hutba => {
        hutba.postedDate = hutba.postedDate.split('T')[0];
        hutbe.push(hutba);
      })
      setHutbe(hutbe);
      setLoading(false);
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
    setSubmitting(true);
    if (hutba.id) {
      agent.Hutbe.update(hutba).then(() => {
        setHutbe([...hutbe.filter(x => x.id !== hutba.id), hutba])
        setSelectedHutba(hutba);
        setEditMode(false);
        setSubmitting(false);
      })
    } else {
      hutba.id = uuid();
      agent.Hutbe.create(hutba).then(() => {
        setHutbe([...hutbe, hutba])
        setSelectedHutba(hutba);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

  function handleDeleteHutba(id: string) {
    setSubmitting(true);
    agent.Hutbe.delete(id).then(() => {
      setHutbe([...hutbe.filter(x => x.id !== id)])
      setSubmitting(false);
    })
  }

  if (loading) return <LoadingComponent content='Učitavanje aplikacije...' />

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
        submitting={submitting}
      />
      </Container>
    </>
  );
};

export default App
