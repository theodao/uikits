import React from "react";
import styled from 'styled-components'
import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };
const FlexWrapper = styled(Flex)`
  background-color: #353535;
  border-radius: 50px;
  padding: 14px;
  width: 50%;
`

const SocialLinks: React.FC = () => (
  <FlexWrapper>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "24px", color: "#FFFFFF", style: { cursor: "pointer" } };
      const mr = index < socials.length - 1 ? "24px" : 0;
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <Icon {...iconProps} />
        </Link>
      );
    })}
  </FlexWrapper>
);

export default React.memo(SocialLinks, () => true);
