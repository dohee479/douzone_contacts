import ContactListItem from "./ContactListItem";

function ContactList(props) {
  return (
    <>
      <div className="contact-list">
        <ul>
          {
            props.searchResults.map((member, index) => 
            <ContactListItem key={index} name={member.name} setSelectedName={props.setSelectedName} />)
          }
        </ul>
      </div>
    </>
  );  
}

export default ContactList;