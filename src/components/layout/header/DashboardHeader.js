import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import {useDispatch, useSelector} from "react-redux";
// import { LoggedInStatus } from "../../../redux/slices/UserStates";
import { LoggedInStatus, LogoutUser } from "../../../redux/slices/UserStates";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import { signOut } from "next-auth/react";

function DashboardHeaderHeader() {
  const [t, i18n] = useTranslation("common");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const history = useHistory()
    // const { salonProfile } = useSelector((state) => state.userSaloonProfile);
  // const name = useSelector(state => {
  //   if (state?.userSaloonProfile?.saloonProfile?.name) {
  //    return  state?.userSaloonProfile?.saloonProfile?.name
  //   }
  //   else { return ""}
  // })
  const onLogout = () => {
    delete localStorage.token
    dispatch(LoggedInStatus(false))
    navigate('/customer/login');
  }

  const handleLogout = () => {
    dispatch(LogoutUser())
    .then((res) => {

      if (res?.payload?.status) {
        // dispatch(stopLoading());
        // toast.success(`${t(`lang:LOGOUT_SUCCESSFULLY`)}`);
      }
      // signOut({ redirect: true, callbackUrl: "/auth/login" });
      localStorage.clear();
      navigate('/customer/login');
      window.location.reload();
    });
  };

  const mobileAside = () => {
    document.querySelector('body').classList.toggle('show-mobile-menu')
  }

  return (
    <header className="margin-b-30 header">
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-md-0 gap-2">
        {/* <div className="page-title w-sm-100 text-capitalize"> {t("Header.salon.value")} - {salonProfile?.name}</div> */}
        <div className="d-flex align-items-center justify-content-sm-end justify-content-between flex-1">
          <div className="aside-mobile-menu margin-r-10 cursor-pointer show-on-mobile" onClick={mobileAside}>
            <ReactSVG src="/assets/icons/menu.svg" />
          </div>
          <ul className="nav align-items-center flex-nowrap">
            <li className="px-2">
              <div className="head">
                  <div className="dropdown-lang">
                      <Dropdown className="">
                          <Dropdown.Toggle className="font-weight-600" as="button" id="dropdown-basic2">
                              EN (US)
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="">
                              <Dropdown.Item href="#/action-1" onClick={() => i18n.changeLanguage("en")}>
                                  EN (US)
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2" onClick={() => i18n.changeLanguage("es")}>
                                  ES (ES)
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3" onClick={() => i18n.changeLanguage("fr")}>
                                  FR (FR)
                              </Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                  </div>
              </div>
            </li>
            <li className="item">
              <Dropdown className="icon-dropdown">
                <Dropdown.Toggle as="button" id="dropdown-basic3">
                  <ReactSVG src="/assets/icons/settings.svg" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="setting-menu">
                  {/* <Dropdown.Item onClick={() => { history.push(CHANGEPASSWORD) }}>
                  {t("Navbar.changePass.text")}
                  </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
            </li>
            <li className="item">
              <Link to="/profile" className="avatar">
                <img src="/assets/images/auth-bg.jpg" />
              </Link>
            </li>
            <li className="item cursor-pointer">
              <ReactSVG src="/assets/icons/log-out.svg" onClick={handleLogout} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeaderHeader;
