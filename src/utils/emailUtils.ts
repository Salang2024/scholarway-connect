
export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const isValidTanzanianPhoneNumber = (phone: string): boolean => {
  const re = /^(?:\+255|0)[67]\d{8}$/;
  return re.test(phone);
};
