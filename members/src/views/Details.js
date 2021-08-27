import { useEffect, useState } from "react";
import { getMemberData } from "../Data/data";

function Details(props) {
  const [member, setMember] = useState();

  useEffect(() => {
    if (props.selectedName) {
      setMember(getMemberData(props.selectedName))
    } else {
      setMember();
    }
  }, [props.selectedName])

  return (
    <>
      <div className="details">
        {
          member ?
          <ul className="info">
            <li>이름: {member.name}</li>
            <li>부서: {member.department}</li>
            <li>휴대폰: {member.phone}</li> 
            <li>메일: {member.mail}</li>
          </ul>
          :
          <p className="emptyset">정보가 없습니다.</p>
        }

        {/* 아래 Emptyset을 위의 ul과 바꿔쓰세요. */}

        {/* Emptyset */}
        {/* //Emptyset */}
      </div>
    </>
  );  
}

export default Details;