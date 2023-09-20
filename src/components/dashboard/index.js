import React from 'react'
// import "../../../src/sass/main.scss";
import SideBar from '../layout/sidebar'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const [t] = useTranslation("common");
  // const location = useLocation();
  return (
    <>
    <div className="layout-holder">
      <SideBar />
      <div className="fr-auto dashboard-page" data-gap="30">
      <div className="grid" data-gap="45">
        <div className="grid" data-gap="25">
        <h1>{t("Dashboard.name.text")}</h1>
        </div>
        <div className="grid" data-gap="15">

        </div>
       
      </div>
    </div>
    <div className="card demo-card">
      </div>
      </div>
      </>

  )
}

export default Dashboard