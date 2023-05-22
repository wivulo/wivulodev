import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeaderComponent from '@/components/headerComponent'
import HomeComponent from '@/components/homecomponent'
import AboutMeComponent from '@/components/aboutMeComponent'
import ProjectComponent from '@/components/projectComponent'
import FooterComponent from '@/components/footerComponent'
import ContactComponent from '@/components/contactComponent'

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main>
        <HomeComponent />
        <AboutMeComponent />
        <ProjectComponent />
        <ContactComponent />
      </main>
      <FooterComponent />
    </>
  )
}
