import React, {useEffect, useState} from "react";
import MapComponent from "../../map";
import { useDispatch, useSelector } from "react-redux";
import { selectedSalon } from "../../../redux/slices/auth/login";
import {GetCollectionProduct} from "../../../redux/slices/Fetch";
function SelectLocationMap() {
  /** redux store */
  const dispatch = useDispatch();
  const salonLocations = useSelector(
    (state) => state.fetch.salonLocationAgregatedData
  );
  const [location, setLocation] = useState(0);
  useEffect(()=>{
    dispatch(GetCollectionProduct());
  },[])
  const setSalonLocation = (e) => {
    setLocation(e?.target?.value ? e?.target?.value : 0);
    dispatch(selectedSalon(salonLocations[e?.target?.value]));
  };
  return (
    <div
      className="modal fade"
      id="locationsModal"
      tabIndex="-1"
      aria-labelledby="locationsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-pi-800">
          <div className="modal-header">
            <h1 className="modal-title h1 mb-0" id="locationsModalLabel">
              Select Location
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="icon icon-close"></i>
            </button>
          </div>
          <div className="modal-body pb-0">
            <div className="locations-map-container">
              <MapComponent
                isMarkerShown={true}
                key={location}
                center={{
                  lat: parseFloat(salonLocations !==undefined ? salonLocations[location]?.latitude:[]),
                  lng: parseFloat(salonLocations !==undefined  ? salonLocations[location]?.longitude:[]),
                }}
                zoom={18}
                places={salonLocations !==undefined ?[salonLocations[location]]:[]}
              />
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-dark outline-transparent"
              data-bs-dismiss="modal"
            >
              save
            </button>
            <select
              className="btn-dark w-50"
              onChange={(e) => setSalonLocation(e)}
              value={location}
            >
              <option value="" disabled={true}>
                SELECT SALON{" "}
              </option>
              {salonLocations ? (
                salonLocations?.map((data, id) => {
                  return (
                    <option value={data.id} key={id}>
                      {" "}
                      {data?.name}{" "}
                    </option>
                  );
                })
              ) : (
                <option>There is no salons found </option>
              )}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectLocationMap;
