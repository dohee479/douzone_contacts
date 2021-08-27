function ContactListItem(props) {

  // 클릭을 통해 member name을 저장
  const changeName = (name) => {
    props.setSelectedName(name);
  }

  return (
    <>
      <li>
        <button type="button" onClick={() => changeName(props.name)}>{props.name}</button>
      </li>
    </>
  );  
}

export default ContactListItem;