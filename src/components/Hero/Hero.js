import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my personal portfolio
      </SectionTitle>
      <SectionText>
        I am a software engineer with an insane passion for frontend solutions. I help businesses and companies to translate ideas into real solutions.
      </SectionText>
      <Button onClick={(e) => { window.location.href = '#projects'; }} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
