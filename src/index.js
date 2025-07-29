/* global document */
import { clearError, getFieldName, showError } from "./utils/helper.js";

/**
 * @typedef {Object} ValidateFormOptions
 * @property {string} [errorClass] - Optional CSS class to apply to invalid inputs and error messages.
 * @property {string} [errorClassStyle] - Class to apply to style errors.
 * @property {Object} [errorStyle] - Inline CSS styles for error message elements.
 */

/**
 * Validates a form identified by the given form ID.
 *
 * @since 2.0.0
 * @param {string} formId - The ID of the form element to validate.
 * @param {ValidateFormOptions} [options={}] - Optional configuration settings.
 *
 * TODO: Add a second parameter (options) for configuring validation behavior:
 * - isSubmit: (boolean) whether to auto-submit if valid [default: true]
 * - withResponse: (function) optional callback to handle validation result
 * - customRules: (object) additional field-specific validation rules
 */
function validateForm(formId, options = {}) {
  const form = document.getElementById(formId);
  const errorClass = options.errorClass || "error-message";
  const errorClassStyle = options.errorClassStyle || "";
  const errorStyle = options.errorStyle || {};
  if (!form) return; // Exit if form not found
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Clear previous error messages
    form.querySelectorAll(`.${errorClass}`).forEach((e) => e.remove());
    const inputs = form.querySelectorAll("input, select, textarea");
    let isValid = true;
    inputs.forEach((input) => {
      clearError(input, errorClass);
      if (input.hasAttribute("required") && !input.value.trim()) {
        isValid = false;
        showError(input, `${getFieldName(input, form)} must be filled`, {
          errorClass,
          errorClassStyle,
          errorStyle,
        });
      } else if (input.type === "email" && !validateEmail(input.value)) {
        isValid = false;
        showError(input, `Invalid email format`, {
          errorClass,
          errorClassStyle,
          errorStyle,
        });
      } else if (input.type === "tel" && !validatePhoneNumber(input.value)) {
        isValid = false;
        showError(input, `Invalid phone number`, {
          errorClass,
          errorClassStyle,
          errorStyle,
        });
      }
    });

    if (isValid) {
      form.submit();
    }
  });

  /**
   * Validate an email address.
   *
   * @param {string} email
   * @returns {boolean}
   *
   * TODO: Move to separate file for email validation if it'll be.
   */
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  /**
   * Validate a phone number.
   *
   * @param {string} phone
   * @returns {boolean}
   *
   * TODO: Move to separate file for phone validation if it'll be.
   */
  function validatePhoneNumber(phone) {
    const re = /^[0-9\s()+-]{6,20}$/;
    return re.test(String(phone));
  }
}

export default validateForm;
