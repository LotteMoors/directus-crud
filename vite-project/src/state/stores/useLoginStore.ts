/* eslint-disable @typescript-eslint/ban-types */
import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

type Login = {
  access_token: string;
  expires: number;
  refresh_token: string;
};

interface UsePersistentZustandStoreInterface {
  login: Login;
  setLogin: Function;
  resetLogin: Function;
}

export const useLoginStore = create(
  persist<UsePersistentZustandStoreInterface>(
    set => ({
      login: {access_token: "", expires: 0, refresh_token: ""},
      setLogin: (login: Login) =>
        set(() => ({
          login: {access_token: login.access_token, expires: login.expires, refresh_token: login.refresh_token},
        })),
      resetLogin: () => set({login: {access_token: "", expires: 0, refresh_token: ""}}),
    }),
    {
      name: "zustandStore", // unique name
      storage: createJSONStorage(() => window.localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
