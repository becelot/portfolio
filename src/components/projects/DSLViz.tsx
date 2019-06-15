import React from "react";
import {WithTranslation, withTranslation} from "react-i18next";
import ProjectLayout from "./ProjectLayout";
import ProjectDefaultContent from "./ProjectDefaultContent";

const DSLViz: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectLayout
            technologyBadges={['Angular', 'Framework', 'DSL']}
            image={'projects/editor-preview.png'}
        >
            <ProjectDefaultContent projectPrefix={'dslviz'} />
        </ProjectLayout>
    );
};

export default withTranslation()(DSLViz);
