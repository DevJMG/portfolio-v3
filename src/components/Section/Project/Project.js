import React from 'react';
import './Project.css';
import { ProjectTile } from '../../SubComponents/ProjectTile/ProjectTile';

const Project = ({
    project_section_heading1,
    project_title1,
    project_type1,
    project_description1,
    project_tag1_1,
    project_tag2_1,
    project_img1,
    project_title2,
    project_type2,
    project_description2,
    project_tag1_2,
    project_tag2_2,
    project_img2,
    project_title3,
    project_type3,
    project_description3,
    project_tag1_3,
    project_tag2_3,
    project_img3,
    project_title4,
    project_type4,
    project_description4,
    project_tag1_4,
    project_tag2_4,
    project_img4,
    project_title5,
    project_type5,
    project_description5,
    project_tag1_5,
    project_tag2_5,
    project_img5
}) => {
    return (
        <>
        <div id='project--section'>
            <section className='project'>
                <div className='project--container container'>
                    <div className='project--row'>
                        <div className='project--heading'>
                            <h1>{project_section_heading1}</h1>
                        </div>
                        <div className='project--content'>

                        <ProjectTile
                        title={project_title1}
                        type={project_type1}
                        description={project_description1}
                        tag1={project_tag1_1}
                        tag2={project_tag2_1}
                        image={project_img1}
                        >
                        </ProjectTile>
                        
                        <ProjectTile
                        title={project_title2}
                        type={project_type2}
                        description={project_description2}
                        tag1={project_tag1_2}
                        tag2={project_tag2_2}
                        image={project_img2}
                        >
                        </ProjectTile>

                        <ProjectTile
                        title={project_title3}
                        type={project_type3}
                        description={project_description3}
                        tag1={project_tag1_3}
                        tag2={project_tag2_3}
                        image={project_img3}
                        >
                        </ProjectTile>

                        <ProjectTile
                        title={project_title4}
                        type={project_type4}
                        description={project_description4}
                        tag1={project_tag1_4}
                        tag2={project_tag2_4}
                        image={project_img4}
                        >
                        </ProjectTile>

                        <ProjectTile
                        title={project_title5}
                        type={project_type5}
                        description={project_description5}
                        tag1={project_tag1_5}
                        tag2={project_tag2_5}
                        image={project_img5}
                        >
                        </ProjectTile>

                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Project;