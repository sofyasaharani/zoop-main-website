/** @format */

import { format, parse, isValid } from "date-fns";

// Function to format date string
export function formatDateString(dateString) {
  try {
    // Debugging: Check the input date string
    console.log("Input date string:", dateString);

    // Attempt to parse the date string with the expected format
    const parsedDate = parse(dateString, "yyyy/MM/dd at h:mm a", new Date());

    // Check if the parsed date is valid
    if (!isValid(parsedDate)) {
      throw new Error("Parsed date is invalid");
    }

    // Format the date to 'MMMM dd, yyyy'
    return format(parsedDate, "MMMM dd, yyyy");
  } catch (error) {
    // Debugging: Output any errors
    console.error("Date formatting error:", error);

    // Return a fallback value
    return "Invalid date";
  }
}
