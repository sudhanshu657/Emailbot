const BACKEND_URL = "http://localhost:8000";

export const getSession = async () => {
  const res = await fetch(`${BACKEND_URL}/auth/session`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Not authenticated");
  return res.json();
};
