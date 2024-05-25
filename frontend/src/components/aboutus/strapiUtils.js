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
  // not really necessary, b/c can just not use on front end if only need Title and Description
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

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Utility function to process Strapi data and extract title, description, and image URL
// if no image exists, only title and description are returned
export async function processStrapiData(endpointUrl, attributeName) {
  try {
    // Fetch the JSON data from the endpoint
    const response = await fetch(endpointUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json();

    // Extract the base URL from the endpoint URL
    const url = new URL(endpointUrl);
    const baseUrl = `${url.protocol}//${url.host}`;

    // Access the strapi data using the provided attribute name
    const strapiData = jsonData.data[0].attributes[attributeName]; // needed [0] to access the first object in the array

    if (strapiData) {
      // Assign the required attributes to variables
      const dataTitle = strapiData.Title;
      const dataDescription = strapiData.Description;

      // not really necessary, b/c can just not use on front end if only need Title and Description
      if (
        strapiData.Image &&
        strapiData.Image.data &&
        strapiData.Image.data.attributes &&
        strapiData.Image.data.attributes.url
      ) {
        const imageUrl = strapiData.Image.data.attributes.url;
        const dataImage = `${baseUrl}${imageUrl}`;
        console.log(dataImage);
        // Return all three variables if image exists
        return { dataTitle, dataDescription, dataImage };
      } else {
        // Return only title and description if no image exists
        return { dataTitle, dataDescription };
      }
    } else {
      throw new Error(
        `Attribute "${attributeName}" not found in the JSON data.`
      );
    }
  } catch (error) {
    console.error('Error fetching or processing data:', error);
    return null;
  }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Utility function to process Strapi data and extract title, description, and list of data for Accordion Data
export async function processStrapiDataList(endpointUrl, attributeName) {
  try {
    // Fetch the JSON data from the endpoint
    const response = await fetch(endpointUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json();

    // Access the Strapi data using the provided attribute name
    const strapiData = jsonData.data[0].attributes[attributeName]; // Added comments for clarity

    if (strapiData) {
      // Assign the required attributes to variables
      const dataTitle = strapiData.Title;
      const dataDescription = strapiData.Description;
      const dataAccordionData = strapiData.AccordionData;


      // Return all three variables if data exists
      return {  dataTitle, dataDescription,  dataAccordionData };
    } else {
      throw new Error(
        `Attribute "${attributeName}" not found in the JSON data.`
      );
    }
  } catch (error) {
    console.error('Error fetching or processing data:', error);
    return null;
  }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
