export const getFullDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  return new Intl.DateTimeFormat('ru-RU', options).format(new Date(date));
};
