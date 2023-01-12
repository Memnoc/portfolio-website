import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Matteo Genesio Stara <br />
        personal portfolio
      </SectionTitle>
      <SectionText>
        I use technology to help customers have the best product experience while solving critical issues by automating their workflows.
      </SectionText>
      {/* <Button onClick={(e) => { window.location.href = '#projects'; }}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
