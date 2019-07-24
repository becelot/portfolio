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
  flex: 2 1 0;
  max-width: 500px;
`;

const ProjectLayout: React.FC<WithTranslation & ProjectLayoutProps> = ({t, children, image, technologyBadges, projectPrefix, livePreview, sourcePreview}) => {

    return (
        <ProjectCard>
            <div style={{height: '100%', display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: '2 1 0', maxWidth: '500px', borderRight: '2px solid #e7e7e7', boxShadow: '3px 0 20px 0 #e7e7e7'}}>
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
                    <div style={{flex: '0 0 0', padding: '16px', fontWeight: 550}}>
                        Used technology
                    </div>
                    <div style={{flex: '0 0 0',  paddingLeft: '16px', justifyContent: 'center', display: 'flex'}}>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', flex: '0 0 400px'}}>
                        {technologyBadges.map(badge => (<TechnologyBadge key={badge} label={badge} />))}
                        </div>
                    </div>
                </div>
                <div style={{flex: '3 1 0'}}>
                    <ProjectCardContent>
                        <Typography variant='h6' style={{fontWeight: 'bold', color: '#008073', marginBottom: '0.5rem'}}>{t(`projects.${projectPrefix}.name`)}</Typography>
                        <Divider style={{margin: '-5px 0 5px 0'}}/>
                        {children}
                    </ProjectCardContent>
                </div>
            </div>
        </ProjectCard>
    );
};


export default withTranslation()(ProjectLayout);
