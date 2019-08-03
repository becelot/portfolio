import React from "react";
import {WithTranslation, withTranslation} from "react-i18next";
import ProjectLayout from "./ProjectLayout";
import ProjectDefaultContent from "./ProjectDefaultContent";
import {Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle} from "@fortawesome/free-regular-svg-icons";
import {faTwitch} from "@fortawesome/free-brands-svg-icons";
import {faServer, faShareAlt} from "@fortawesome/free-solid-svg-icons";

const DeckHistoryTracker: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectLayout
            technologyBadges={['React', 'Redux', 'HTML', 'CSS', 'Webpack', 'Python', 'Flask', 'PostgreSQL', 'JWT', 'Authorization', 'C#', 'WPF', 'CI/CD', 'Heroku-Cloud']}
            image={'projects/deck-history-tracker.jpg'}
            projectPrefix={'dht'}
            livePreview={'https://dht.findbecker.de'}
            sourcePreview={[
                {
                    link: 'https://github.com/becelot/dh-twitch-frontend',
                    name: 'Twitch',
                    icon: faTwitch,
                    iconSize: '3x'
                },
                {
                    link: 'https://github.com/becelot/dh-backend',
                    name: 'Backend',
                    icon: faServer,
                    iconSize: '3x'
                },
                {
                    link: 'https://github.com/becelot/dh-hdt-client',
                    name: 'Client',
                    icon: faShareAlt,
                    iconSize: '3x'
                }
            ]}
        >
            <Typography variant={'h6'}>
                {t('projects.dht.project')}
            </Typography>
            <Typography dangerouslySetInnerHTML={{__html: t(`projects.dht.short_description`)}} />

            <br />
            <Typography variant={'h6'}>
                {t('projects.dht.problem')}
            </Typography>
            <Typography dangerouslySetInnerHTML={{__html: t(`projects.dht.problem_description`)}}/>
            <br />
            <Typography variant={'h6'}>
                {t('projects.dht.solution')}
            </Typography>
            <Typography>
                {t('projects.dht.solution_description')}
            </Typography> <br />
            <div style={{paddingLeft: '24px'}}>
                <Typography style={{display: 'flex', flexDirection: 'row'}}>
                    <FontAwesomeIcon icon={faDotCircle} color={'#4497e2'} size={'lg'} style={{marginRight: '1.5rem'}} />
                    <div>
                        {t('projects.dht.solution-0')}</div>
                </Typography>
                <Typography style={{display: 'flex', flexDirection: 'row', marginTop: '5px'}}>
                    <FontAwesomeIcon icon={faDotCircle} color={'#4497e2'} size={'lg'} style={{marginRight: '1.5rem'}} />
                    <div dangerouslySetInnerHTML={{__html: t(`projects.dht.solution-1`)}}>
                    </div>
                </Typography>
                <Typography style={{display: 'flex', flexDirection: 'row', marginTop: '5px'}}>
                    <FontAwesomeIcon icon={faDotCircle} color={'#4497e2'} size={'lg'} style={{marginRight: '1.5rem'}} />
                    <div>
                        {t('projects.dht.solution-2')}</div>
                </Typography>
                <Typography style={{display: 'flex', flexDirection: 'row', marginTop: '5px'}}>
                    <FontAwesomeIcon icon={faDotCircle} color={'#4497e2'} size={'lg'} style={{marginRight: '1.5rem'}} />
                    <div>
                        {t('projects.dht.solution-3')}</div>
                </Typography>
                <Typography style={{display: 'flex', flexDirection: 'row', marginTop: '5px'}}>
                    <FontAwesomeIcon icon={faDotCircle} color={'#4497e2'} size={'lg'} style={{marginRight: '1.5rem'}} />
                    <div dangerouslySetInnerHTML={{__html: t(`projects.dht.solution-4`)}}>
                    </div>
                </Typography>
            </div>
        </ProjectLayout>
    );
};

export default withTranslation()(DeckHistoryTracker);
