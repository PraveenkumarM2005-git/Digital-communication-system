const restrictedWords = ["badword", "hate", "abuse"];

export const findRestrictedWords = (messages) => {
  return messages.filter(msg =>
    restrictedWords.some(word =>
      msg.content.toLowerCase().includes(word)
    )
  );
};