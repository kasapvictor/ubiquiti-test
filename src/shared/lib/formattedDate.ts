export const formattedDate = (expiryDate: string | null = null) => {
  const date = expiryDate && true ? new Date(expiryDate) : new Date();
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };

  return date.toLocaleDateString('en-US', options);
};
