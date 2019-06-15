import {withTranslation, WithTranslation} from "react-i18next";
import React from "react";
import {ProjectPreviewButton} from "./components";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import {Typography} from "@material-ui/core";


export interface ProjectDefaultContentProps {
    projectPrefix: string;
    livePreview?: string;
    sourcePreview?: string;
}

const ProjectDefaultContent: React.FC<WithTranslation & ProjectDefaultContentProps> = ({t, projectPrefix, livePreview, sourcePreview}) => {

    return (
        <>
            <div style={{flex: '0 0 0', display: 'flex', justifyContent: 'space-evenly', marginBottom: '1rem'}}>
                <ProjectPreviewButton url={livePreview} tooltip={t('projects.live_nda')} icon={faEye}>Live Preview</ProjectPreviewButton>
                <ProjectPreviewButton url={sourcePreview} tooltip={t('projects.source_nda')} icon={faCodeBranch}>Source Code</ProjectPreviewButton>
            </div>
            <Typography variant='h6' style={{fontWeight: 'bold', color: '#008073', marginBottom: '0.5rem'}}>{t(`projects.${projectPrefix}.name`)}</Typography>

            <Typography dangerouslySetInnerHTML={{__html: t(`projects.${projectPrefix}.short_description`)}} />
        </>
    );
};

export default withTranslation()(ProjectDefaultContent);
