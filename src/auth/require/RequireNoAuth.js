import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireNoAuth = () => {
    const location = useLocation();
    const token = useSelector((state) => state.login.token);
    const subdomain = localStorage.getItem("subdomain");
    const host = window.location.host;
    const hostSplit = host.split(".", 2);
    const hostSubdomain = hostSplit[0];
  
    if (subdomain && hostSubdomain !== subdomain) {
      const { protocol, pathname } = window.location;
      const newhostDomain = `${subdomain}.${
        hostSplit.length > 1 ? hostSplit[1] : hostSplit[0]
      }`;
      window.location.href = `${protocol}//${newhostDomain}${pathname}`;
    }
    return token ? (
        <Navigate to="/dashboard" state={{ from: location }} replace />
    ) : (
        <Outlet />
    );
  };

export default RequireNoAuth;