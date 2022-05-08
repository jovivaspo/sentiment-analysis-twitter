export const styleResults = () => {
    const colors = {
        ["positive"]: {
          borderColor: '#36ad47',
          backgroundColor: '#48b348aa',
          message:'¡Parece que esta cuenta es genial! ✅'
        },
        ["neutral"]: {
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          message:'Esta cuenta es muy aburrida 😴'
        },
        ["negative"]: {
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          message:'¡Cudido, cuenta tóxica! 👿'
        }
      }

      return colors
}