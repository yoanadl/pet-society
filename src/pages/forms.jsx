import React, { useState } from 'react';

const Forms = () => {
  // State to keep track of the selected form
  const [selectedForm, setSelectedForm] = useState('form1');

  // Handler for changing the dropdown selection
  const handleFormChange = (e) => {
    setSelectedForm(e.target.value);
  };

  return (
    <div>
      <h1>Forms Page</h1>

      {/* Dropdown Menu */}
      <select value={selectedForm} onChange={handleFormChange}>
        <option value="form1">Form 1</option>
        <option value="form2">Form 2</option>
        <option value="form3">Form 3</option>
      </select>

      {/* Display form based on selected option */}
      {selectedForm === 'form1' && (
        <form>
          <h2>Adoption</h2>

          <h2>Personal Information</h2>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="name">Address:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Phone Number:</label>
          <input type="text" id="name" name="name" />
          <br />

          <h2>Living Situation</h2>
          {/* dropdown, house/apartement/rural or farm */}
          <label htmlFor="name">Type of Housing</label> 
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Do you have any outer space/yard?</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="name">Own or Rent Home</label>
          <input type="text" id="name" name="name" />
          <br />

          <button type="submit">Submit</button>
        </form>
      )}

      {selectedForm === 'form2' && (
        <form>
          <h2>Form 2</h2>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" />
          <br />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}

      {selectedForm === 'form3' && (
        <form>
          <h2>Form 3</h2>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Forms;
