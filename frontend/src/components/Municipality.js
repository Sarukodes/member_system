import React, { useState } from 'react';
import municipalitiesData from '../municipality.json';

const MunicipalitySelector = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedMunicipality('');
  };

  const handleMunicipalityChange = (e) => {
    setSelectedMunicipality(e.target.value);
  };

  const districts = municipalitiesData.map((district) => district.district);

  const local_body = municipalitiesData.find(
    (district) => district.district === selectedDistrict
  )?.local_body;

  return (
    <div>
      <div>
        <label>
         Select District:
          <select value={selectedDistrict} onChange={handleDistrictChange}>
            <option value="">Select a district</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
        </label>
      </div>
      {selectedDistrict && (
        <div>
          <label>
           Select Local Body:
            <select
              value={selectedMunicipality}
              onChange={handleMunicipalityChange}
            >
              <option value="">Select a local body</option>
              {local_body &&
                local_body.map((municipality, index) => (
                  <option key={index} value={municipality}>
                    {municipality}
                  </option>
                ))}
            </select>
          </label>
        </div>
      )}
  
    </div>
  );
};

export default MunicipalitySelector;
