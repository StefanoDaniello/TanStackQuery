// Funzione per fetchare i campi
export const fetchUsers = async () => {
  const res = await fetch("/api/users", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("Errore nel recupero degli utenti");
  }

  return res; // Assumiamo che ritorni un array
};
