import React from "react";
import { FaAws, FaChalkboardTeacher, FaFigma, FaReact } from "react-icons/fa";
import { SiDjango, SiDocker, SiNestjs } from "react-icons/si";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <ServiceListContainer>
      <ServiceCard
        Icon={<FaReact size={65} />}
        title="React / Next / GraphQL"
        description="Develop Frontend applications using React, Next, Redux, GraphQL and TypeScript"
      />
      <ServiceCard
        Icon={<SiNestjs size={65} />}
        title="Nest / Node / Prisma"
        description="Develop restful APIs using Nest, Prisma, PostgreSQL and GraphQL"
      />
      <ServiceCard
        Icon={<SiDjango size={65} />}
        title="Django"
        description="Develop backend applications using Django/Django Rest Framework"
      />
      <ServiceCard
        Icon={<FaAws size={65} />}
        title="AWS"
        description="Develop backend applications using AWS services like EC2, S3, DynamoDB, CloudFront"
      />
      <ServiceCard
        Icon={<SiDocker size={65} />}
        title="Docker"
        description="Deploy backend applications using Docker"
      />
      <ServiceCard
        Icon={<FaFigma size={65} />}
        title="Figma"
        description="Design UI using Figma and Adobe XD"
      />
    </ServiceListContainer>
  );
};

export default ServiceList;

const ServiceListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 45px;

  @media (max-width: 424.98px) {
    gap: 20px;
  }
`;
