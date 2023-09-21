import React from "react";
import styled from "styled-components";
import ResumeCardList from "./ResumeCardList";
import ResumeCard from "./ResumeCard";

const EducationContent = () => {
  return (
    <EducationContentContainer>
      <span>Education</span>
      <ResumeCardList>
        <ResumeCard
          title="Bachelor Degree"
          info="Comsats University Islamabad / 2018-2022"
          description="4 Years Bachelor Degree in Computer Sciences"
        />
         <ResumeCard
          title="Full Stack Web Development Certification"
          info="Udemy 2019"
          description="Learned and Master Full Stack Web Development using React, Node.js/Django, PostgreSQL and MongoDB"
        />
        <ResumeCard
          title="Machine Learning Certification"
          info="Udemy 2018"
          description="Learned and Master Machine Learning using TensorFlow, Keras and Pytorch"
        />
      </ResumeCardList>
    </EducationContentContainer>
  );
};

export default EducationContent;

const EducationContentContainer = styled.div`
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
