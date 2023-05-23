import HeaderComponent from '@/components/headerComponent'
import HomeComponent from '@/components/homecomponent'
import AboutMeComponent from '@/components/aboutMeComponent'
import ProjectComponent from '@/components/projectComponent'
import FooterComponent from '@/components/footerComponent'
import ContactComponent from '@/components/contactComponent'
import { useState } from 'react'
import AsidebarComponent from '@/components/asideBarComponent'

export default function Home() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpenMenu(true)
  }

  const handleCloseMenu = () => {
    setOpenMenu(false)
  }

  return (
    <>
      <HeaderComponent onOpenMenu={handleOpenMenu} />
      <AsidebarComponent open={openMenu} onCloseMenu={handleCloseMenu} />
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
