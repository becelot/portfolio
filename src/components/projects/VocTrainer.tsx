import React from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import ProjectLayout from "./ProjectLayout";
import {Typography} from "@material-ui/core";

const VocTrainer: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectLayout
            technologyBadges={['C#', 'WPF', 'MahApps', 'XML']}
            image={'projects/voc-trainer.png'}
            projectPrefix={'vt'} sourcePreview={'https://github.com/becelot/VocTrainer'}
        >
            <Typography variant={'h6'}>
                {t('projects.vt.project')}
            </Typography>
            <Typography dangerouslySetInnerHTML={{__html: t(`projects.vt.short_description`)}}>
            </Typography> <br />
        </ProjectLayout>
    );
};

export default withTranslation()(VocTrainer);
