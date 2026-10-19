export function validateLogin(user: string, pass: string): string | null {
  if (user.trim().length < 3) return "El usuario debe tener al menos 3 caracteres";
  if (pass.length < 8) return "La contraseña debe tener al menos 8 caracteres";
  return null;
}
