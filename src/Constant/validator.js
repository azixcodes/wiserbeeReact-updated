export const validator = (fields) => {
  for (const [key, value] of Object.entries(fields)) {
    if (value === null || value === undefined || value === "") {
      return `${key} is empty`;
      // return;'
    }
  }
  return "success";
};
