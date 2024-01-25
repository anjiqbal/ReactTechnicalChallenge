import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import userData from '../../userData.json';

interface AppContextProps {
  children: ReactNode;
}

interface UserData {
  birthday: number;
  gender: string;
  id: number;
  region: string;
  spend: number;
}
interface AppState {
  initialData: UserData[];
  genderFilter: string;
  regionFilter: string;
  minimumSpendFilter: number;
  data: UserData[];
  openDropdown: boolean;
  dropdownValue: string | null;
  regions: {label: string; value: string}[];
  totalMonthlySpend: number[];
}

interface AppContextValue {
  state: AppState;
  setState: Dispatch<SetStateAction<AppState>>;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);
export const AppProvider: React.FC<AppContextProps> = ({children}) => {
  const [state, setState] = useState<AppState>({
    initialData: userData,
    genderFilter: 'All',
    regionFilter: '',
    minimumSpendFilter: 0,
    data: [],
    openDropdown: false,
    dropdownValue: null,
    regions: [
      {label: 'United States', value: 'United States'},
      {label: 'Europe', value: 'Europe'},
      {label: 'APAC', value: 'APAC'},
      {label: 'Latin America', value: 'Latin America'},
    ],
    totalMonthlySpend: [],
  });
  return (
    <AppContext.Provider value={{state, setState}}>
      {children}
    </AppContext.Provider>
  );
};
