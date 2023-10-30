import React from 'react'

const useCountdown = (targetDate: Date) => {
  const calculateCountdown = (targetDate: Date) => {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    if (difference <= 0) {
      return {
        isTimeUp: true,
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      }
    }

    const time = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, '0'),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, '0'),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, '0'),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, '0'),
    }

    return { isTimeUp: false, ...time }
  }

  const [countdown, setCountdown] = React.useState(
    calculateCountdown(targetDate)
  )

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return countdown
}

export default useCountdown
