import React from "react";
import {WithTranslation, withTranslation} from "react-i18next";
import ProjectLayout from "./ProjectLayout";
import ProjectDefaultContent from "./ProjectDefaultContent";

const DeckHistoryTracker: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectLayout
            technologyBadges={['React', 'HTML', 'CSS', 'Python', 'Flask', 'PostgreSQL', 'C#', 'WPF']}
            image={'projects/deck-history-tracker.jpg'}
            projectPrefix={'dht'}
        >
        </ProjectLayout>
    );
};

export default withTranslation()(DeckHistoryTracker);
