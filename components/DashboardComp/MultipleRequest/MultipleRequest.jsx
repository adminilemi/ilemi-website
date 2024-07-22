'use client';

import React, { useState } from 'react';

const MultipleRequest = () => {
  const [formData, setFormData] = useState([
    {
      purpose: '',
      yearBuilt: '',
      propertySubtype: '',
      propertyType: '',
      bedrooms: '',
      bathrooms: '',
      toilets: '',
      squareFeet: '',
      propertyType: '',
      propertySubtype: '',
    },
  ]);
  return (
    <section>
      <h2>Multiple</h2>
    </section>
  );
};

export default MultipleRequest;
