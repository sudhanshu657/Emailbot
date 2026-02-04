const BACKEND_URL = "http://localhost:8000";

export const sendMessage = async (message) => {
  const res = await fetch(`${BACKEND_URL}/chat/message`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error("Chat request failed");
  }

  const data = await res.json();
  return data.reply;
};
