import { validateEmail, validatePhoneNumber } from 'validate-input-simple'; // Import validation functions

/**
 * Validates a form identified by the given form ID.
 * 
 * @since 1.1.0
 * @param {string} formId - The ID of the form element to validate.
 */
const validateForm = (formId) => {
    const form = document.getElementById(formId);
    if (!form) return;  // Exit if form not found

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Clear previous error messages
      form.querySelectorAll('.error-message').forEach(e => e.remove());

      const inputs = form.querySelectorAll('input, select, textarea');
      let isValid = true;

      inputs.forEach(input => {
        clearError(input);
        if (input.hasAttribute('required') && !input.value.trim()) {
          isValid = false;
          showError(input, `${getFieldName(input)} must be filled`);
        } else if (input.getAttribute('type') === 'email' && !validateEmail(input.value)) {
          isValid = false;
          showError(input, `Invalid email format`);
        } else if (input.getAttribute('type') === 'tel' && !validatePhoneNumber(input.value)) {
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
     * @since 1.0.0
     * @param {HTMLElement} input - The input element.
     * @param {string} message - The error message to display.
     */
    const showError = (input, message) => {
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
    };

    /**
     * Clears the error message for the input element.
     */
    const clearError = (input) => {
      const parent = input.parentElement;
      const error = parent.querySelector('.error-message');
      if (error) error.remove();
    };

    /**
     * Returns the field name from label if available, else from id.
     * 
     * @since 1.0.0
     * @param {HTMLElement} input - The input element.
     * @returns {string} The formatted field name.
     */
    const getFieldName = (input) => {
      const label = form.querySelector(`label[for="${input.id}"]`);
      if (label) return label.textContent.trim();
      if (input.id) return input.id.charAt(0).toUpperCase() + input.id.slice(1);
      return '';
    };
};
  
export default validateForm;
