// C:\OSS\FOSS_Issue\move_helper_function\src\index.js

import { showError, clearError, getFieldName } from "./utils/helper.js"; // Đã thêm dòng import này

/**
 * Validates a form identified by the given form ID.
 *
 * @since 2.0.0
 * @param {string} formId - The ID of the form element to validate.
 *
 * TODO: Add a second parameter (options) for configuring validation behavior:
 * - isSubmit: (boolean) whether to auto-submit if valid [default: true]
 * - withResponse: (function) optional callback to handle validation result
 * - customRules: (object) additional field-specific validation rules
 */
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return; // Exit if form not found

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Clear previous error messages
    form.querySelectorAll(".error-message").forEach((e) => e.remove());

    const inputs = form.querySelectorAll("input, select, textarea");
    let isValid = true;

    inputs.forEach((input) => {
      clearError(input);

      if (input.hasAttribute("required") && !input.value.trim()) {
        isValid = false;
        showError(input, `${getFieldName(input, form)} must be filled`); // Đã cập nhật lời gọi getFieldName
      } else if (input.type === "email" && !validateEmail(input.value)) {
        isValid = false;
        showError(input, `Invalid email format`);
      } else if (input.type === "tel" && !validatePhoneNumber(input.value)) {
        isValid = false;
        showError(input, `Invalid phone number`);
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
} // Dấu ngoặc nhọn đóng này là của hàm validateForm()

export default validateForm;
