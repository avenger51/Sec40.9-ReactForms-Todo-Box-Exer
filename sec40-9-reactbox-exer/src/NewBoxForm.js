import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addBox({ ...formData, id: uuidv4() });
    setFormData({ width: '', height: '', backgroundColor: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='width'>Width:</label>
      <input 
        id='width'
        type='text' 
        name='width' 
        value={formData.width} 
        onChange={handleChange} 
      />
      <label htmlFor='height'>Height:</label>
      <input 
        id='height'
        type='text' 
        name='height' 
        value={formData.height} 
        onChange={handleChange} 
      />
      <label htmlFor='backgroundColor'>Background Color:</label>
      <input 
        id='backgroundColor'
        type='text' 
        name='backgroundColor' 
        value={formData.backgroundColor} 
        onChange={handleChange} 
      />
      <button>Add a new box</button>
    </form>
  );
}

export default NewBoxForm;
