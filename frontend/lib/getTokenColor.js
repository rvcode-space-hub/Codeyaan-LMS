export const getTokenColor = (word) => {
  if (
    ["function", "return", "class", "def", "SELECT", "FROM", "WHERE"].includes(word)
  )
    return "text-purple-400";

  if (["console", "log", "print", "System"].includes(word))
    return "text-blue-400";

  if (word.startsWith('"') || word.startsWith("'"))
    return "text-green-400";

  if (!isNaN(word)) return "text-yellow-400";

  return "text-gray-300";
};