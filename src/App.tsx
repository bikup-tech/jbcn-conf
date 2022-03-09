import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CodeOfConduct } from './views/CodeOfConduct/CodeOfConduct';
import Footer from './components/Footer/Footer';
import { HomeWrapper } from './views/Home/HomeWrapper';
import JobOffers from './views/JobOffers/JobOffers';
import MeetingDetailContainer from './views/MeetingDetail/MeetingDetailContainer';
import Navigation from './components/Navigation/Navigation';
import PageWrapper from './components/PageWrapper/PageWrapper';
import Schedule from './views/Schedule/Schedule';
import SpeakerDetailContainer from './views/SpeakerDetail/SpeakerDetailContainer';
import Speakers from './views/Speakers/Speakers';
import { Talks } from './views/Talks/Talks';
import styled from 'styled-components';

const StyledAppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

function App() {
  return (
    <StyledAppWrapper className='AppWrapperAll'>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/talks' component={Talks} />
          <Route path='/codeOfConduct' component={CodeOfConduct} />
          <PageWrapper>
            <Route path='/jobOffers' component={JobOffers} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/speakers' component={Speakers} />
            <Route
              path='/meetingDetail/:name'
              component={MeetingDetailContainer}
            />
            <Route
              path='/speakerDetail/:name'
              component={SpeakerDetailContainer}
            />
            <Route path='/' component={HomeWrapper} exact />
          </PageWrapper>
        </Switch>
        <Footer />
      </BrowserRouter>
    </StyledAppWrapper>
  );
}

export default App;
