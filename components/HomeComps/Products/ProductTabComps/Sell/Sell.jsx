'use client';
import React, { useState } from 'react';

const Sell = () => {
  const [formData, setFormData] = useState({ state: '', city: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <h2>Sell</h2>
    </section>
  );
};

export default Sell;
