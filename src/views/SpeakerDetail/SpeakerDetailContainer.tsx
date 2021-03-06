import { COLOR_BLUE, COLOR_WHITE } from '../../styles/colors';

import { FC } from 'react';
import NotFoundError from '../../components/NotFoundError/NotFoundError';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SpeakerDetail from './SpeakerDetail';
import { TABLET_BREAKPOINT } from '../../constants/BreakPoints';
import { findSpeaker } from './SpeakerDetailData';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyledContainer = styled.div`
  background-color: ${COLOR_BLUE};
`;

const StyledWaveContainer = styled.div`
  background: ${COLOR_WHITE};
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    height: 10rem;
  }
`;

const SpeakerDetailContainer: FC = () => {
  const { name } = useParams<{ name: string }>();

  let speakerData = findSpeaker(name);
  return (
    <StyledContainer>
      <SectionWrapper color={COLOR_BLUE} marginTop={4}>
        {speakerData ? (
          <SpeakerDetail speaker={speakerData} />
        ) : (
          <NotFoundError message='Speaker' />
        )}
      </SectionWrapper>
      <StyledWaveContainer>
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d='M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z'
            style={{ stroke: 'none', fill: '#0496ff' }}
          ></path>
        </svg>
      </StyledWaveContainer>
    </StyledContainer>
  );
};

export default SpeakerDetailContainer;
