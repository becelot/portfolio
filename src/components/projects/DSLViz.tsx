import React from "react";
import {WithTranslation, withTranslation} from "react-i18next";
import {Button, CardMedia, Divider, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faAngleDown, faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import {
    ProjectCard,
    ProjectCardContent,
    ProjectPreviewButton,
    TechnologyBadge,
    TechnologyBadgeWrapper,
    TechnologyBar
} from "./components";
import StaggerInView from "../../utils/StaggerInView";
import FlipInX from "../../animations/FlipInX";

const DSLViz: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectCard>
            <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <CardMedia
                    component='img'
                    image='projects/editor-preview.png'
                    height='240'
                    alt={'Project'}
                >
                </CardMedia>

                <ProjectCardContent>
                    <div style={{flex: '0 0 0', display: 'flex', justifyContent: 'space-evenly', marginBottom: '1rem'}}>
                        <ProjectPreviewButton disabled tooltip={t('projects.live_nda')} icon={faEye}>Live Preview</ProjectPreviewButton>
                        <ProjectPreviewButton disabled tooltip={t('projects.source_nda')} icon={faCodeBranch}>Source Code</ProjectPreviewButton>
                    </div>
                    <Typography variant='h6' style={{fontWeight: 'bold', color: '#008073', marginBottom: '0.5rem'}}>{t('projects.dslviz.name')}</Typography>
                    <Typography>
                        {t('projects.dslviz.short_description')}
                    </Typography>
                </ProjectCardContent>

                <TechnologyBar>
                    <StaggerInView itemStyle={TechnologyBadgeWrapper} stagger={0.4} animation={FlipInX}>
                        <TechnologyBadge>Angular</TechnologyBadge>
                        <TechnologyBadge>Framework</TechnologyBadge>
                        <TechnologyBadge>DSL</TechnologyBadge>
                    </StaggerInView>
                </TechnologyBar>
                <Divider />
                <Button style={{width: '100%', textAlign: 'center', flex: '0 0 auto', color: '#3767e2'}}>
                    <FontAwesomeIcon icon={faAngleDown} style={{marginRight: '1rem'}} />
                    {t('projects.read_more')}
                </Button>
            </div>
        </ProjectCard>
    );
};

export default withTranslation()(DSLViz);
