import { useState } from 'react';
import './App.css';
import ContactList from './views/ContactList';
import Details from './views/Details';
import SearchBox from './views/SearchBox';
import Subject from './views/Subject';
import members from "./Data/data";

function App() {
  // member 이름
  const [selectedName, setSelectedName] = useState("");

  // 검색결과 리스트
  const [searchResults, setSearchResults] = useState([...members]);

  return (
    <>
      <div className="container">
        <Subject/>
        <div className="contact-wrap">
          <div className="col left">
            <SearchBox setSearchResults={setSearchResults} setSelectedName={setSelectedName}/>
            <ContactList selectedName={selectedName} setSelectedName={setSelectedName} 
                         searchResults={searchResults} />
          </div>
          <div className="col right">
            <Details selectedName={selectedName} searchResults={searchResults}/>
          </div>
        </div>
      </div>
    </>    
  );
}

export default App;
