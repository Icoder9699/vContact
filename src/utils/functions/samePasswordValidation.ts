export default function samePasswordValidation(password: string, passwordConfirmation: string) {
   let isValid = true
   if (password.length && passwordConfirmation.length) {
      if (password === passwordConfirmation) {
         isValid = true
      } else {
         isValid = false
      }
   }

   return isValid
}