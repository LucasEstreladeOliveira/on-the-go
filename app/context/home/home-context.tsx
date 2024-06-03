import { createContext, useCallback, useEffect, useMemo, useReducer } from 'react';
// import useNotifications from '@/app/hooks/use-notifications';
import axios from 'axios';

export interface HomeData {
  researches: {
    running?: string;
    scripting?: number;
    myresearches: {
      name: string;
      id: number;
      status: string;
    }[]
  };
  audience?: {
    balance: number;
    sended: number;
    contacts: number;
  },
  credits?: {
    running: number;
    reserved: number;
    available: number;
  },
  id?: string;
  createAt?: string;
}

interface Home {
  data: HomeData | null
}

interface HomeContextProps extends Home {
  setHomeData: (homeData: HomeData) => void;
}

enum HomeActionKind {
  UPDATE_HOME_DATA = 'UPDATE_HOME_DATA',
}

type HomeAction =
  | { type: HomeActionKind.UPDATE_HOME_DATA; payload: HomeData };

const HomeContext = createContext<HomeContextProps>({} as HomeContextProps);

const reducer = (state: Home, action: HomeAction) => {
  const { type, payload } = action;
  switch (type) {
    case HomeActionKind.UPDATE_HOME_DATA:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

function HomeDataContextProvider({ children }: { children: React.ReactNode }) {
  const setHomeData = useCallback((homeData: HomeData) => {
    dispatch({
      type: HomeActionKind.UPDATE_HOME_DATA,
      payload: homeData
    });
  }, []);

  const getHomeData = useCallback(() => {
    return axios.get('/api/home').then((res) => {
      return setHomeData(res.data.data)
    });
  }, [setHomeData])

  const initialState = {
    data: null,
  } as Home;

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getHomeData()
  }, [getHomeData])

  const value = useMemo(
    () => ({
      data: state.data,
      setHomeData
    }),
    [
      state.data,
      setHomeData
    ],
  );

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}

export { HomeContext, HomeDataContextProvider };
