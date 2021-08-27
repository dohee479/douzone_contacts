import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { memberList, memberTypes } from "../../atoms/Recoils_Member";
import { getContactList } from "../../utils/api/ApiService";
import ContactListItem from "./ContactListItem";

function ContactList(props : any) {

  // const members = useRecoilValue<memberTypes[]>(searchResultsState);
  const [members, setMembers] = useRecoilState<memberTypes[]>(memberList);

  useEffect(() => {
    async function fetchAndSetMembers() {
      setMembers(await getContactList());
    };
    fetchAndSetMembers();
  }, [setMembers])


  return (
    <>
      <div className="contact-list">
        <ul>
          {
            members.map(member => 
            <ContactListItem key={member.id} member={member} setSelectedId={props.setSelectedId} setDivision={props.setDivision}/>)
          }
        </ul>
      </div>
    </>
  );  
}

export default ContactList;