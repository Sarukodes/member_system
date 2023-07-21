import React from "react";

function Province() {
  const options = [
    "Koshi Province",
    "Madesh Province",
    "Bagmati Province",
    "Gandaki Province",
    "Lumbini Province",
    "Karnali Province",
    "Sudurpashchim Province",
  ];

  return (
    <div>
      <label>Select Province:
      <select>
      <option value="">Select a Province:</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      </label>
    </div>
  );
}
export default Province;








