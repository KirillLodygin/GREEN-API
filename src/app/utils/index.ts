export const convertToRussianPhoneNumber = (inputString: string): string => {
  const digitsOnly = inputString.replace(/\D/g, '')

  if (digitsOnly.length !== 11 || !digitsOnly.startsWith('7')) {
    throw new Error('Неверный формат входной строки')
  }

  return `+7 (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7, 9)}-${digitsOnly.slice(9)}`
}

export const getChatId = (contactNumber: string) => `${contactNumber}@c.us`

export const isDigit = (charCode: number) => (charCode >= 48 && charCode <= 57) || charCode === 8
