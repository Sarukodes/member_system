import React, { useState } from "react";
import axios from "axios";
import municipalitiesData from "../../municipality.json";

const MunicipalitySelector = ({ onDistrictChange }) => {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [, setSelectedMunicipality] = useState("");

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    onDistrictChange(district);

  };
  const districts = municipalitiesData.map((item) => item.district);


  return (
    <div>
      <div className="form-group">
        <label htmlFor="district">Select District:</label>
        <select
          value={selectedDistrict}
          onChange={handleDistrictChange}
          className="form-control"
        >
          <option value="">Select a district</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

function Add() {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");

  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
    setPost({ ...post, district: district })
    console.log(post);
  };

  const handleMunicipalityChange = (municipality) => {
    setSelectedMunicipality(municipality);
    setPost({ ...post, local_body: municipality });
    console.log(post);
  };
  const [post, setPost] = useState({
    name: "",
    province: "",
    district: "",
    local_body: "",
    ward: "",
    tole: "",
    phoneno: "",
    date: ""
  });

  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    axios
      .post('http://localhost:8000/api/add', post)
      .then((res) => {
        console.log(res)
        setMessage(res.data.message)
      })
      .catch((err) => console.log(err));
    event.preventDefault();
  };

  return (
    <div>
      <div className="container mt-6">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Add Member</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-6 p-1">
                      <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter your name"
                          onChange={(e) => setPost({ ...post, name: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 p-1">
                      <div class="form-group ">
                        <label for="province">Province</label>
                        <select id="province" class="form-control" onChange={(e) => { setPost({ ...post, province: e.target.value }) }}>
                          <option selected>Select province</option>
                          <option> Koshi Province</option>
                          <option> Madesh Province</option>
                          <option> Bagmati Province</option>
                          <option> Gandaki Province</option>
                          <option> Lumbini Province</option>
                          <option> Karnali Province</option>
                          <option> Sudurpashchim Province</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 p-1">
                      <MunicipalitySelector
                        onDistrictChange={handleDistrictChange}
                      // onMunicipalityChange={handleMunicipalityChange}
                      />
                    </div>
                    <div className="col-md-6 p-1">
                      <div className="form-group">
                        <label htmlFor="local_body">Local Body</label>
                        <select
                          className="form-control"
                          value={selectedMunicipality}
                          onChange={(e) => { setSelectedMunicipality(e.target.value); setPost({ ...post, local_body: e.target.value }) }}
                        >
                          <option value="">Select local body</option>
                          {selectedDistrict &&
                            municipalitiesData
                              .find((item) => item.district === selectedDistrict)
                              .local_body.map((municipality, index) => (
                                <option key={index} value={municipality}>
                                  {municipality}
                                </option>
                              ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 p-1">
                      <div class="form-group">
                        <label for="Ward">Ward no</label>
                        <input
                          type="number"
                          class="form-control"
                          id="ward"
                          placeholder="Enter your ward no"
                          onChange={(e) => setPost({ ...post, ward: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 p-1">
                      <div class="form-group">
                        <label for="Name">Tole</label>
                        <input
                          type="text"
                          class="form-control"
                          id="tole"
                          placeholder="Enter your tole"
                          onChange={(e) => setPost({ ...post, tole: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="div-col-md-12 p-1">
                      <div class="form-group">
                        <label for="Phoneno">Phone no</label>
                        <input
                          type="phone"
                          class="form-control"
                          id="name"
                          placeholder="Enter your phoneno"
                          onChange={(e) => setPost({ ...post, phoneno: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="div-col-md-12 p-1">
                      <div class="form-group">
                        <label for="DOB">DOB</label>
                        <input
                          type="date"
                          class="form-control"
                          id="DOB"
                          placeholder="Enter your DOB"
                          onChange={(e) => setPost({ ...post, date: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                  <button onClick={handleSubmit} className="btn btn-primary">
                    Submit
                  </button>
                </form>
                <div className="mt-3">
                  <h4>{message}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
