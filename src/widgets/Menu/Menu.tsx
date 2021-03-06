import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Dropdown } from "../../components/Dropdown";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import Panel from "./components/Panel";
import UserBlock from "./components/UserBlock";
import { NavProps, NetworkOption } from "./types";
import Avatar from "./components/Avatar";
import {
  MENU_HEIGHT,
  SIDEBAR_WIDTH_REDUCED,
  SIDEBAR_WIDTH_FULL,
  NETWORK_LABELS,
  supportedWalletOption,
  ChainId,
} from "./config";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const NetworkOptionStyle = styled.div`
  cursor: pointer;
  padding: 5px 0px;
  font-size: 14px;
`;

export const YellowCard = styled.div`
  box-sizing: border-box;
  margin: 0px 5px 0px 0px;
  background-color: rgba(225, 169, 63, 0.3);
  color: #fabc46;
  font-weight: 600;
  border-radius: 16px;
  height: 100%;
  font-size: 14px;
  padding: 8px 16px;
  transition: background-color 0.2s, opacity 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }

  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: #353535;
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  chainId,
  connectNetwork,
  langs,
  setLang,
  currentLang,
  luaPriceUsd,
  links,
  userEthBalance,
  accountData,
  unlockLua,
  isUnlock,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentOffset = window.pageYOffset;
  //     const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
  //     const isTopOfPage = currentOffset === 0;
  //     // Always show the menu when user reach the top
  //     if (isTopOfPage) {
  //       setShowMenu(true);
  //     }
  //     // Avoid triggering anything at the bottom because of layout shift
  //     else if (!isBottomOfPage) {
  //       if (currentOffset < refPrevOffset.current) {
  //         // Has scroll up
  //         setShowMenu(true);
  //       } else {
  //         // Has scroll down
  //         setShowMenu(false);
  //       }
  //     }
  //     refPrevOffset.current = currentOffset;
  //   };
  //   const throttledHandleScroll = throttle(handleScroll, 200);

  //   window.addEventListener("scroll", throttledHandleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", throttledHandleScroll);
  //   };
  // }, []);

  const handleChooseNetwork = (option: NetworkOption) => {
    // if (chainId !== queryChainId && queryChainId) {
    //   const queryOption = supportedWalletOption.find(opt => opt.chainId === queryChainId)
    //   if (queryOption) {
    //     connectNetwork(queryOption)
    //   }
    //   return
    // }
    connectNetwork(option);
  };

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <Flex>
          {account && (
            <Dropdown target={<YellowCard>{NETWORK_LABELS[chainId]}</YellowCard>}>
              {supportedWalletOption
                .filter((option) => option.name !== NETWORK_LABELS[chainId])
                .map((option) => {
                  return (
                    <NetworkOptionStyle onClick={() => handleChooseNetwork(option)}>{option.name}</NetworkOptionStyle>
                  );
                })}
            </Dropdown>
          )}
          <UserBlock
            account={account}
            login={login}
            logout={logout}
            chainId={chainId}
            userEthBalance={userEthBalance}
            accountData={accountData}
            unlockLua={unlockLua}
            isUnlock={isUnlock}
          />
          {/* {profile && <Avatar profile={profile} />} */}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          luaPriceUsd={luaPriceUsd}
          pushNav={setIsPushed}
          links={links}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
