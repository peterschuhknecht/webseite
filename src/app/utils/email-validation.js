const EMAIL_MAX_LENGTH = 254;

/**
 * Normalises user provided e-mail addresses before any validation happens.
 * Leading/trailing whitespace is removed and the local part is lowercased
 * only when it is safe to do so (most providers treat it as case insensitive).
 * @param {string} value
 * @returns {string}
 */
export function sanitizeEmail(value) {
  if (typeof value !== 'string') {
    return '';
  }

  const trimmed = value.trim();
  const [localPart, domain = ''] = trimmed.split('@');
  if (!domain) {
    return trimmed.toLowerCase();
  }

  return `${localPart.toLowerCase()}@${domain.toLowerCase()}`;
}

const emailPattern =
  /^(?=.{1,64}@.{1,255}$)(?!.*\.{2})[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

/**
 * Validates an e-mail address using a pragmatic regular expression and
 * additional structural constraints that align with the HTML5 specification.
 * @param {string} rawValue
 * @returns {boolean}
 */
export function isValidEmail(rawValue) {
  if (typeof rawValue !== 'string') {
    return false;
  }

  const value = sanitizeEmail(rawValue);

  if (value.length === 0 || value.length > EMAIL_MAX_LENGTH) {
    return false;
  }

  if (!emailPattern.test(value)) {
    return false;
  }

  const [localPart, domain] = value.split('@');
  if (!localPart || !domain) {
    return false;
  }

  // Ensure the domain contains at least one dot and no labels starting/ending with hyphen
  const domainLabels = domain.split('.');
  if (domainLabels.length < 2 || domainLabels.some((label) => !label)) {
    return false;
  }

  return !domainLabels.some((label) => label.startsWith('-') || label.endsWith('-'));
}

export default {
  sanitizeEmail,
  isValidEmail,
};
