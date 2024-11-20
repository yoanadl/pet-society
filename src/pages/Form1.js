// Form1.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../services/AuthContext.js';

const Form1 = ({ formData, handleInputChange, handleSubmit }) => {
  const { userEmail } = useContext(AuthContext);

  return (
    <form onSubmit={handleSubmit}>

    <h2>Personal Information</h2>
    <label htmlFor="fullName">Full Name</label>
    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange}/>
    <br />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
    <br />

    <label htmlFor="address">Address</label>
    <input type="text" id="address" name="address"value={formData.address} onChange={handleInputChange} />
    <br />

    {/* only number  */}
    <label htmlFor="phone">Phone Number</label>
    <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleInputChange}/>
    <br />

    <h2>Living Situation</h2>
    {/* dropdown, house/apartement/rural or farm */}
    <label htmlFor="housing">Type of Housing</label>
    <select id="housing" name="housingType" value={formData.housingType} onChange={handleInputChange}>
    <option value="" disabled>Select your housing type</option>
    <option value="House">House</option>
    <option value="Apartment">Apartment</option>
    <option value="Rural or Farm">Rural or Farm</option>
    <option value="Other">Other</option>
    </select>
    {formData.housingType === 'Other' && (
    <>
        <label htmlFor="otherHousing">Please specify:</label>
        <textarea
        id="otherHousing"
        name="otherHousing"
        value={formData.otherHousing}
        onChange={handleInputChange}
        />
    </>
    )}
    <br />


    {/* no, yes with field */}
    <label htmlFor="homeOwnership">Own or Rent Home (If rent, please provide landlord's contact information for verification)</label>
    <select id="homeOwnership" name="homeOwnership" value={formData.homeOwnership} onChange={handleInputChange}>
    <option value="Own">Own</option>
    <option value="Rent">Rent</option>

    </select>
    {formData.homeOwnership === 'Rent' && (
    <>
        <label htmlFor="landlordInfo">Landlord's Contact Information:</label>
        <textarea
        id="landlordInfo"
        name="landlordInfo"
        value={formData.landlordInfo}
        onChange={handleInputChange}
        />
    </>
    )}
    <br />


    {/* yes, no */}
    <label htmlFor="outdoorSpace">Do you have any outdoor space/yard?</label>
    <select id="outdoor" name="outdoorSpace" value={formData.outdoorSpace} onChange={handleInputChange}>
    <option value="yard-yes">Yes</option>
    <option value="yard-no">No</option>
    </select>
    <br />

    {/* yes, no*/}
    <label htmlFor="petsAllowed">Are pets allowed in your home or complex?</label>
    <select id="pets" name="petsAllowed" value={formData.petsAllowed} onChange={handleInputChange}>
    <option value="pets-yes">Yes</option>
    <option value="pets-no">No</option>
    </select>
    <br />

    {/* no, yes with field */}
    <label htmlFor="otherPets">Do you currently have any other pets? </label>
    <select id="otherPets" name="otherPets" value={formData.otherPets} onChange={handleInputChange}>
    <option value="other-no">No</option>
    <option value="other-yes">Yes</option>

    </select>
    {formData.otherPets === 'other-yes' && (
    <>
        <label htmlFor="otherPetsDesc">Please describe the other pet(s) characteristics</label>
        <textarea
        id="otherPetsDesc"
        name="otherPetsDesc"
        value={formData.otherPetsDesc}
        onChange={handleInputChange}
        />
    </>
    )}
    <br />

    <h2>Employment and Lifestyle</h2>
    {/* numbers */}
    <label htmlFor="hoursAlone">How many hours per day will the pet be left alone?</label>
    <input type="number" id="hoursAlone" name="hoursAlone"value={formData.hoursAlone} onChange={handleInputChange} />
    <br />

    {/* >10, 6-10, 1-5, i dont travel at all*/}
    <label htmlFor="travel">Do you travel frequently? If do, how frequent</label>
    <select id="travel" name="travel" value={formData.travel} onChange={handleInputChange}>
    <option value="travel-zero">I don't travel at all</option>
    <option value="travel-little">1-3 times a year</option>
    <option value="travel frequent">3-6 times a year</option>
    <option value="travel-often">&gt;6 times a year </option>
    </select>
    <br />

    <h2>Pet Care Experience</h2>
    {/* no, yes with a field */}
    <label htmlFor="ownedPets">Have you ever owned a pet before? If yes, please describe your previous pet(s)</label>
    <select id="ownedPets" name="ownedPets" value={formData.ownedPets} onChange={handleInputChange}>
    <option value="owned-no">No</option>
    <option value="owned-yes">Yes</option>

    </select>
    {formData.ownedPets === 'owned-yes' && (
    <>
        <label htmlFor="petCareExperience">Please describe the pet(s) characteristics</label>
        <textarea
        id="petCareExperience"
        name="petCareExperience"
        value={formData.petCareExperience}
        onChange={handleInputChange}
        />
    </>
    )}
    <br />


    {/* companion, exercise partner, other field */}
    <label htmlFor="petReason">Why do you want to adopt a pet?</label>
    <textarea
        id="petReason"
        name="petReason"
        value={formData.petReason}
        onChange={handleInputChange}
        />
    <br />


    {/* checklist, dog, cat, other field */}
    <label>What type of pet you are interested in adopting?</label>
    {/* Dog */}
    <div>
    <input
        type="checkbox"
        id="interestedInDog"
        name="interestedInDog"
        checked={formData.interestedInDog}
        onChange={handleInputChange}
    />
    <label htmlFor="interestedInDog">Dog</label>
    </div>

    {/* Cat */}
    <div>
    <input
        type="checkbox"
        id="interestedInCat"
        name="interestedInCat"
        checked={formData.interestedInCat}
        onChange={handleInputChange}
    />
    <label htmlFor="interestedInCat">Cat</label>
    </div>

    {/* Other */}
    <div>
    <input
        type="checkbox"
        id="interestedInOther"
        name="interestedInOther"
        checked={formData.interestedInOther}
        onChange={handleInputChange}
    />
    <label htmlFor="interestedInOther">Other</label>
    </div>

    {formData.interestedInOther && (
    <div>
        <label htmlFor="interestedCustom">Please specify:</label>
        <textarea
        id="interestedCustom"
        name="interestedCustom"
        value={formData.interestedCustom}
        onChange={handleInputChange} 
        />
    </div>
    )}


    {/* no, yes with field*/}
    <label htmlFor="petAge">Do you have a preference for the pet's age?</label>
    <select id="petAge" name="petAge" value={formData.petAge} onChange={handleInputChange}>
    <option value="age-no">No</option>
    <option value="age-yes">Yes</option>

    </select>
    {formData.petAge === 'age-yes' && (
    <>
        <label htmlFor="petAgePreference">Describe your age preference</label>
        <textarea
        id="petAgePreference"
        name="petAgePreference"
        value={formData.petAgePreference}
        onChange={handleInputChange}
        />
    </>
    )}
    <br />

    {/* radio button, male/female/no preference */}
    <label htmlFor="petGenderPreference">Do you have a preference for the pet's gender</label>
    <select id="petGenderPreference" name="petGenderPreference" value={formData.petGenderPreference} onChange={handleInputChange}>
    <option value="gender-male">Male</option>
    <option value="gender-female">Female</option>
    <option value="gender-no">I have no preference</option>
    </select>
    <br />


    <h2>Health and Safety</h2>
    {/* yes no */}
    <label htmlFor="accessToVet">Do you have access to a veterinarian or veterinary clinic for the pet’s care?</label>
    <select id="accesstoVet" name="accessToVet" value={formData.accessToVet} onChange={handleInputChange}>
    <option value="access-yes">Yes</option>
    <option value="access-no">No</option>
    </select>
    <br />

    {/* yes no */}
    <label htmlFor="vetCare">Are you willing to provide regular veterinary care, including vaccinations, flea/tick prevention, and spaying/neutering if not already done?</label>
    <select id="vetCare" name="vetCare" value={formData.vetCare} onChange={handleInputChange}>
    <option value="vetcare-yes">Yes</option>
    <option value="vetcare-no">No</option>
    </select>
    <br />

    {/* radio button Indoors/Outdoors/Indoors and Outdoors */}
    <label htmlFor="petLocation">Will the pet be kept indoors or outdoors?</label>
    <select id="petLocation" name="petLocation" value={formData.petLocation} onChange={handleInputChange}>
    <option value="location-indoors">Indoors</option>
    <option value="location-outdoors">Outdoors</option>
    <option value="locaiton-both">Indoors & Outdoors</option>
    </select>
    <br />


    {/* yes no */}
    <label htmlFor="familyAllergies">Do any family members have allergies to pets?</label>
    <select id="familyAllergies" name="familyAllergies" value={formData.familyAllergies} onChange={handleInputChange}>
    <option value="allergy-yes">Yes</option>
    <option value="allergy-no">No</option>
    </select>
    <br />

    <h2>Commitment to Pet Welfare</h2>
    {/* yes no */}
    <label htmlFor="longtermCommitment">Are you prepared for the long-term commitment of caring for a pet, including potential medical expenses, training, and time requirements? </label>
    <select id="longTermCommitment" name="longTermCommitment" value={formData.longTermCommitment} onChange={handleInputChange}>
    <option value="commitment-yes">Yes</option>
    <option value="commitment-no">No</option>
    </select>
    <br />

    {/* text field */}
    <label htmlFor="unableToCarePlan">What would you do if you are no longer able to care for the pet?</label>
    <textarea
        id="unableToCarePlan"
        name="unableToCarePlan" 
        value={formData.unableToCarePlan}
        onChange={handleInputChange} 
    />
    <br/>

    <h2>Adoption Process</h2>
    {/* yes no */}
    <label htmlFor="adoptionFee">Are you aware of and prepared to pay the adoption fee?</label>
    <select id="adoptionFee" name="adoptionFee" value={formData.adoptionFee} onChange={handleInputChange}>
    <option value="fee-yes">Yes</option>
    <option value="fee-no">No</option>
    </select>

    {/* yes no */}
    <label htmlFor="homeVisit">Are you open to a home visit or inspection before finalizing the adoption?</label>
    <select id="homeVisit" name="homeVisit" value={formData.homeVisit} onChange={handleInputChange}>
    <option value="visit-yes">Yes</option>
    <option value="visit-no">No</option>
    </select>

    {/* yes no */}
    <label htmlFor="shelterGuidelines">Do you agree to follow the shelter's guidelines regarding pet care, training, and health?</label>
    <select id="shelterGuidelines" name="shelterGuidelines" value={formData.shelterGuidelines} onChange={handleInputChange}>
    <option value="guidelines-yes">Yes</option>
    <option value="guidelines-no">No</option>
    </select>


    <button type="submit">Submit</button>
    </form>
  );
};

export default Form1;
