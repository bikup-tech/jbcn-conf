import { FC } from 'react';
import TitleSection from '../../components/SectionTitle/TitleSection';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import {
  COLOR_BLACK_BLUE,
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_YELLOW,
} from '../../styles/colors';
import styled from 'styled-components';
import MoreThanBlueWhiteIcon from '../../assets/images/LessThanBlueWhiteIcon.svg';
import LessThanBlueWhiteIcon from '../../assets/images/MoreThanBlueWhiteIcon.svg';
import { useWindowSize } from 'react-use';
import {
  BIG_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../constants/BreakPoints';
import SpeakersWelcomer from '../../assets/images/SpeakersWelcomer.jpg';
import SpeakersPlanning from '../../assets/images/SpeakersPlanning.jpg';
import { Link } from 'react-router-dom';

const StyledScheduleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 2rem;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 0 5rem;
  }
  @media (min-width: ${BIG_BREAKPOINT}px) {
    padding: 0 10rem;
  }
`;

const StyledLessIcon = styled.img`
  position: absolute;
  left: -1rem;
  top: 0;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

const StyledMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 0;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

const StyledScheduleContainer = styled.div`
  padding-top: 3rem;
  width: 100%;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding-top: 5rem;
  }
`;

const StyledTracksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledTrack = styled.div<{
  background: string;
  color: string;
  width: string;
}>`
  width: ${({ width }) => {
    return width;
  }};
  padding: 0.5rem 0;
  background: ${({ background }) => {
    return background;
  }};
  color: ${({ color }) => {
    return color;
  }};
  font-family: SpaceGrotesk-Bold;
`;

const StyledWelcomerImage = styled.div`
  width: 100%;
  height: 5rem;
  background-image: url(${SpeakersWelcomer});
  background-size: cover;
  background-position: center center;
  position: relative;
  margin-top: 1rem;
`;

const StyledWelcomerTextContainer = styled.div`
  position: absolute;
  bottom: 0.25rem;
  left: 0.5rem;
`;

const StyledWelcomerText = styled.p<{ color: string }>`
  color: ${({ color }) => {
    return color;
  }};
  font-family: SpaceGrotesk-Bold;
  text-align: start;
`;

const StyledWelcomerTextLink = styled.p<{ color: string }>`
  color: ${({ color }) => {
    return color;
  }};
  font-family: SpaceGrotesk-Bold;
  text-align: start;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledPlanningImage = styled.div`
  width: 100%;
  height: 10rem;
  background-image: url(${SpeakersPlanning});
  background-size: cover;
  background-position: center center;
  position: relative;
  margin: 1rem 0;
`;

const Schedule: FC = ({}) => {
  const { width } = useWindowSize();

  return (
    <SectionWrapper color={COLOR_WHITE} marginTop={6}>
      <StyledScheduleSection>
        <TitleSection
          title='SCHEDULE'
          subtitle='Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP.'
          color={COLOR_BLUE}
        />
        {width > MOBILE_BREAKPOINT && (
          <>
            <StyledLessIcon src={LessThanBlueWhiteIcon} />
            <StyledMoreIcon src={MoreThanBlueWhiteIcon} />
          </>
        )}

        {/* TODO:
        - siguiente igual
        - igual que el TRACK 3 con width 100% */}
        <StyledScheduleContainer>
          <StyledTracksContainer>
            <StyledTrack
              width={'30%'}
              background={COLOR_PINK}
              color={COLOR_WHITE}
            >
              TRACK 1
            </StyledTrack>
            <StyledTrack
              width={'30%'}
              background={COLOR_YELLOW}
              color={COLOR_BLUE}
            >
              TRACK 2
            </StyledTrack>
            <StyledTrack
              width={'30%'}
              background={COLOR_GREEN}
              color={COLOR_BLACK_BLUE}
            >
              TRACK 3
            </StyledTrack>
          </StyledTracksContainer>
          <StyledWelcomerImage>
            <StyledWelcomerTextContainer>
              <StyledWelcomerText color={COLOR_YELLOW}>
                WELCOME ALL!
              </StyledWelcomerText>
              <StyledWelcomerText color={COLOR_PINK}>
                08:40 - 09:00
              </StyledWelcomerText>
            </StyledWelcomerTextContainer>
          </StyledWelcomerImage>
          <StyledPlanningImage>
            <StyledWelcomerTextContainer>
              <StyledWelcomerText color={COLOR_BLUE}>
                THE FUTURE IS
              </StyledWelcomerText>
              <StyledWelcomerText color={COLOR_BLUE}>
                KUBERNETES-NATIVE
              </StyledWelcomerText>
              <Link to='/GraceJansen' className='link--text'>
                <StyledWelcomerTextLink color={COLOR_PINK}>
                  Grace Jansen
                </StyledWelcomerTextLink>
              </Link>
              <StyledWelcomerText color={COLOR_BLUE}>
                08:40 - 09:00
              </StyledWelcomerText>
            </StyledWelcomerTextContainer>
          </StyledPlanningImage>
          <StyledTrack
            width={'100%'}
            background={COLOR_GREEN}
            color={COLOR_BLACK_BLUE}
          >
            TRACK 1
          </StyledTrack>
          <StyledTracksContainer></StyledTracksContainer>
        </StyledScheduleContainer>
      </StyledScheduleSection>
    </SectionWrapper>
  );
};

export default Schedule;
