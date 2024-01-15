const baseUrl = 'https://ile-mi-app.onrender.com';

export const getPropByType = async (formData) => {
  const rentData = await fetch(
    `${baseUrl}/property/all-filter/property-all-filter`,
    { method: 'POST', body: JSON.stringify(formData) },
  );

  if (!rentData.ok) {
    throw new Error(`Failed to fetch the data`);
  }

  return await rentData.json();
};

export const getPropById = async (id) => {
  const singleProp = await fetch(`${baseUrl}/property/property-by-id/${id}`);

  if (!singleProp.ok) {
    throw new Error(`Failed to fetch the data`);
  }

  return await singleProp.json();
};

export const getAgentById = async (id) => {
  const singleProp = await fetch(`${baseUrl}/Agent/get-agent-by-id/${id}`);

  if (!singleProp.ok) {
    throw new Error(`Failed to fetch the data`);
  }

  return await singleProp.json();
};
