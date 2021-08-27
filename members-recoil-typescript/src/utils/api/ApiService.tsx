import axios from "axios";


// Member 정보
const MEMBER_API_URL = "http://localhost:5000/contacts";

// Member 정보 API URL
// Member 정보 조회
export const getContactList = async () => {
  const list = await axios.get(MEMBER_API_URL);
  return list.data;
}

// Member Detail 정보 조회
export const getDetail = async (id : string) => {
  const detail = await axios.get(`${MEMBER_API_URL}/${id}`)
  return detail.data
}