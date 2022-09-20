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
  randomizePlayers: () => void;
  randomPlayers: IPlayer[][];
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
  const [randomPlayers, setRandomPlayers] = useState<IPlayer[][]>([]);

  const loadPlayers = useCallback(async () => {
    try {
      const response = await api.get("/user");
      setPlayers(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const randomizePlayers = () => {
    const playersCopy = [...players];

    const randomized = playersCopy
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    const makePairs = randomized.reduce(function (
      result: IPlayer[][],
      value,
      index,
      array
    ) {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    },
    []);

    setRandomPlayers(makePairs);
  };

  return (
    <PlayerContext.Provider
      value={{ players, loadPlayers, randomizePlayers, randomPlayers }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export { usePlayers, PlayerProvider };
