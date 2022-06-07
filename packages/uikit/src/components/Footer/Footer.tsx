import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import { Heading } from "../Heading";
import { Image } from "../Image";



import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledText,
  StyledSocialLinks,
  StyledToolsContainer,
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";
import { footerLinks } from "./config";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 0px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon isDark width="130px" />
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={isHighlighted ? baseColors.warning : darkColors.text}
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))}
          <Box display={["none", null, "block"]}>
            <LogoWithTextIcon isDark width="250px" />
            <StyledSocialLinks mt={"50px"} order={[2]} pb={["42px", null, "32px"]} pl={"20px"} mb={["0", null, "32px"]} />
          </Box>
          <Flex pt={ "30px"} flexDirection="column">

            {/*<Heading as="h2" color="textSubtle" mb={"20px"} textDecoration="underline">Important Links</Heading>*/}
            {footerLinks.map((item) => (
               <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle" fontWeight={"400"} mr={"15px"}>
                 {item.label}
               </Link>
            ))}
          </Flex>
          <Flex pt={ "30px"} flexDirection="column">
           <Image src="https://smexswap.com/assets/img/footer-logo.svg" mb="10px" width={20} height={20} />
           <Image src="/smp.png" mb="10px" width={20} height={20} />

          <Link external  color="textSubtle" fontWeight={"400"} mr={"15px"}>
          Total supply: 210,008,316 SMEx
          </Link>
          <Link external  color="textSubtle" fontWeight={"400"} mr={"15px"}>
          Circulating supply: 210,008,316 SMEx
          </Link>
          <Link external  color="textSubtle" fontWeight={"400"} mr={"15px"}>
          Total Burned: 0 SMEx
          </Link>
          <Link external  color="textSubtle" fontWeight={"400"} mr={"15px"}>
          Market Cap: $343,921.04
          </Link>
          <Link external  color="textSubtle" fontWeight={"400"} mr={"15px"}>
          Liquidity Locked: $ 
          </Link>
          </Flex>
        </Flex>
       
     {/*   <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[2, null, 1]} alignItems="center">
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color={darkColors.textSubtle as keyof Colors}
              dropdownPosition="top-right"
            />
          </Flex>
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            <Box mr="20px">
              <CakePrice cakePriceUsd={cakePriceUsd} color={darkColors.textSubtle as keyof Colors} />
            </Box>
            <Button
              as="a"
              href="https://pancakeswap.finance/swap?outputCurrency=0x4FfBd1Db04955e309747608e662AddA304c338BC"
              target="_blank"
              scale="sm"
              endIcon={<ArrowForwardIcon color={lightColors.backgroundAlt} />}
            >
              {buyCakeLabel}
            </Button>
          </Flex>
        </StyledToolsContainer>*/}
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
