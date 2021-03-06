import { Colors } from "../../theme/types";
import { Login } from "../WalletModal/types";
import { ChainId } from './config'

export interface Language {
  code: string;
  language: string;
  locale: string;
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}

export interface NavTheme {
  background: string;
}

export interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
  status?: LinkStatus;
}

export interface MenuEntry {
  label: string;
  icon: string;
  items?: MenuSubEntry[];
  href: string;
  calloutClass?: string;
  initialOpenState?: boolean;
  status?: LinkStatus;
  isOpenNewTab?: boolean;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  luaPriceUsd?: number;
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  links: Array<MenuEntry>;
}

export type NetworkOption = {
  name: string,
  chainId: number,
  chainName: string
  nativeCurrency: {
    name: string,
    symbol: string,
    decimals: number,
  }
}
export interface NavProps extends PanelProps {
  account?: string;
  login: Login;
  profile?: Profile;
  chainId: ChainId;
  accountData: {
    luaUnlockAble: string;
    totalLuaLock: string;
  };
  logout: () => void;
  unlockLua: () => null;
  userEthBalance: number | string;
  isUnlock: boolean;
  connectNetwork: (option: NetworkOption) => void;
}