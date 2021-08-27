import { atom, selector } from "recoil";
import { members } from "../data/data";

export interface memberTypes {
  id: number | null, 
  name: string,
  deptName: string
  phone: string,
  mail: string
}

export const membersState = atom<memberTypes[]>({
  key: 'membersState',
  default: members
});

export const keywordState = atom<string>({
  key: 'keywordState',
  default: '',
});

// selector 를 이용한 검색 구현
export const searchedMembersState = selector<memberTypes[]>({
  key: 'searchedMembersState',
  get: 
    ({get}) => {
    const keyword = get(keywordState);
    const list = get(membersState);
    return list.filter(item => item.name.includes(keyword));
  }
});

// 검색결과 리스트(selector 사용 X)
export const searchResultsState = atom<memberTypes[]>({
  key: 'searchResultsState',
  default: membersState
});

// api 부분
// Member 정보 조회
export const memberList = atom<memberTypes[]>({
  key: 'memberList',
  default: []
});