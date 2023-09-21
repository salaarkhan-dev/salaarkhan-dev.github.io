import React from "react";
import styled from "styled-components";
import ResumeCardList from "./ResumeCardList";
import ResumeCard from "./ResumeCard";

const ExperienceContent = () => {
  return (
    <ExperienceContentContainer>
      <span>Experience</span>
      <ResumeCardList>
      <ResumeCard
          title="Full Stack Web Developer"
          info={`12 Tech / 2023-Present`}
          description="Full Stack Web Developer at 12 Tech using React, Angular, NestJS/Django, PostgreSQL, AWS."
        />
        <ResumeCard
          title="Full Stack Web Developer"
          info={`Cybersoft Vantage (CSV) / 2022-2023`}
          description="Team Lead / Full Stack Web Developer using React, Angular, NestJS/Django, PostgreSQL."
        />
        <ResumeCard
          title="Machine Learning / Full Stack Web Developer"
          info={`Fiverr / 2019-2022`}
          description="FreeLance as Machine Learning Engineer and Full Stack Web Developer."
        />
      </ResumeCardList>
    </ExperienceContentContainer>
  );
};

export default ExperienceContent;

const ExperienceContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.secondary};

    @media (max-width: 767.98px) {
      font-size: 20px;
    }
    @media (max-width: 479.98px) {
      font-size: 18px;
    }
  }
`;
