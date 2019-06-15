import React from "react";
import {WithTranslation, withTranslation} from "react-i18next";
import ProjectLayout from "./ProjectLayout";
import ProjectDefaultContent from "./ProjectDefaultContent";

const Unnamed: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectLayout technologyBadges={['Angular', 'Python', 'C#/WPF']} image={'projects/unnamed-project.png'}>
            <ProjectDefaultContent
                projectPrefix={'unnamed'}
            />
        </ProjectLayout>
    );
};

export default withTranslation()(Unnamed);
