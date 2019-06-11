import React from "react";
import { Parallax } from 'react-parallax';
import styled from "styled-components";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Typography,
    withStyles
} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-regular-svg-icons";

const Header = styled.div`
  width: 100%;
  height: 5rem;
  
  background: background;
  text-align: center;
  line-height: 5rem;
  
  font-size: 4rem;
  color: white;
  
  position: absolute;
  z-index: 3;
  background: rgba(0,0,0,0.2);
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4));
  background-size: cover;
  background-position: center center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  position: relative;
  
  padding-top: 6rem;
  box-sizing: border-box;
`;

const Content = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  
  margin: -10px;
`;

const ProjectCard = withStyles({
    root: {
        margin: '10px',
        maxWidth: '400px'
    }
})(Card);

const ProjectCardContent = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 0'
    }
})(CardContent);

const Projects: React.FC = () => {
    return (
        <>
            <Header>Projects</Header>
            <Parallax bgImage={'bg/projects.webp'} strength={700}>
                <Wrapper>
                    <Content>
                        <ProjectCard>
                            <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                                <CardMedia
                                    component='img'
                                    image='projects/random_project_sample.webp'
                                    height='200'
                                >
                                </CardMedia>

                                <ProjectCardContent>
                                    <div style={{flex: '0 0 0', display: 'flex', justifyContent: 'space-evenly'}}>
                                        <Button variant={'outlined'} style={{flex: '0 1 40%', fontSize: '1.2rem'}}>
                                            <div style={{display: "flex", justifyContent: 'center'}}>
                                                <FontAwesomeIcon icon={faCodeBranch} color={'#4497e2'} size={'lg'} style={{marginRight: '0.5rem'}} />
                                                <div>Source Code</div>
                                            </div>
                                        </Button>
                                        <Button variant={'outlined'} style={{flex: '0 1 40%' , fontSize: '1.2rem'}}>
                                            <div style={{display: "flex", justifyContent: 'center'}}>
                                                <FontAwesomeIcon icon={faEye} color={'#4497e2'} size={'lg'} style={{marginRight: '0.5rem'}} />
                                                <div>Live Preview</div>
                                            </div>
                                        </Button>
                                    </div>

                                    <Typography paragraph style={{marginTop: '1rem'}}>
                                        Lorem Ipsum is siersdgknlerhgioöaherg
                                         fear g
                                        esrg
                                        erg rst
                                        h
                                        srtjh
                                        mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Typography>
                                </ProjectCardContent>
                                <Divider />
                                <Button style={{width: '100%', textAlign: 'center', flex: '0 0 auto', color: '#4497e2'}}>
                                    <FontAwesomeIcon icon={faAngleDown} style={{marginRight: '1rem'}} />
                                    Read more
                                </Button>
                            </div>
                        </ProjectCard>

                        <ProjectCard>
                            <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                                <CardMedia
                                    component='img'
                                    image='projects/random_project_sample.webp'
                                    height='200'
                                >
                                </CardMedia>

                                <ProjectCardContent>
                                    <div style={{flex: '0 0 0', display: 'flex', justifyContent: 'space-evenly'}}>
                                        <Button variant={'outlined'} style={{flex: '0 1 40%', fontSize: '1.2rem'}}>
                                            <div style={{display: "flex", justifyContent: 'center'}}>
                                                <FontAwesomeIcon icon={faCodeBranch} color={'#4497e2'} size={'lg'} style={{marginRight: '0.5rem'}} />
                                                <div>Source Code</div>
                                            </div>
                                        </Button>
                                        <Button variant={'outlined'} style={{flex: '0 1 40%' , fontSize: '1.2rem'}}>
                                            <div style={{display: "flex", justifyContent: 'center'}}>
                                                <FontAwesomeIcon icon={faEye} color={'#4497e2'} size={'lg'} style={{marginRight: '0.5rem'}} />
                                                <div>Live Preview</div>
                                            </div>
                                        </Button>
                                    </div>

                                    <Typography paragraph style={{marginTop: '1rem'}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Typography>
                                </ProjectCardContent>
                                <Divider />
                                <Button style={{width: '100%', textAlign: 'center', flex: '0 0 auto', color: '#4497e2'}}>
                                    <FontAwesomeIcon icon={faAngleDown} style={{marginRight: '1rem'}} />
                                    Read more
                                </Button>
                            </div>


                        </ProjectCard>
                        <ProjectCard>
                            <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                                <CardMedia
                                    component='img'
                                    image='projects/random_project_sample.webp'
                                    height='200'
                                >
                                </CardMedia>

                                <ProjectCardContent>
                                    <div style={{flex: '0 0 0', display: 'flex', justifyContent: 'space-evenly'}}>
                                        <Button variant={'outlined'} style={{flex: '0 1 40%', fontSize: '1.2rem'}}>
                                            <div style={{display: "flex", justifyContent: 'center'}}>
                                                <FontAwesomeIcon icon={faCodeBranch} color={'#4497e2'} size={'lg'} style={{marginRight: '0.5rem'}} />
                                                <div>Source Code</div>
                                            </div>
                                        </Button>
                                        <Button variant={'outlined'} style={{flex: '0 1 40%' , fontSize: '1.2rem'}}>
                                            <div style={{display: "flex", justifyContent: 'center'}}>
                                                <FontAwesomeIcon icon={faEye} color={'#4497e2'} size={'lg'} style={{marginRight: '0.5rem'}} />
                                                <div>Live Preview</div>
                                            </div>
                                        </Button>
                                    </div>

                                    <Typography paragraph style={{marginTop: '1rem'}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Typography>
                                </ProjectCardContent>
                                <Divider />
                                <Button style={{width: '100%', textAlign: 'center', flex: '0 0 auto', color: '#4497e2'}}>
                                    <FontAwesomeIcon icon={faAngleDown} style={{marginRight: '1rem'}} />
                                    Read more
                                </Button>
                            </div>


                        </ProjectCard>
                    </Content>



                </Wrapper>
            </Parallax>
        </>
    );
};

export default Projects;
