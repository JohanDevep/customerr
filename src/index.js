import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Security from "./Security";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AuthProvider} from "./auth/provider/AuthProvider";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Provider} from "react-redux";
import store from "./redux/store/store";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import {COMMON_FR} from "./translations/fr/common.js";
import {COMMON_ES} from "./translations/es/common.js";
import {COMMON_EN} from "./translations/en/common.js";
/** Redux persist middleware wrapper */
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import Loader from "./components/common/loader";

let persistor = persistStore(store);

/** end **/
i18next.init({
    interpolation: {escapeValue: false}, // React already does escaping
    lng: "en", // language to use
    resources: {
        en: {
            common: COMMON_EN, // 'common' is our custom namespace
        },
        fr: {
            common: COMMON_FR,
        },
        es: {
            common: COMMON_ES,
        },
    },
});
// const loading = useSelector((state) => state.user.loading);
// console.log('pageLoading: ', loading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.Fragment>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
            {/* {pageLoading && <Loader loading={true} />} */}
                <Security>
                    <ToastContainer
                        position="top-right"
                        co
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <BrowserRouter>
                        <AuthProvider>
                            <I18nextProvider i18n={i18next}>
                                <Routes>
                                    <Route path="/*" element={<App/>}/>
                                </Routes>
                            </I18nextProvider>
                        </AuthProvider>
                    </BrowserRouter>
                </Security>
            </PersistGate>
        </Provider>
    </React.Fragment>
);
reportWebVitals();
