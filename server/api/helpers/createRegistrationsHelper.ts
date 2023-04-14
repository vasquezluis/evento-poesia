export const isValidCard = (card: string) => {
  const regex = /^[aA][a-zA-Z1-9][5][a-zA-Z1-9][a-zA-Z1-9][139]$/;

  return regex.test(card);
};

export const isValidGender = (gender: string) => {
  if (gender == "masculino" || gender == "femenino") {
    return true;
  } else {
    return false;
  }
};

export const getCurrentAge = (birthDate: string) => {
  const birth = new Date(birthDate);
  const today = new Date();

  const diffInYears = today.getFullYear() - birth.getFullYear();

  return diffInYears;
};

export const isValidPoetry = (gender: string) => {
  const genders = ["Lírica", "Épica", "Dramática"];

  const result = genders.filter((item) => item === gender);

  if (result.length > 0) {
    return true;
  } else {
    return false;
  }
};

export const get5NextDays = (date: Date, days: number) => {
  const result = new Date(date);
  let availableDays = 0;
  while (availableDays < days) {
    result.setDate(result.getDate() + 1);
    if (result.getDay() !== 0 && result.getDay() !== 6) {
      availableDays++;
    }
  }
  return result;
};

export const getLastBusinessDayOfMonth = (date: Date) => {
  const firstDayOfNextMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    1
  );

  let lastBusinessDayOfMonth = new Date(
    firstDayOfNextMonth.getTime() - 86400000
  );

  while (
    lastBusinessDayOfMonth.getDay() === 0 ||
    lastBusinessDayOfMonth.getDay() === 6
  ) {
    lastBusinessDayOfMonth.setDate(lastBusinessDayOfMonth.getDate() - 1);
  }
  return lastBusinessDayOfMonth;
};

export const getFridayOfWeek = (date: Date) => {
  const currentDayOfWeek = date.getDay();
  const daysToAdd =
    currentDayOfWeek <= 4 ? 5 - currentDayOfWeek : 7 - currentDayOfWeek + 5;
  const fridayOfWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + daysToAdd
  );
  return fridayOfWeek;
};
