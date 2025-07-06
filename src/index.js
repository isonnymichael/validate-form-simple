/**
 * Validates a form identified by the given form ID.
 *
 * @since 2.0.0
 * @param {string} formId - The ID of the form element to validate.
 * 
 *  TODO: Add a second parameter (options) for configuring validation behavior:
 *      - isSubmit: (boolean) whether to auto-submit if valid [default: true]
 *      - withResponse: (function) optional callback to handle validation result
 *      - customRules: (object) additional field-specific validation rules
 */
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return; // Exit if form not found

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Clear previous error messages
    form.querySelectorAll('.error-message').forEach((e) => e.remove());

    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;

    inputs.forEach((input) => {
      clearError(input);

      if (input.hasAttribute('required') && !input.value.trim()) {
        isValid = false;
        showError(input, `${getFieldName(input)} must be filled`);
      } else if (input.type === 'email' && !validateEmail(input.value)) {
        isValid = false;
        showError(input, `Invalid email format`);
      } else if (input.type === 'tel' && !validatePhoneNumber(input.value)) {
        isValid = false;
        showError(input, `Invalid phone number`);
      }
    });

    if (isValid) {
      form.submit();
    }
  });

  /**
   * Displays an error message below the input element.
   *
   * @param {HTMLElement} input - The input element.
   * @param {string} message - The error message to display.
   * 
   * TODO: Move to utils/helper.js
   */
  function showError(input, message) {
    const parent = input.parentElement;
    const error = parent.querySelector('.error-message');
    if (error) {
      error.textContent = message;
    } else {
      const errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      errorMessage.textContent = message;
      parent.appendChild(errorMessage);
    }
  }

  /**
   * Clears the error message for the input element.
   * 
   * TODO: Move to utils/helper.js
   */
  function clearError(input) {
    const parent = input.parentElement;
    const error = parent.querySelector('.error-message');
    if (error) error.remove();
  }

  /**
   * Returns the field name from label if available, else from id.
   *
   * @param {HTMLElement} input - The input element.
   * @returns {string} The formatted field name.
   * 
   * TODO: Move to utils/helper.js
   */
  function getFieldName(input) {
    const label = form.querySelector(`label[for="${input.id}"]`);
    if (label) return label.textContent.trim();
    if (input.id) return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    return '';
  }
}

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

export default validateForm;
