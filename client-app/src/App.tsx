import { useEffect, useState } from 'react';
import axios from 'axios';
import { Flag, Header, Icon, List } from 'semantic-ui-react';

function App() {
  const [hutbe, setHutbe] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/hutbe')
      .then(response => {
        setHutbe(response.data);
      })
      .catch(error => {
        console.error('Došlo je do greške pri preuzimanju podataka!', error);
      });
  }, []);

  return (
    <div className='icon-container'>
      <Icon className='moon' name='moon' size='massive' />
      <Icon className='star' name='star' size='huge' />
      <Flag name='ba' className='bosnia' />
      <Header as='h2' content='Bošnjačka Islamska Zajednica Linköping' className='title' />
      <List>
        {hutbe.map((hutba: any) => (
          <List.Item key={hutba.id}>
            {hutba.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default App
