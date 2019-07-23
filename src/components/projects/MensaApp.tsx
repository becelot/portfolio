import React from "react";
import {WithTranslation, withTranslation} from "react-i18next";
import {Typography} from "@material-ui/core";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faCodeBranch, faServer} from "@fortawesome/free-solid-svg-icons";
import {ProjectPreviewButton} from "./components";
import ProjectLayout from "./ProjectLayout";
import ProjectDefaultContent from "./ProjectDefaultContent";
import {faAndroid} from "@fortawesome/free-brands-svg-icons";

const MensaApp: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectLayout
            technologyBadges={['Android', 'Java', 'Scala', 'Play Framework', 'HTML', 'RegEx', 'Socket', 'HTTP', 'JSON', 'Cloud']}
            image={'projects/mensa-app.png'}
            projectPrefix={'mensa'}
            sourcePreview={[
                {
                    link: 'https://github.com/becelot/MensaApp',
                    name: 'Android',
                    icon: faAndroid
                },
                {
                    link: 'https://github.com/becelot/MensaAppBackend',
                    name: 'Backend',
                    icon: faServer,
                    iconSize: '3x'
                }
            ]}
        >
            <Typography variant={'h6'}>
                {t('projects.mensa.project')}
            </Typography>
            <Typography dangerouslySetInnerHTML={{__html: t(`projects.mensa.short_description`)}}>
            </Typography> <br />
        </ProjectLayout>
    );
};

export default withTranslation()(MensaApp);
