import React from "react";
import {WithTranslation, withTranslation} from "react-i18next";
import {Typography} from "@material-ui/core";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import {ProjectPreviewButton} from "./components";
import ProjectLayout from "./ProjectLayout";
import ProjectDefaultContent from "./ProjectDefaultContent";

const MensaApp: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectLayout
            technologyBadges={['Android', 'Java', 'Scala']}
            image={'projects/mensa-app.png'}
        >
            <ProjectDefaultContent projectPrefix={'mensa'} livePreview={'http://google.de'} />
        </ProjectLayout>
    );
};

export default withTranslation()(MensaApp);
