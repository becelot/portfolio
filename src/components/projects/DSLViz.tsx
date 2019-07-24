import React from "react";
import {WithTranslation, withTranslation} from "react-i18next";
import ProjectLayout from "./ProjectLayout";
import ProjectDefaultContent from "./ProjectDefaultContent";
import {Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle} from "@fortawesome/free-regular-svg-icons";

const DSLViz: React.FC<WithTranslation> = ({t}) => {
    return (
        <ProjectLayout
            technologyBadges={['Angular', 'HTML5', 'SASS', 'TypeScript', 'RxJS', 'JSON', 'DSL', 'AST']}
            image={'projects/editor-preview.png'}
            projectPrefix={'dslviz'}
        >
            <Typography variant={'h6'}>
                {t('projects.dslviz.project')}
            </Typography>
            <Typography>
                {t('projects.dslviz.short_description')}
            </Typography> <br />
            <Typography variant={'h6'}>
                {t('projects.dslviz.problem')}
            </Typography>
            <Typography>
                {t('projects.dslviz.problem_description')}
            </Typography> <br />
            <Typography variant={'h6'}>
                {t('projects.dslviz.solution')}
            </Typography>
            <Typography>
                {t('projects.dslviz.solution_description')}
            </Typography> <br />
            <div style={{paddingLeft: '24px'}}>
            <Typography style={{display: 'flex', flexDirection: 'row'}}>
                <FontAwesomeIcon icon={faDotCircle} color={'#4497e2'} size={'lg'} style={{marginRight: '1.5rem'}} />
                <div>{t('projects.dslviz.solution-0')}</div>
            </Typography>
                <Typography style={{marginTop: '5px', display: 'flex', flexDirection: 'row'}}>
                    <FontAwesomeIcon icon={faDotCircle} color={'#4497e2'} size={'lg'} style={{marginRight: '1.5rem'}} />
                    <div>{t('projects.dslviz.solution-1')}</div>
                </Typography>
                <Typography style={{marginTop: '5px', display: 'flex', flexDirection: 'row'}}>
                    <FontAwesomeIcon icon={faDotCircle} color={'#4497e2'} size={'lg'} style={{marginRight: '1.5rem'}} />
                    <div>{t('projects.dslviz.solution-2')}</div>
                </Typography>
                <Typography style={{marginTop: '5px', display: 'flex', flexDirection: 'row'}}>
                    <FontAwesomeIcon icon={faDotCircle} color={'#4497e2'} size={'lg'} style={{marginRight: '1.5rem'}} />
                    <div>{t('projects.dslviz.solution-3')}</div>
                </Typography>
                <Typography style={{marginTop: '5px', display: 'flex', flexDirection: 'row'}}>
                    <FontAwesomeIcon icon={faDotCircle} color={'#4497e2'} size={'lg'} style={{marginRight: '1.5rem'}} />
                    <div>{t('projects.dslviz.solution-4')}</div>
                </Typography>
            </div>
        </ProjectLayout>
    );
};

export default withTranslation()(DSLViz);
