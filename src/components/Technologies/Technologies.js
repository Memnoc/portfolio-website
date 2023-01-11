import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    {/* <SectionDivider /> */}
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a r ange of technologies in the web development world. From Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end
          </ListTitle>
          <ListParagraph>Experience with <br />
            React.js
            Astro
            Redux
            Zendesk Garden
            Tailwind
            Bootstrapx
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Backend-end
          </ListTitle>
          <ListParagraph>Experience with <br />
            Node.js
            Ruby
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem' />
        <ListContainer>
          <ListTitle>UI/UX
          </ListTitle>
          <ListParagraph>Experienced with<br />
            Tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
