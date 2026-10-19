// Archivo de configuración central de HealthApp
export const APP_NAME = "HealthApp";
export const APP_VERSION = "1.0.0";
export const API_URL = "https://api.healthapp.dev/v1";
// Conflicto resuelto: cada módulo tiene su propio tiempo de espera
export const LOGIN_TIMEOUT_MS = 8000;  // inicio de sesión (feature-login)
export const API_TIMEOUT_MS = 15000;   // consultas a base de datos (módulo db)
export const DB_NAME = "healthapp.db";
