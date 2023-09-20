/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import { toast } from "react-toastify";
import { Image } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../common/loader";
import { END_POINTS } from "../../config";
import MyDatePicker from "../common/datePicker";
import CommonDropdown from "../common/dropdown";
import logo_dark from "../../../public/assets/images/logo-dark.png";
import {fetchEmployeeDetails,fetchSalonsList,updateProfile,} from "../../redux/slices/Fetch";
import {
  validateFullName,
  validatePhoneNumber,
  validateAddress,
  validatePostalCode,
  validateGender,
  validateCountry,
  validateState,
  validateCity,
  validateDescription
} from "../../helpers/validations/profile";

const Profile = () => {
  // All states
  const employeeDetails = useSelector((state) => state.fetch.employeeDetails);
  const [selectedSingleImage, setSelectedSingleImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [defaultImages, setDefaultImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectSalon, setSelectSalon] = useState("");
  const [salonsList, setSalonsList] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    gender: "",
    birthday: "",
    address1: "",
    postCode: "",
    profileImage: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const genderOptions = [
    { id: 1, name: "Male", value: "M" },
    { id: 2, name: "Female", value: "F" },
    { id: 3, name: "Other", value: "O" },
  ];

  //Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFullName(formData.fullName))
      if (!validateAddress(formData.address1))
    formData.address.country = selectedCountry;
    formData.address.city = selectedCity;
    formData.address.postCode = formData?.postCode;
    formData.address.state = selectedState;
    // formData.profileImage =  formData.profileImage = selectedSingleImage;
    formData.profileImage = selectedSingleImage;
    formData.mediaFiles = mediaImageArr ? mediaImageArr : [];
    formData.description = formData?.description;
    formData.birthday = formData?.birthday;
    let data = { formData: formData };
    delete data.formData.email;
    delete data.formData.postCode;

    dispatch(updateProfile(data))
      .then((el) => {
        if (el?.payload?.statusCode === 200) {
          setLoading(true)
          navigate("/dashboard");
          toast.success("Profile updated successfully");
        } else if (el?.payload?.response?.status == 400) {
          setLoading(false);
          throw el?.payload?.response?.data;
        }
      })

      .catch((error) => {
        toast.error(
          error?.message || "An error occurred while updating profile"
        );
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  // Input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSelectGender = (selectedGender) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender: selectedGender,
    }));
  };
  // Salons change
  const handleSelectSalons = (selectSalon) => {
    setSelectSalon(selectSalon);
  };
  // Dispatch countries API
  const handleCountryChange = () => {
    axios
      .get(`${END_POINTS.FETCH_COUNTRIES}`)
      .then((response) => {
        setCountries(response.data.data);
      })
      .catch((error) => {
        // console.error("Error fetching countries data:", error);
      });
  };
  const getCountries = () => {
    axios
      .get(`${END_POINTS.FETCH_COUNTRIES}`)
      .then((response) => {
        setCountries(response.data.data);
        setSelectedCountry(employeeDetails?.addressInfo?.countryName)
      })
      .catch((error) => {
        // console.error("Error fetching countries data:", error);
      });
  };

  const getStates = (id) => {
    axios
      .post(`${END_POINTS.FETCH_STATES}`, {
        country_id: id,
      })
      .then((response) => {
        setStates(response.data.data);
        setSelectedState(employeeDetails?.addressInfo?.stateName)
      })
      .catch((error) => { });
  };

  const getCities = (id) => {
    axios
      .post(`${END_POINTS.FETCH_CITIES}`, {
        state_id: id,
      })
      .then((response) => {
        setCities(response.data.data);
        setSelectedCity(employeeDetails?.addressInfo?.cityName)
      })
      .catch((error) => {
        // console.error("Error fetching states data:", error);
      });
  };
// Dispatch state API with country Id
  const handleSelectCountry = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
    setSelectedState("");
    setSelectedCity("");
    const id = countries.find((count) => count.name === selectedCountry);
    if (id) {
      axios
        .post(`${END_POINTS.FETCH_STATES}`, {
          country_id: id.id,
        })
        .then((response) => {
          setStates(response.data.data);
        })
        .catch((error) => { });
    }
  };
 // Dispatch city API with country Id
  const handleSelectState = (selectedState) => {
    setSelectedState(selectedState);
    setSelectedCity("");
    setCities([]);
    const stateID = states.find((city) => city.name === selectedState);
    if (stateID) {
      axios
        .post(`${END_POINTS.FETCH_CITIES}`, {
          state_id: stateID.id,
        })
        .then((response) => {
          setCities(response.data.data);
        })
        .catch((error) => {
          // console.error("Error fetching states data:", error);
        });
    }
  };
