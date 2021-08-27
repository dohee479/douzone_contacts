import { useState } from "react";
import Details from "../Details";
import Form from "../Form";
import SearchAndList from "../SearchAndList";
import Subject from "../Subject";

function ContactInformation(props : any) {

  // member 이름
  const [selectedId, setSelectedId] = useState<number>();

  // form 과 detail를 구분
  const [division, setDivision] = useState<string>('');

  return (
    <>
      <div className="container">
        <Subject/>
        <div className="contact-wrap">
          <SearchAndList setSelectedId={setSelectedId} setDivision={setDivision} />
          {
            division === 'add' || division === 'update' ? <Form division={division} selectedId={selectedId} setDivision={setDivision}/>
            :
            <Details selectedId={selectedId} setDivision={setDivision}/>
          }
        </div>
      </div>
    </>
  );  
}

export default ContactInformation;