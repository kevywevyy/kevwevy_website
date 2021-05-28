import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'}/>
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'}/>
            <div className="skill-container">
                <SkillsSection skill={'Javascript'} progress={'50%'} width={'50%'}/>
                <SkillsSection skill={'React JS'} progress={'40%'} width={'40%'}/>
                <SkillsSection skill={'Python'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'Java'} progress={'65%'} width={'65%'}/>
                <SkillsSection skill={'C'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'C++'} progress={'40%'} width={'40%'}/>

            </div>
        </div>
    )
}

export default AboutPage;
