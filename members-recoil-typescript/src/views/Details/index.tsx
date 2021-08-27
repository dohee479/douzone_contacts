import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { membersState, memberTypes } from "../../atoms/Recoils_Member";
import { getDetail } from "../../utils/api/ApiService";

function Details(props : any) {

  const [members, setMembers] = useRecoilState<memberTypes[]>(membersState);
  
  const [member, setMember] = useState<memberTypes>();

  // Id에 따른 member의 상세정보 띄우기
  useEffect(() => {
    // if (props.selectedId) {
    //   setMember(members.find(memberRecord => memberRecord.id === props.selectedId))
    // } else {
    //   setMember(undefined);
    // }
    async function fetchAndSetDetail() {
      console.log(await getDetail(props.selectedId))
    } 
    if (props.selectedId) {
      fetchAndSetDetail();
    }
  }, [members, props.selectedId])

  // member 삭제 기능
  const deleteMember = () => {
    setMembers(members.filter(member => member.id !== props.selectedId))
  }

  // updateForm 보여주기위해 divison 변경
  const showUpdateForm = () => {
    props.setDivision('update');
  }

  return (
    <>
      <div className="col right">
        <div className="details">
          {
            member ?
            <ul className="info">
              <li>이름: {member.name}</li>
              <li>부서: {member.deptName}</li>
              <li>휴대폰: {member.phone}</li> 
              <li>메일: {member.mail}</li>
              <li className="btn-wrap">
                <button className="commonBtn updateBtn" onClick={showUpdateForm}>수정</button>
                <button className="commonBtn deleteBtn" onClick={deleteMember}>삭제</button>
              </li>
            </ul>
            :
            <p className="emptyset">정보가 없습니다.</p>
          }
        </div>
      </div>
    </>
  );  
}

export default Details;