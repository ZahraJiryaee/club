export default function generateUniqueId(prefix = "component") {
  return `${prefix}-${Math.random().toString(16).slice(2)}`;
}
