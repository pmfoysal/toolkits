import React from 'react';
import {Icon} from '@iconify/react';
import MainContainer from '@shared/mainContainer';
import {
   PortfolioCard,
   PortfolioCardIcon,
   PortfolioCardIcons,
   PortfolioCardImage,
   PortfolioCardLeft,
   PortfolioCardName,
   PortfolioCardPara,
   PortfolioCardRole,
   PortfolioContainer,
   PortfolioContent,
} from './portfolio.styled';

export default function Portfolio() {
   return (
      <React.Fragment>
         <PortfolioContainer>
            <MainContainer>
               <PortfolioCard>
                  <PortfolioCardLeft>
                     <PortfolioCardImage src='https://avatars.githubusercontent.com/u/79983010?v=4' alt='site-author' />
                     <PortfolioCardName>foysal ahmmed</PortfolioCardName>
                     <PortfolioCardRole>react developer</PortfolioCardRole>
                     <PortfolioCardIcons>
                        <PortfolioCardIcon href='https://facebook.com/pmfoysalz' target='_blank'>
                           <Icon icon='cib:facebook-f' />
                        </PortfolioCardIcon>
                        <PortfolioCardIcon href='https://linkedin.com/in/pmfoysal' target='_blank'>
                           <Icon icon='cib:linkedin-in' />
                        </PortfolioCardIcon>
                        <PortfolioCardIcon href='https://instagram.com/pmfoysal' target='_blank'>
                           <Icon icon='cib:instagram' />
                        </PortfolioCardIcon>
                        <PortfolioCardIcon href='https://twitter.com/pmfoysal' target='_blank'>
                           <Icon icon='cib:twitter' />
                        </PortfolioCardIcon>
                        <PortfolioCardIcon href='https://github.com/pmfoysal' target='_blank'>
                           <Icon icon='cib:github' />
                        </PortfolioCardIcon>
                     </PortfolioCardIcons>
                  </PortfolioCardLeft>
                  <PortfolioCardPara>
                     <span className='title'>about me</span>
                     <br />
                     Hi, I am <span className='name'>Foysal Ahmmed</span>, a Bengali based Web Developer & Designer. Currently I
                     am focusing on Full Stack & MERN Stack Development. I have completed 12 years of education based on Science
                     Department. Last 1.5 years I have learned many Languages, Tools & Technologies like HTML, CSS, JavaScript,
                     ReactJS, NodeJS, ExpressJS, MongoDB, GitHub, Netlify, Yarn, NPM, Visual Studio Code etc. I have completed 55+
                     projects with the help of these Technologies. I have 1.5+ years of Coding Experience with Bug Fixing. I have
                     few knowledge about Java, Android Studio, NextJS, ReduxJS. I am an experienced Web Development Specialist
                     with a demonstrated history of working in the Computer Software Industry!
                  </PortfolioCardPara>
               </PortfolioCard>
            </MainContainer>
         </PortfolioContainer>
      </React.Fragment>
   );
}
