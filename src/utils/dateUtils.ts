// src/utils/dateUtils.ts

/**
 * Skapar ett datum som är justerat med +2 timmar från nuvarande tid.
 * @returns Ett nytt Date-objekt med +2 timmar.
 */
export function createAdjustedDate(): Date {
    const date = new Date();
    date.setHours(date.getHours() + 2);
    return date;
  }
  