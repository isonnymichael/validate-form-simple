//C:\OSS\FOSS_Issue\move_helper_function\src\utils\helper.js
// TODO: add helper function to validate form.
// src/utils/helper.js

/**
 * Displays an error message below the input element.
 *
 * @param {HTMLElement} input - The input element.
 * @param {string} message - The error message to display.
 */
export function showError(input, message) {
  const parent = input.parentElement;
  const error = parent.querySelector(".error-message");
  if (error) {
    error.textContent = message;
  } else {
    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.textContent = message;
    parent.appendChild(errorMessage);
  }
}

/**
 * Clears the error message for the input element.
 */
export function clearError(input) {
  const parent = input.parentElement;
  const error = parent.querySelector(".error-message");
  if (error) error.remove();
}

/**
 * Returns the field name from label if available, else from id.
 *
 * @param {HTMLElement} input - The input element.
 * @returns {string} The formatted field name.
 */
export function getFieldName(input, form) {
  const label = form.querySelector(`label[for="${input.id}"]`);
  if (label) return label.textContent.trim();
  if (input.id) return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  return "";
}
