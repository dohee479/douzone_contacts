import ContactList from "./ContactList";
import SearchBox from "./SerachBox";

function SearchAndList(props : any) {
  return (
    <>
      <div className="col left">
        <SearchBox setSelectedId={props.setSelectedId} setDivision={props.setDivision}/>
        <ContactList setSelectedId={props.setSelectedId} setDivision={props.setDivision}/>
      </div>
    </>
  );  
}

export default SearchAndList;