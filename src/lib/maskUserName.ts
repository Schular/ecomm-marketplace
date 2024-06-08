/**
 * Masks the user's name by keeping only the first three letters
 * and replacing the rest with asterisks.
 *
 * @param name - The user's name to be masked.
 * @returns The masked name.
 */
export function maskUserName(name: string): string {
  const spaceIndex = name.indexOf(" ");

  if (spaceIndex === -1) {
    return name;
  }

  const visiblePart = name.slice(0, spaceIndex + 1);
  const maskedPart = "*".repeat(name.length - visiblePart.length);

  return visiblePart + maskedPart;
}
