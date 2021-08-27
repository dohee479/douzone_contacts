import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { keywordState, membersState, memberTypes, searchResultsState } from "../../atoms/Recoils_Member";

function SearchBox(props : any) {

  const members = useRecoilValue<memberTypes[]>(membersState);
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const setSearchResults = useSetRecoilState<memberTypes[]>(searchResultsState);

  const search = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(value);
    props.setSelectedId("");
    props.setDivision('');
  };

  const showForm = () => {
    props.setDivision('add');
  }

  useEffect(() => {
    setSearchResults(members.filter(member => member.name.includes(keyword)));
  }, [keyword, members, setSearchResults])

  return (
    <>
      <div className="search-box">
        <input type="text" className="inp-sch" placeholder="검색어를 입력하세요." value={keyword} onChange={search} />
        <button className="btn" onClick={showForm}>추가</button>
      </div>
    </>
  );  
}

export default SearchBox;