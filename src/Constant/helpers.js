export function getInitials(name) {
  const parts = name.split(" ");
  let initials = "";
  for (let part of parts) {
    initials += part[0];
  }
  return initials;
}

export const formatDate = (dateString) => {
  const date = new Date(dateString); // Create a Date object
  const day = date.getDate().toString().padStart(2, "0"); // Get day (0-padded)
  const month = date.toLocaleString("en-US", { month: "short" }); // Get month name (short)
  const year = date.getFullYear(); // Get year

  return `${day} ${month} ${year}`;
};

// this function will return api errors

export const getErrorMessages = (data) => {
  const errorArray = Object.entries(data).map(([field, messages]) => ({
    field,
    messages,
  }));
  const field = errorArray[0].field;
  return `${field} : ${errorArray[0].messages}`;
};

export function flattenData(data) {
  // Initialize an empty array to hold the transformed data
  let transformed = [];

  // Iterate over each item in the data array
  data.forEach((item, index) => {
    // Add the week identifier
    transformed.push(`Week${index + 1}`);

    // Add the main item to the transformed array
    transformed.push({
      Toppic: item.topic,
      date: item.date,
      details: item.details,
      completion: item.completion,
      ContentUpload: item.ContentUpload,
      VideoUpload: item.VideoUpload,
    });

    // Check if the item has subRows
    if (item.subRows && item.subRows.length > 0) {
      // Iterate over each subRow and push it to the transformed array
      item.subRows.forEach((subRow) => {
        transformed.push({
          Toppic: subRow.topic,
          date: subRow.date,
          details: subRow.details,
          completion: subRow.completion,
          ContentUpload: subRow.ContentUpload,
          VideoUpload: subRow.VideoUpload,
        });
      });
    }
  });

  return transformed;
}
