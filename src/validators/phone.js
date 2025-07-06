/**
 * Validate a phone number.
 *
 * @param {string} phone
 * @returns {boolean}
 */
export function validatePhoneNumber(phone) {
  const re = /^[0-9\s()+-]{6,20}$/;
  return re.test(String(phone));
}