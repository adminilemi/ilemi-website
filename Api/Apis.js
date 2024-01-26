const baseUrl = 'https://ile-mi-app.onrender.com';

export const getPropByType = async (formData) => {
  const rentData = await fetch(
    `${baseUrl}/property/special-filter/property-special-filter`,
    {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'content-type': 'application/json',
      },

      next: {
        revalidate: 0, // don't cache this data at all
      },
    },
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
