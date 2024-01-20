import {
  AboutMe,
  Skills,
  Contacts,
  PageBG,
  Projects,
  Experience,
  ContactMe,
} from "@/components/imports";
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
      <ContactMe />
    </>
  )
}
