import React from "react";
import styled from 'styled-components'
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import TranslateIcon from "../../../components/Svg/Icons/TranslateIcon";
import { Language } from "../types";
import MenuButton from "./MenuButton";

const ButtonWrapper = styled(Button)`
  background-color: #353535;
  border-radius: 50px;
  padding: 14px;
  width: 100%;
`
interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => (
  <Dropdown
    position="top-right"
    target={
      <ButtonWrapper variant="text" startIcon={<TranslateIcon color="#FFFFFF" width="24px" />}>
        <Text color="#FFFFFF">{currentLang?.toUpperCase()}</Text>
      </ButtonWrapper>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
