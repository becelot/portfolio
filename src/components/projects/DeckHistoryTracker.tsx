import React from "react";
import {WithTranslation, withTranslation} from "react-i18next";
import ProjectLayout from "./ProjectLayout";
import ProjectDefaultContent from "./ProjectDefaultContent";
import {Typography} from "@material-ui/core";

const DeckHistoryTracker: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectLayout
            technologyBadges={['React', 'Redux', 'HTML', 'CSS', 'Webpack', 'Python', 'Flask', 'PostgreSQL', 'JWT', 'Authorization', 'C#', 'WPF', 'CI/CD', 'Heroku-Cloud']}
            image={'projects/deck-history-tracker.jpg'}
            projectPrefix={'dht'}
        >
            <Typography variant={'h6'}>
                {t('projects.dht.project')}
            </Typography>
            <Typography>
                {t('projects.dht.short_description')}
            </Typography> <br />
            <Typography variant={'h6'}>
                {t('projects.dht.problem')}
            </Typography>
            <Typography>
                {t('projects.dht.problem_description')}
            </Typography> <br />
            <Typography variant={'h6'}>
                {t('projects.dht.solution')}
            </Typography>
            <Typography>
                {t('projects.dht.solution_description')}
            </Typography> <br />
        </ProjectLayout>
    );
};

export default withTranslation()(DeckHistoryTracker);
