import { RecoilRoot } from 'recoil';
import './App.css';
import ContactInformation from './views/ContactInformation';

function App() {

  return (
    <>
      <RecoilRoot>
        <ContactInformation/>
      </RecoilRoot>
    </>
  );
}

export default App;