// City change
  const handleSelectCity = (selectedCity) => {
    setSelectedCity(selectedCity);
  };
// Profile image handlechange
  const handleSingleImageChange = (file) => {
    const reader = new FileReader();
    reader && reader.readAsDataURL(file);
    if (!file) {
      toast.error("Please select an image to upload.");
      return;
    }
    if (!["image/png", "image/jpeg"].includes(file.type)) {
      toast.error(
        "Unsupported file format. Please upload a PNG or JPEG image."
      );
      return;
    }
    // if (file.size > 4 * 1024 * 1024) {
    //     toast.error('Image size is too large. Maximum size allowed is 4MB.');
    //     return;
    // }
    reader.onloadend = () => {
      const base64String = reader.result;
      setSelectedSingleImage(base64String);
    };
  };
// Media image handlechange
  const handleImageChange = (file, cb) => {
    const reader = new FileReader();
    reader && reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64String = reader.result;
      cb(null, base64String);
    };
  };
  let mediaImageArr = [];
  selectedImages.map((el) => {
    handleImageChange(el, (err, res) => {
      mediaImageArr.push(res);
    });
  });
  const onDrop = (acceptedFiles) => {
    handleImageChange(acceptedFiles[0]);
    setSelectedImages([...selectedImages, ...acceptedFiles]);
  };
// Remove media image function
  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

