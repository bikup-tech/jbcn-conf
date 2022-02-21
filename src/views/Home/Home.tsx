import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import HomeImage from '../../assets/images/HomeImage.jpg';
import Navigation from '../../components/Navigation/Navigation';
import HamburgerIcon from '../../assets/images/HamburgerIcon.svg';
import {
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../styles/colors';
import Countdown from 'react-countdown';
import TimeCountDown from './components/TimeCountdown';
import LessThanIcon from '../../assets/images/LessThanIcon.svg';
import { useWindowSize } from 'react-use';
import { TABLET_BREAKPOINT } from '../../constants/BreakPoints';

export const StyledMenuIcon = styled(motion.img)`
  position: absolute;
  top: 2rem;
  right: 3rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const StyleHomeContainer = styled.div`
  position: relative;
  background-image: url(${HomeImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTitleContainer = styled.div`
  background-color: ${COLOR_GREEN};
  width: fit-content;
  margin-bottom: 1rem;
`;

const StyledTitle = styled.h1`
  padding: 0.5rem 1rem;
  color: ${COLOR_WHITE};
  font-family: SpaceGrotesk;
`;

const StyledSubtitle = styled.h2`
  color: ${COLOR_PINK};
  font-family: SpaceGrotesk-Light;
  font-size: 1.25rem;
`;

const StyledLessThan = styled(motion.img)`
  height: 7rem;
  position: absolute;
  top: 50%;
  left: 5rem;
  animation: StyledLessThanAnimation 6s infinite linear;

  @keyframes StyledLessThanAnimation {
    0% {
      transform: rotate(0deg) translate(-20px) rotate(0deg);
    }
    80% {
      transform: rotate(360deg) translate(-20px) rotate(-360deg);
    }
    90% {
      transform: translate(-5px);
    }
    100% {
      transform: translate(-20px);
    }
  }
`;

const StyledBottomSlash = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`;

const StyledTopSlash = styled(motion.div)`
  position: absolute;
  bottom: 48%;
  right: 0;
  height: 2rem;
  width: 25%;
`;

const StyledGreenSlash = styled(motion.p)`
  font-family: 'SpaceGrotesk-Bold';
  color: ${COLOR_GREEN};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;

const StyledBlueSlash = styled(motion.p)`
  font-family: 'SpaceGrotesk-Bold';
  color: ${COLOR_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;

const Home: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  function handleSetMenu() {
    setIsOpen(!isOpen);
  }

  const startDay = '2022-05-26T00:00:00';
  return (
    <>
      <Navigation isOpened={isOpen} setMenu={handleSetMenu} />
      <StyleHomeContainer>
        <StyledMenuIcon
          onClick={handleSetMenu}
          src={HamburgerIcon}
          whileTap={{ scale: 0.8 }}
        />
        <StyledTitleContainer>
          <StyledTitle>JBCNConf 2022</StyledTitle>
        </StyledTitleContainer>
        <StyledSubtitle>27 - 28 - 29 May</StyledSubtitle>
        <StyledSubtitle>JVM & Tech</StyledSubtitle>
        <Countdown date={startDay} renderer={TimeCountDown} />

        {width > TABLET_BREAKPOINT && <StyledLessThan src={LessThanIcon} />}
        <StyledTopSlash
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 4 }}
        >
          <StyledGreenSlash>
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{' '}
          </StyledGreenSlash>
        </StyledTopSlash>
        <StyledBottomSlash
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 6 }}
        >
          <StyledBlueSlash>
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{' '}
          </StyledBlueSlash>
        </StyledBottomSlash>
        {/* 
        TODO: PEDIR A PARIBAS:
          - Links enlace menu
          - Logo amarillo
          - Imagen de la parte de FAQS

          TODO desarrollo:
          - El header (sus animaciones, el posicionamiento y el poner el logo a la izquierda cuando se haga scroll)
      */}
      </StyleHomeContainer>
    </>
  );
};

export default Home;
