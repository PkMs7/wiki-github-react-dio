import gitHubLogo from '../assets/github-logo.png'
import Input from '../components/Input'
import { Container } from './styles'

function App() {

  return (
    <Container>
      <img src={gitHubLogo} alt="Logo Github" width={72} height={72} />
      <Input />
    </Container>
  )
}

export default App
