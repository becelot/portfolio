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

const ProjectLayout: React.FC<WithTranslation & ProjectLayoutProps> = ({t, children, image, technologyBadges, projectPrefix, livePreview, sourcePreview}) => {

    return (
        <ProjectCard>
            <div style={{height: '100%', display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: '2 1 0'}}>
                    <CardMedia
                        component='img'
                        image={image}
                        height='240'
                        alt={'Project'}
                    />
                    <div style={{flex: '0 0 0', display: 'flex', justifyContent: 'space-evenly', margin: '1rem 0'}}>
                        <ProjectPreviewButton url={livePreview} tooltip={t('projects.live_nda')} icon={faEye}>Live Preview</ProjectPreviewButton>
                        <ProjectPreviewButton url={sourcePreview} tooltip={t('projects.source_nda')} icon={faCodeBranch}>Source Code</ProjectPreviewButton>
                    </div>
                    <div style={{flex: '0 0 0', padding: '16px', fontWeight: 550}}>
                        Used technology
                    </div>
                    <div style={{flex: '0 0 0', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingLeft: '16px'}}>
                        {technologyBadges.map(badge => (<TechnologyBadge key={badge} label={badge} />))}
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
