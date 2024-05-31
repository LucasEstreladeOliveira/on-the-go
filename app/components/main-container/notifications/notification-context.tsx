import { createContext, useCallback, useEffect, useMemo, useReducer } from 'react';
// import useNotifications from '@/app/hooks/use-notifications';
import axios from 'axios';

export interface Notification {
  comments: number;
  createAt: string;
  id: string;
  mensage: string;
  read: boolean;
}

interface Notifications {
  notifications: Notification[]
}

interface NotificationContextProps extends Notifications {
  setNotifications: (notifications: Notification[]) => void;
}

enum NotificationsActionKind {
  UPDATE_NOTIFICATIONS = 'UPDATE_NOTIFICATIONS',
}

type NotificationAction =
  | { type: NotificationsActionKind.UPDATE_NOTIFICATIONS; payload: Notification[] };

const NotificationContext = createContext<NotificationContextProps>({} as NotificationContextProps);

const reducer = (state: Notifications, action: NotificationAction) => {
  const { type, payload } = action;
  switch (type) {
    case NotificationsActionKind.UPDATE_NOTIFICATIONS:
      return {
        ...state,
        notifications: payload,
      };
    default:
      return state;
  }
};

function NotificationContextProvider({ children }: { children: React.ReactNode }) {
  const setNotifications = useCallback((notifications: Notification[]) => {
    dispatch({
      type: NotificationsActionKind.UPDATE_NOTIFICATIONS,
      payload: notifications
    });
  }, []);

  const getNotifications = useCallback(() => {
    return axios.get('/api/notifications').then((res) => {
      return setNotifications(res.data.data)
    });
  }, [setNotifications]) 

  const initialState = {
    notifications: [],
  } as Notifications;

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getNotifications()
  }, [getNotifications])

  const value = useMemo(
    () => ({
      notifications: state.notifications,
      setNotifications
    }),
    [
      state.notifications,
      setNotifications
    ],
  );

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
}

export { NotificationContext, NotificationContextProvider };
