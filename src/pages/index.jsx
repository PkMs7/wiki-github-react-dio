import { useState } from 'react';
import gitHubLogo from '../assets/github-logo.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const { data } = await api.get(`repos/${ currentRepo }`);

    if( data.id ) {
      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
      }
    }

  };

  const handleRemoveRepo = (id) => {

    let repositories = repos.filter((repo) => repo.id != id);

    setRepos(repositories);

  };


  return (
    <Container>
      <img src={gitHubLogo} alt="Logo Github" width={72} height={72} />
      <Input value={ currentRepo } onChange={ (e) => setCurrentRepo(e.target.value) }/>
      <Button onClick={ handleSearchRepo } />
      { repos.map(repo => <ItemRepo handleRemoveRepo={ handleRemoveRepo } repo={ repo } />)}
    </Container>
  )
}

export default App
