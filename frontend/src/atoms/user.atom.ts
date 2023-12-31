import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const tutorInfoState = atom({
  key: 'tutorInfo',
  default: {
    tutorId: 0,
    email: '',
    name: '',
    nickname: '',
    themeIndex: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const parentInfoState = atom({
  key: 'parentInfo',
  default: {
    parentId: 0,
    email: '',
    name: '',
  },
  effects_UNSTABLE: [persistAtom],
});

// 컴포넌트에서 가져다 쓸 때 아래처럼 쓰면 댐...
// const [userInfo, setUserInfo] = useRecoilState(userInfoState);
