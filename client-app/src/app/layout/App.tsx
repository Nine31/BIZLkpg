import { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import HutbaDashboard from '../../features/hutbe/dashboard/HutbaDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {hutbaStore} = useStore();

  useEffect(() => {
    hutbaStore.loadHutbe();
  }, [hutbaStore])

  if (hutbaStore.loadingInitial) return <LoadingComponent content='Učitavanje aplikacije...' />

  return (
    <>
      <NavBar />
      <Container className='hutba' style={{marginTop: '7em'}}>
        <HutbaDashboard />
      </Container>
    </>
  );
};

export default observer(App)
