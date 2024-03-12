export function getInitials(name) {
  const parts = name.split(" ");
  let initials = "";
  for (let part of parts) {
    initials += part[0];
  }
  return initials;
}
