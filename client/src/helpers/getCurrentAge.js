export const getCurrentAge = (birthDate) => {
  const birth = new Date(birthDate)
  const today = new Date()

  const diffInYears = today.getFullYear() - birth.getFullYear()

  return diffInYears
}
