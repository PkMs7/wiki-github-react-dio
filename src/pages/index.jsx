import { useState } from 'react'
import gitHubLogo from '../assets/github-logo.png'
import Input from '../components/Input'
import Button from '../components/Button'
import ItemRepo from '../components/ItemRepo'
import { Container } from './styles'

function App() {

  const [repos, setRepos] = useState([]);


  return (
    <Container>
      <img src={gitHubLogo} alt="Logo Github" width={72} height={72} />
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  )
}

export default App
