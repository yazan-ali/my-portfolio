import AboutMe from "@/components/aboutMe";
import Skills from "@/components/skills";
import Contacts from '@/components/contacts';
import '@/styles/buttons.scss';
import PageBG from "@/components/pageBG";

export default function Protfolio() {
  return (
    <>
      <PageBG />
      <AboutMe />
      <Contacts />
      <Skills />
    </>
  )
}
