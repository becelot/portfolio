import {withTranslation, WithTranslation} from "react-i18next";
import React from "react";
import {
    ProjectCard,
    ProjectCardContent, ProjectPreviewButton,
    TechnologyBadge,
    TechnologyBadgeWrapper,
    TechnologyBar
} from "./components";
import {Button, CardMedia, Divider, Typography} from "@material-ui/core";
import {faAngleDown, faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import StaggerInView from "../../utils/StaggerInView";
import FlipInX from "../../animations/FlipInX";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";
import media from "../../utils/media";


export interface AdvancedSourceControl {
    link: string;
    name: string;
    icon: IconProp;
    iconSize?: "4x" | "lg" | "xs" | "sm" | "1x" | "2x" | "3x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x" | undefined;
}

export interface ProjectLayoutProps {
    image: string;
    technologyBadges: string[];
    projectPrefix: string;
    livePreview?: string;
    sourcePreview?: string | Array<AdvancedSourceControl>;
}

const ProjectLeftColumn = styled.div`
  flex: 0 0 0;
  
  ${media.greaterThan('large')`
      flex: 0 0 500px;
      border-right: 2px solid #e7e7e7;
      box-shadow: 3px 0 20px 0 #e7e7e7;
  `}
  
  
`;


const ProjectContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  
  ${media.lessThan('large')`
    flex-direction: column;
    align-items: center;
  `}
`;

const ProjectHeader: React.FC = ({children}) => {
    return (
        <>
            <Typography variant={'h6'} style={{fontWeight: 'bold', color: '#008073', margin: '0.5rem'}}>{children}</Typography>
            <Divider style={{margin: '-5px 0 5px 0'}}/>
        </>
    );
};

const ProjectBig = styled.div`
  
  ${media.lessThan('large')`display: none;`}
  ${media.greaterThan('large')`display: block;`}
`;

const ProjectSmall = styled.div`
  width: 100%;
  text-align: center;
  
  ${media.lessThan('large')`display: block;`}
  ${media.greaterThan('large')`display: none;`}
`;

const TechnologyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 0 0 400px;
  
  ${media.lessThan('small')`
    flex: 0 0 300px;
  `}
`;

const ProjectLayout: React.FC<WithTranslation & ProjectLayoutProps> = ({t, children, image, technologyBadges, projectPrefix, livePreview, sourcePreview}) => {

    return (
        <ProjectCard>
            <ProjectContent>
                <ProjectSmall><ProjectHeader>{t(`projects.${projectPrefix}.name`)}</ProjectHeader></ProjectSmall>
                <ProjectLeftColumn>
                    <CardMedia
                        component='img'
                        image={image}
                        alt={'Project'}
                        style={{objectFit: 'contain', width: '100%', maxHeight: '370px'}}
                    />
                    <div style={{flex: '0 0 0', display: 'flex', justifyContent: 'space-evenly', margin: '1rem 0'}}>
                        <ProjectPreviewButton url={livePreview} tooltip={t(`projects.${projectPrefix}.live_nda`)} icon={faEye}>Live Preview</ProjectPreviewButton>
                        <ProjectPreviewButton url={sourcePreview} tooltip={t(`projects.${projectPrefix}.source_nda`)} icon={faCodeBranch}>Source Code</ProjectPreviewButton>
                    </div>
                    <ProjectBig>
                        <div style={{flex: '0 0 0', padding: '16px', fontWeight: 550}}>
                            Used technology
                        </div>

                        <div style={{flex: '0 0 0',  paddingLeft: '16px', justifyContent: 'center', display: 'flex'}}>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', flex: '0 0 400px'}}>
                                {technologyBadges.map(badge => (<TechnologyBadge key={badge} label={badge} />))}
                            </div>
                        </div>
                    </ProjectBig>

                </ProjectLeftColumn>
                <div style={{flex: '3 1 0'}}>
                    <ProjectCardContent>
                        <ProjectBig><ProjectHeader>{t(`projects.${projectPrefix}.name`)}</ProjectHeader></ProjectBig>
                        {children}
                    </ProjectCardContent>
                </div>
                <ProjectSmall>
                    <div style={{flex: '0 0 0', padding: '16px', fontWeight: 550}}>
                        Used technology
                    </div>

                    <div style={{flex: '0 0 0',  paddingLeft: '16px', justifyContent: 'center', display: 'flex', textAlign: 'left', marginBottom: '10px'}}>
                        <TechnologyGrid>
                            {technologyBadges.map(badge => (<TechnologyBadge key={badge} label={badge} />))}
                        </TechnologyGrid>
                    </div>
                </ProjectSmall>
            </ProjectContent>
        </ProjectCard>
    );
};


export default withTranslation()(ProjectLayout);
