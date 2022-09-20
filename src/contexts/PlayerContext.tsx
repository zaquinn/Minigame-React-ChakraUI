import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services/api";

interface IPlayerProviderProps {
  children: ReactNode;
}

interface ICountryFlag {
  id: number;
  country: string;
  flag: string;
}

interface IPlayer {
  id: number;
  username: string;
  avatar: string;
  nationality: string;
  created_at: Date;
  updated_at: Date;
  countryFlag: ICountryFlag;
}

interface IPlayerContextData {
  players: IPlayer[];
  loadPlayers: () => Promise<void>;
}

const PlayerContext = createContext<IPlayerContextData>(
  {} as IPlayerContextData
);

const usePlayers = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("usePlayers must be used within an PlayerProvider");
  }
  return context;
};

const PlayerProvider = ({ children }: IPlayerProviderProps) => {
  const [players, setPlayers] = useState<IPlayer[]>([]);

  const loadPlayers = useCallback(async () => {
    try {
      const response = await api.get("/user");
      setPlayers(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <PlayerContext.Provider value={{ players, loadPlayers }}>
      {children}
    </PlayerContext.Provider>
  );
};

export { usePlayers, PlayerProvider };
