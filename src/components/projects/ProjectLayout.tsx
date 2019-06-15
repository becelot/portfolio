import {withTranslation, WithTranslation} from "react-i18next";
import React from "react";
import {
    ProjectCard,
    ProjectCardContent,
    TechnologyBadge,
    TechnologyBadgeWrapper,
    TechnologyBar
} from "./components";
import {Button, CardMedia, Divider} from "@material-ui/core";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import StaggerInView from "../../utils/StaggerInView";
import FlipInX from "../../animations/FlipInX";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export interface ProjectLayoutProps {
    image: string;
    technologyBadges: string[];
}

const ProjectLayout: React.FC<WithTranslation & ProjectLayoutProps> = ({t, children, image, technologyBadges}) => {

    return (
        <ProjectCard>
            <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <CardMedia
                    component='img'
                    image={image}
                    height='240'
                    alt={'Project'}
                >
                </CardMedia>

                <ProjectCardContent>
                    {children}
                </ProjectCardContent>
                <TechnologyBar>
                    <StaggerInView stagger={0.5} animation={FlipInX} itemStyle={TechnologyBadgeWrapper}>
                        {technologyBadges.map(badge => (<TechnologyBadge key={badge}>{badge}</TechnologyBadge>))}
                    </StaggerInView>
                </TechnologyBar>
                <Divider/>
                <Button style={{width: '100%', textAlign: 'center', flex: '0 0 auto', color: '#3767e2'}}>
                    <FontAwesomeIcon icon={faAngleDown} style={{marginRight: '1rem'}}/>
                    {t('projects.read_more')}
                </Button>
            </div>
        </ProjectCard>
    );
};


export default withTranslation()(ProjectLayout);
