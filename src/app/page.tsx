import AboutMe from "@/components/aboutMe";
import Skills from "@/components/skills";
import Contacts from '@/components/contacts';
import PageBG from "@/components/pageBG";
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import EmailForm from '@/components/emailForm';
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
      <Experience />
      <EmailForm />
    </>
  )
}
