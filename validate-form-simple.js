/**
 * Validates a form identified by the given form ID.
 * 
 * @since 1.0.0
 * @param {string} formId - The ID of the form element to validate.
 */
const validateForm = (formId) => {
    const form = document.getElementById(formId);
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputs = form.querySelectorAll('input, select, textarea');
      let isValid = true;
  
      inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          isValid = false;
          showError(input, `${getFieldName(input)} must be filled`);
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
     * Returns the field name with the first letter capitalized.
     * 
     * @since 1.0.0
     * @param {HTMLElement} input - The input element.
     * @returns {string} The formatted field name.
     */
    const getFieldName = (input) => {
      if (input.id) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
      }
      return '';
    };
};
  
export default validateForm;