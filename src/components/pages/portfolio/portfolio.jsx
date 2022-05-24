import React from 'react';
import {Icon} from '@iconify/react';
import ProjectCard from '@helpers/projectCard';
import projectData from '@databases/projectData';
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
   PortfolioEmail,
   PortfolioProjects,
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
                     <PortfolioCardRole>mern developer</PortfolioCardRole>
                     <PortfolioEmail>pmfoysal@gmail.com</PortfolioEmail>
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
                     Hi, I am <strong>Foysal Ahmmed</strong>, a Bengali based Web Developer & Designer. Currently I am focusing on
                     MERN Stack Development, next will be FullStack Development. I have completed 12 years of education based on
                     educational system of Bangladesh. Last 1.5 years, I have learned many Languages, Tools & Technologies. I have
                     completed 55+ small projects recently and have 1.5 years of Coding Experience with Bug Fixing. My dream is to
                     work as a Software Engineer in the Computer Software Industry.
                  </PortfolioCardPara>
                  <PortfolioCardPara>
                     <span className='title'>my skills</span>
                     <br />
                     <strong>OS: </strong> Windows, Android. <br />
                     <strong>Languages: </strong> HTML, CSS, JavaScript, TypeScript, Markdown. <br />
                     <strong>CLI: </strong> CMD, Powershell, Git Bash, MongoDB Compass, Postman, ZSH. <br />
                     <strong>Hosting: </strong> GitHub Pages, Netlify, Firebase, Heroku. Database: MongoDB, Firebase. <br />
                     <strong>Authentication: </strong> Email, Google, Facebook, Github, Microsoft, Twitter. <br />
                     <strong>Authorization: </strong> JSON Web Token (JWT). <br />
                     <strong>Version Control: </strong> Git, GitHub. <br />
                     <strong>Library/Frameworks: </strong> SASS, Bootstrap, TailwindCSS, CSS Module, Styled Components, ReactJS,
                     ReduxJS, ExpressJS, NodeJS. <br />
                     <strong>Softwares: </strong> Adobe XD, PhotoShop, Illustrator, Figma, VS Code, Atom, Brackets, Sublime,
                     GitHub Desktop, Slack, Discord, MS Office.
                  </PortfolioCardPara>
                  <PortfolioCardPara>
                     <span className='title'>education</span>
                     <br />
                     <strong>higher secondary certificate (HSC)</strong>
                     <br />
                     <strong>institute: </strong> Milestone College, Dhaka. <br />
                  </PortfolioCardPara>
                  <PortfolioCardPara>
                     <span className='title'>my projects</span>
                  </PortfolioCardPara>
                  <PortfolioProjects>
                     {projectData.map(data => (
                        <ProjectCard data={data} key={data.id} />
                     ))}
                  </PortfolioProjects>
               </PortfolioCard>
            </MainContainer>
         </PortfolioContainer>
      </React.Fragment>
   );
}
