import { searchMembers } from "../Data/data" 

function SearchBox(props) {
  
  const search = (event) => {
    props.setSearchResults(searchMembers(event.target.value));
    props.setSelectedName("");
  }

  return (
    <>
      <div className="search-box">
        <input type="text" className="inp-sch" placeholder="검색어를 입력하세요." onChange={search}/>
      </div>
    </>
  );  
}

export default SearchBox;