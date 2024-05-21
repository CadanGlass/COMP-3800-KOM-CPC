

// Utility function to fetch and get attribute data for About Us page 
// from Strapi About Collection.
// Untested


const fetchAboutData = async (url, attributeName) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  // Check if data array exists and has at least one item
  if (!data || !data.data || data.data.length === 0) {
    throw new Error('No data found');
  }

  // Extract the first item from the data array
  const firstItem = data.data[0];

  // Check if the specified attribute exists within the first item's attributes
  if (
    !firstItem ||
    !firstItem.attributes ||
    !firstItem.attributes[attributeName]
  ) {
    throw new Error(`${attributeName} data not found`);
  }

  // Return the specified attribute object
  return firstItem.attributes[attributeName];
};

export { fetchAboutData };