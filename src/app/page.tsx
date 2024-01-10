import AboutMe from "@/components/aboutMe";
import Skills from "@/components/skills";
import Contacts from '@/components/contacts';
import PageBG from "@/components/pageBG";
import ImageSlider from '@/components/imageSlider';
import Projects from '@/components/projects';
import '@/styles/buttons.scss';
import '@/styles/typography.scss';

export default function Protfolio() {
  return (
    <>
      <PageBG />
      <AboutMe />
      <Contacts />
      <Skills />
      <Projects />
    </>
  )
}
