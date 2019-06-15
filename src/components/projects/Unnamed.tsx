import React from "react";
import {ProjectCard, ProjectCardContent, ProjectPreviewButton, TechnologyBadge, TechnologyBar} from "./components";
import {Button, CardMedia, Divider, Typography} from "@material-ui/core";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faAngleDown, faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {WithTranslation, withTranslation} from "react-i18next";
import {css} from "styled-components";
import StaggerInView from "../../utils/StaggerInView";
import FlipInX from "../../animations/FlipInX";


const items = css`
    flex: 0 0 113.25px;
    margin: 0 10px;
`;

const Unnamed: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectCard>
            <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <CardMedia
                    component='img'
                    image='projects/unnamed-project.png'
                    height='240'
                    alt={'Project'}
                >
                </CardMedia>

                <ProjectCardContent>
                    <div style={{flex: '0 0 0', display: 'flex', justifyContent: 'space-evenly', marginBottom: '1rem'}}>
                        <ProjectPreviewButton disabled tooltip={t('projects.live_nda')} icon={faEye}>Live Preview</ProjectPreviewButton>
                        <ProjectPreviewButton disabled tooltip={t('projects.source_nda')} icon={faCodeBranch}>Source Code</ProjectPreviewButton>
                    </div>
                    <Typography variant='h6' style={{fontWeight: 'bold', color: '#008073', marginBottom: '0.5rem'}}>{t('projects.unnamed.name')}</Typography>
                    <Typography>
                        {t('projects.unnamed.short_description')}
                    </Typography>
                </ProjectCardContent>

                <TechnologyBar variant={'h6'}>
                    <StaggerInView stagger={0.5} animation={FlipInX} itemStyle={items}>
                        <TechnologyBadge>Angular</TechnologyBadge>
                        <TechnologyBadge>Python</TechnologyBadge>
                        <TechnologyBadge>C#</TechnologyBadge>
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

export default withTranslation()(Unnamed);
