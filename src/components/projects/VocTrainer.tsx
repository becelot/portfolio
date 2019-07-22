import React from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import ProjectLayout from "./ProjectLayout";

const VocTrainer: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectLayout
            technologyBadges={['C#', 'WPF', 'XML']}
            image={'projects/voc-trainer.png'}
            projectPrefix={'vt'} sourcePreview={'https://github.com/becelot/VocTrainer'}
        >
        </ProjectLayout>
    );
};

export default withTranslation()(VocTrainer);
