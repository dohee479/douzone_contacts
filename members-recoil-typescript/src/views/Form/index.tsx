import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { keywordState, membersState, memberTypes } from "../../atoms/Recoils_Member";

let id : number = 6;
const getId = () => {
  return id++;
}

function Form(props : any) {

  const [members, setMembers] = useRecoilState<memberTypes[]>(membersState);

  const setKeyword = useSetRecoilState(keywordState);

  const [inputValue, setInputValue] = useState<memberTypes>(
    {
      id: null,
      name: '',
      deptName: '',
      phone: '',
      mail: ''
    }
  );


  const handleChange = ({target} : React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value 
    });
  }

  const addMember = () => {
    if (props.division === 'add') {
      setMembers((preveMembers) => [
        ...preveMembers,
        {
          ...inputValue,
          id: getId()
        }
      ])
      alert("추가되었습니다.");
      props.setDivision('');
      setKeyword('');
    } else if (props.division === 'update') {
      const newMembers = members.map(member => {
        if (member.id === props.selectedId) {
          member = inputValue
        }
        return member
      });
      setMembers(newMembers)
      alert("수정완료!!!");
      props.setDivision('');
      setKeyword('');
    }
  }

  useEffect(() => {
   if (props.division === 'update') {
    setInputValue(members.find(memberRecord => memberRecord.id === props.selectedId) as memberTypes)
   } else if (props.division === 'add') {
     setInputValue(
      {
        id: null,
        name: '',
        deptName: '',
        phone: '',
        mail: ''
      }
     )
   }
  }, [members, props.division, props.selectedId])

  return (
    <>
    <div className="col right">
      <div className="details">
        <ul className="edit">
          <li>
            이름 : <input name="name" value={inputValue.name} onChange={handleChange}/>
          </li>
          <li>
            부서 : <input name="department" value={inputValue.deptName} onChange={handleChange}/>
          </li>
          <li>
            휴대폰 : <input name="phone" value={inputValue.phone} onChange={handleChange}/>
          </li>
          <li>
            메일 : <input name="mail" value={inputValue.mail} onChange={handleChange}/>
          </li>
          <button className="commonBtn saveBtn" onClick={addMember}>
            저장
          </button>
        </ul>
      </div>
    </div>
    </>
  );  
}


export default Form;