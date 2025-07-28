/* global document */

/**
 * Displays an error message below the input element.
 *
 * @param {HTMLElement} input - The input element.
 * @param {string} message - The error message to display.
 * @param {{
 *   errorClass: string,
 *   errorClassStyle?: string,
 *   errorStyle?: Object,
 * }} options
 */
export function showError(input, message, options) {
  const parent = input.parentElement;
  if (!parent) return;
  const { errorClass, errorStyle, errorClassStyle } = options;
  const existingError = parent.querySelector(`.${errorClass}`);
  if (existingError) {
    existingError.textContent = message;
    // Apply extra class (if any)
    if (errorClassStyle) {
      existingError.classList.add(errorClassStyle);
    }
    // Apply inline styles
    if (errorStyle) {
      Object.assign(existingError.style, errorStyle);
    }
  } else {
    const errorMessage = document.createElement("div");
    errorMessage.className = errorClass;
    errorMessage.textContent = message;
    // Apply extra class (if any)
    if (errorClassStyle) {
      errorMessage.classList.add(errorClassStyle);
    }
    // Apply inline styles
    if (errorStyle) {
      Object.assign(errorMessage.style, errorStyle);
    }
    parent.appendChild(errorMessage);
  }
}

/**
 * Clears the error message for the input element.
 * @param {string} errorClass - The class name used for error messages.
 */
export function clearError(input, errorClass = "error-message") {
  const parent = input.parentElement;
  const error = parent.querySelector(`.${errorClass}`);
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
