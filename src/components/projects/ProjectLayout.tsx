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


export interface ProjectLayoutProps {
    image: string;
    technologyBadges: string[];
    projectPrefix: string;
    livePreview?: string;
    sourcePreview?: string;
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
                </div>
                <div style={{flex: '3 1 0', display: 'flex', flexDirection: 'column'}}>
                    <ProjectCardContent>
                        <Typography variant='h6' style={{fontWeight: 'bold', color: '#008073', marginBottom: '0.5rem'}}>{t(`projects.${projectPrefix}.name`)}</Typography>

                        <Typography dangerouslySetInnerHTML={{__html: t(`projects.${projectPrefix}.short_description`)}} />
                    </ProjectCardContent>
                    <TechnologyBar>
                            {technologyBadges.map(badge => (<TechnologyBadge key={badge}>{badge}</TechnologyBadge>))}
                    </TechnologyBar>
                    <Divider/>
                    <Button style={{width: '100%', textAlign: 'center', flex: '0 0 auto', color: '#3767e2'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{marginRight: '1rem'}}/>
                        {t('projects.read_more')}
                    </Button>
                </div>
            </div>
        </ProjectCard>
    );
};


export default withTranslation()(ProjectLayout);
