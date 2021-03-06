import { COLOR_GREEN, COLOR_WHITE } from '../../styles/colors';

import { BIG_BREAKPOINT } from '../../constants/BreakPoints';
import { FC } from 'react';
import LessThanYellowIcon from '../../assets/images/LessThanYellowIcon.svg';
import emailIcon from '../../assets/images/emailIcon.svg';
import eventsIcon from '../../assets/images/eventsIcon.svg';
import facebookIcon from '../../assets/images/facebookIcon.svg';
import githubIcon from '../../assets/images/githubIcon.svg';
import linkedinIcon from '../../assets/images/linkedinIcon.svg';
import logo from '../../assets/images/NavigationLogo.svg';
import styled from 'styled-components';
import twitterIcon from '../../assets/images/twitterIcon.svg';
import { useHistory } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import youtubeIcon from '../../assets/images/youtubeIcon.svg';

const StyledFooterAbsoluteContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${COLOR_GREEN};
  position: relative;
  overflow: hidden;
  color: ${COLOR_WHITE};

  @media only screen and (min-width: 1100px) {
    padding: 1rem 2rem;
    flex-direction: row;
    justify-content: space-between;
    height: 7rem;
  }
`;

const StyledFooterItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
    width: 20%;
    height: 100%;
    margin-bottom: 0rem;
  }
`;

const StyledAbsoluteImg = styled.img`
  display: none;
  height: 9rem;
  position: absolute;
  left: 2rem;
  bottom: -2.5rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
  }
`;

export const StyledFlexCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFlexRow = styled.div<{ justify?: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  justify-content: center;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    justify-content: ${({ justify }) =>
      justify === 'center' ? 'center' : 'start'};
    margin-bottom: 0.25rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StyledFooterIcon = styled.img<{ noMargin?: boolean }>`
  height: 1.5rem;
  margin-right: ${({ noMargin }) => (noMargin ? '0' : '0.75rem')};

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    margin-right: ${({ noMargin }) => (noMargin ? '0' : '0.5rem')};
  }
`;

const StyledImg = styled.img`
  height: 4.5rem;
  cursor: pointer;
`;

const StyledSpan = styled.span`
  font-weight: 600;
`;

const Footer: FC = () => {
  const { width } = useWindowSize();

  const history = useHistory();

  function handleLogoClick() {
    history.push('/');
    window.scrollTo(0, 0);
  }

  return (
    <StyledFooterAbsoluteContainer className='Footer'>
      <StyledFooterContainer>
        <StyledFooterItem>
          <StyledAbsoluteImg src={LessThanYellowIcon} />
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFlexCol>
            <StyledFlexRow
              justify={width < BIG_BREAKPOINT ? 'center' : 'flex-start'}
            >
              <StyledLink target={'_blank'} href='www.google.com'>
                <StyledFooterIcon src={twitterIcon} />
              </StyledLink>
              <StyledLink target={'_blank'} href='www.google.com'>
                <StyledFooterIcon src={youtubeIcon} />
              </StyledLink>
              <StyledLink target={'_blank'} href='www.google.com'>
                <StyledFooterIcon src={facebookIcon} />
              </StyledLink>
              <StyledLink target={'_blank'} href='www.google.com'>
                <StyledFooterIcon src={githubIcon} />
              </StyledLink>
              <StyledLink target={'_blank'} href='www.google.com'>
                <StyledFooterIcon src={linkedinIcon} />
              </StyledLink>
            </StyledFlexRow>
            <StyledFlexRow>
              <StyledLink href='mailto:info@barcelonajug.com'>
                <StyledFooterIcon src={emailIcon} />
                info@barcelonajug.com
              </StyledLink>
            </StyledFlexRow>
          </StyledFlexCol>
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledImg src={logo} onClick={handleLogoClick} />
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFlexCol>
            <StyledFlexRow>
              <StyledFooterIcon src={eventsIcon} />
              <StyledSpan>EVENTS</StyledSpan>
            </StyledFlexRow>
            <StyledFlexRow>
              <StyledLink
                target={'_blank'}
                href='https://meetup.com/BarcelonaJUG'
              >
                meetup.com/BarcelonaJUG
              </StyledLink>
            </StyledFlexRow>
            <StyledFlexRow>
              <StyledLink target={'_blank'} href='https://barcelonajug.org'>
                barcelonajug.org
              </StyledLink>
            </StyledFlexRow>
          </StyledFlexCol>
        </StyledFooterItem>
        <StyledFooterItem></StyledFooterItem>
      </StyledFooterContainer>
    </StyledFooterAbsoluteContainer>
  );
};

export default Footer;
