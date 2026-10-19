export const PATIENTS_TABLE = `
  CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    birth_date TEXT NOT NULL
  );`;
