// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { useQueryClient } from "react-query";
import { useGetUser } from "hooks/auth.hooks";
import { IUser } from "types";

type SetUserType = React.Dispatch<React.SetStateAction<IUser | null>>;
type AuthContextType = {
  user: IUser | null;
  setUser: SetUserType;
};

const AuthContext = React.createContext<AuthContextType | null>(null);
AuthContext.displayName = "AuthContext";

export const AuthProvider: React.FC = (props) => {
  const queryClient = useQueryClient();
  const { data, status, error } = useGetUser();
  const [user, setUser] = React.useState<IUser | null>(() => {
    try {
      return queryClient.getQueryData("user") || null;
    } catch (e) {
      return null;
    }
  });

  const value = React.useMemo((): AuthContextType => ({ user, setUser }), [
    user,
  ]);

  React.useEffect(() => {
    if (status === "success" && data) {
      setUser(data);
    }
    return () => setUser(null);
  }, [status, data]);

  if (["loading", "idle"].includes(status)) {
    return (
      <div
        css={`
          position: fixed;
          top: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          background: var(--body-background);
        `}
      >
        <p>Loading...</p>
      </div>
    );
  }

  if (status === "error") {
    console.log(error);
  }

  return <AuthContext.Provider value={value} {...props} />;
};

export function useAuth(): AuthContextType {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`Using useAuth outside of <AuthProvider />.`);
  }
  return context as AuthContextType;
}