// Remove media file from database
  const handleRemoveMediaImage = async (imageId) => {
    console.log('imageId: ', imageId);
    setLoading(true);
    try {
      const response = await axios.delete(
        `${END_POINTS.REMOVE_MEDIA_FILE}/${imageId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        getEmployeeDetails()
        console.log(`Image with ID ${imageId} has been removed.`);
        
      } else {
        console.log("Failed to remove media image");
      }
    } catch (error) {
      console.log("Error removing media image:", error);
      
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop,
  });
// Formate Date
  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString();
  };

  const handleDateSelect = (date) => {
    const formattedDate = formatDateString(date);
    setFormData((prevFormData) => ({
      ...prevFormData,
      birthday: formattedDate,
    }));
  };
// Show employee details 
  useEffect(() => {
    if (employeeDetails && employeeDetails?.user) {
      if (employeeDetails?.addressInfo?.countryId) {
        getCountries(employeeDetails?.addressInfo?.countryId);
        getStates(employeeDetails?.addressInfo?.countryId);
      }
      if (employeeDetails?.addressInfo?.stateId) {
        getCities(employeeDetails?.addressInfo?.stateId);
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        fullName: employeeDetails?.user?.fullName,
        email: employeeDetails?.user?.email,
        phone: employeeDetails?.user?.phone,
        gender: employeeDetails?.user?.gender,
        birthday: formatDateString(employeeDetails?.user?.birthday),
        address1: employeeDetails?.user?.address1,
        // profileImage: employeeDetails?.user?.profileImage,
        description: employeeDetails?.user?.description,
        postCode: employeeDetails?.user?.Address?.postCode,
        address: {
          city: selectedCity && selectedCity,
          state: selectedState && selectedState,
          country: selectedCountry && selectedCountry,
          postCode:
            employeeDetails &&
            employeeDetails.user &&
            employeeDetails.user.Address &&
            employeeDetails.user.Address.postCode,
        },
      }));
      let customerImage = employeeDetails?.user?.CustomerImage || [];
      let defaultImages = customerImage.map((el) => el);
      setDefaultImages(defaultImages);
      setSelectedSingleImage(employeeDetails?.user?.profileImage);
    }
  }, [employeeDetails]);
  // console.log("states", selectedCity, selectedState, selectedCountry );

  //Dispatch EmployeeDetails API
  const getEmployeeDetails = () => {
    dispatch(fetchEmployeeDetails()).then((el) => {
      if (el.payload.statusCode === 200) {
        setLoading(false);
      }
    });
  }

// Dispatch API's
  useEffect(() => {
    //Dispatch Salonlist API
    dispatch(fetchSalonsList()).then((response) => {
      setSalonsList(response.payload.salons);
    });
    //Dispatch EmployeeDetails API
    getEmployeeDetails()
  }, [dispatch]);

// Show country, state, city
  useEffect(() => {
    let country =
      employeeDetails &&
      employeeDetails.user &&
      employeeDetails.user.Address &&
      employeeDetails.user.Address.country;
    handleSelectCountry(country);
    let state =
      employeeDetails &&
      employeeDetails.user &&
      employeeDetails.user.Address &&
      employeeDetails.user.Address.state;
    handleSelectState(state);
    // setSelectedState(selectedState);
    let city =
      employeeDetails &&
      employeeDetails.user &&
      employeeDetails.user.Address &&
      employeeDetails.user.Address.city;
    handleSelectCity(city);
    handleCountryChange();
  }, []);

  return (
    <>
      {loading == true ? (
        <Loader loading={loading} />
      ) : (
        <div className="container profile-container">
          <header className="card text-center bg-white mt-4 mb-4">
            <div className="site-header-secondary-logo-container">
              <img src={logo_dark} alt="Site Brand" width="100%" />
            </div>
          </header>
          <div>
            <div className="col-md-4">
              <h5 className="heading-underline">
                <u>PROFILE</u>
              </h5>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <>
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-select">
                    <div className="select-img">
                      {selectedSingleImage ? (
                        <Image
                          src={selectedSingleImage}
                          roundedCircle
                          width="200"
                          height="200"
                        />
                      ): (
                      <img src="/assets/images/image.png"/>
                      )}
                    </div>
                    <div className="upload-btn-wrapper">
                      <p className="mb-0">PROFILE PICTURE</p>
                      <button className="btn browser-btn">
                        <span>Browser files</span>{" "}
                        <img src="/assets/images/upload-btn.png" />
                      </button>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleSingleImageChange(e.target.files[0])
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="select-salon-field form-group-input">
                    <h4>SELECT MAIN SALON</h4>
                    <section className="card select-card-field">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4 common-field">
                            <label className="label-field">PROVINCE</label>
                            <div className="select-field">
                              <CommonDropdown
                                options={states}
                                onSelect={handleSelectState}
                                // selectedOption={selectedState}
                                selectedOption={selectedState || ""}
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label className="label-field">CITY</label>
                            <div className="select-field">
                              <CommonDropdown
                                options={cities}
                                onSelect={handleSelectCity}
                                // selectedOption={selectedCity}
                                selectedOption={selectedCity || ""}
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label className="label-field">SELECT SALON</label>
                            <div className="select-field">
                              <CommonDropdown
                                options={salonsList}
                                onSelect={handleSelectSalons}
                                selectedOption={
                                  selectedCity && selectSalon.name
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group-input">
                    <label className="label-field">FULL NAME</label>
                    <input
                      type="text"
                      header="Full name"
                      name="fullName"
                      className="form-select input-form-field"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      onKeyUp={handleInputChange}
                    />
                    {/* Display the error message only when there is an error returned by the validation function */}
                    {validateFullName(formData.fullName) && (
                      <p style={{ color: "red", marginTop: "5px" }}>
                        {validateFullName(formData.fullName)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-input">
                    <label className="label-field">EMAIL</label>
                    <input
                      type="text"
                      className="form-select input-form-field"
                      placeholder="Email"
                      value={formData.email || ""}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-input">
                    <label className="label-field">PHONE</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-select input-form-field"
                      placeholder="Phone"
                      value={formData.phone || ""}
                      onChange={handleInputChange}
                      onKeyUp={handleInputChange}
                    />
                    {validatePhoneNumber(formData.phone) && (
                      <p style={{ color: "red", marginTop: "5px" }}>
                        {validatePhoneNumber(formData.phone)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-input">
                    <label className="label-field">GENDER</label>
                    <div className="select-field">
                      <CommonDropdown
                        options={genderOptions}
                        onSelect={handleSelectGender}
                        selectedOption={formData.gender || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    {validateGender(formData.gender) && (
                      <p style={{ color: "red", marginTop: "5px" }}>
                        {validateGender(formData.gender)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-input date-picker-field">
                    <label className="label-field">DATE OF BIRTH</label>
                    <MyDatePicker
                      prefilledDate={formData.birthday}
                      onSelect={handleDateSelect}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-input">
                    <label className="label-field">ADDRESS</label>
                    <input
                      type="text"
                      className="form-select input-form-field"
                      placeholder="Address"
                      name="address1"
                      value={formData.address1 || ""}
                      onChange={handleInputChange}
                      onKeyUp={handleInputChange}
                    />
                    {validateAddress(formData.address1) && (
                      <p style={{ color: "red", marginTop: "5px" }}>
                        {validateAddress(formData.address1)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-input">
                    <label className="label-field">COUNTRY</label>
                    <div className="select-field">
                      <CommonDropdown
                        options={countries}
                        onSelect={handleSelectCountry}
                        selectedOption={selectedCountry || ""}
                      // onChange={handleInputChange}
                      />
                    </div>
                    {validateCountry(selectedCountry) && (
                      <p style={{ color: "red", marginTop: "5px" }}>
                        {validateCountry(selectedCountry)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-input">
                    <label className="label-field">PROVINCE</label>
                    <div className="select-field">
                      <CommonDropdown
                        options={states}
                        onSelect={handleSelectState}
                        selectedOption={selectedState || ""}
                      // onChange={handleInputChange}
                      />
                    </div>
                    {validateState(selectedState) && (
                      <p style={{ color: "red", marginTop: "5px" }}>
                        {validateState(selectedState)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-input">
                    <label className="label-field">CITY</label>
                    <div className="select-field">
                      <CommonDropdown
                        options={cities}
                        onSelect={handleSelectCity}
                        selectedOption={selectedCity || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    {validateCity(selectedCity) && (
                      <p style={{ color: "red", marginTop: "5px" }}>
                        {validateCity(selectedCity)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-input">
                    <label className="label-field">POSTAL CODE</label>
                    <input
                      type="text"
                      className="form-select "
                      placeholder="Postal Code"
                      value={formData?.postCode}
                      name="postCode"
                      onChange={handleInputChange}
                      onKeyUp={handleInputChange}
                    />
                    {validatePostalCode(formData?.postCode) && (
                      <p style={{ color: "red", marginTop: "5px" }}>
                        {validatePostalCode(formData?.postCode)}
                      </p>
                    )}
                  </div>
                </div>
                <hr />
                <div className="col-md-4">
                  <h5 className="heading-underline additional-info">
                    ADDITIONAL INFORMATION
                  </h5>
                  <div
                    className={`upload-btn-wrapper ms-0 dropzone ${isDragActive ? "active" : ""
                      }`}
                    {...getRootProps()}
                  >
                    <button className="btn browser-btn" type="button">
                      <span>Browser files</span>
                      <img src="/assets/images/upload-btn.png" alt="Upload" />
                    </button>
                    <input type="file" accept="image/*" {...getInputProps()} />
                    {isDragActive ? (
                      <p className="dropimg-text">Drop the files here ...</p>
                    ) : (
                      <p className="dropimg-text">
                        {/* Drag 'n' drop some images here, or click to select images */}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="form-group-input">
                    <div className="photo-inform">
                      <div className="current-photos">
                        {defaultImages.map((image, index) => {
                        return (
                          <div className="first-photo" key={index}>
                            <img
                              src={image.path}
                              alt={`Image ${index + 1}`}
                              className="img-thumbnail"
                            />
                            <button
                          className="btn-close"
                          onClick={() => handleRemoveMediaImage(image.id)}
                        ></button>
                          </div>
                        )})}
                        {selectedImages.map((image, index) => (
                          <div className="first-photo" key={index}>
                            <img
                              src={URL.createObjectURL(image)}
                              alt={`Image ${index + 1}`}
                              className="img-thumbnail"
                            />
                            <button
                              className="btn-close"
                              onClick={() => handleRemoveImage(index)}
                            ></button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group-input">
                    <label className="label-field">
                      TELL US MORE ABOUT YOU
                    </label>
                    {/* <textarea name="description" className="form-select textarea-field">{formData?.description}</textarea> */}
                    <input
                      type="text"
                      name="description"
                      className="form-select textarea-field"
                      value={formData?.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  {validateDescription(formData?.description) && (
                    <p style={{ color: "red", marginTop: "5px" }}>
                      {validateDescription(formData?.description)}
                    </p>
                  )}
                </div>
                <div className="col-md-12 upload-continue-btn">
                  <button
                    disabled={
                      validateFullName(formData?.fullName) ||
                      validateAddress(formData?.address1) ||
                      validatePostalCode(formData?.postCode) ||
                      validateGender(formData.gender) ||
                      validateCountry(selectedCountry) ||
                      validateState(selectedState) || 
                      validateCity(selectedCity) ||
                      validateDescription(formData?.description)
                    }
                    className="btn continue-btn"
                  >
                    CONTINUE
                  </button>
                </div>
              </div>
            </>
          </form>
        </div>
      )}
    </>
  );
};

export default Profile;
