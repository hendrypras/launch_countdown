import { useNavigate } from 'react-router-dom'
import Container from '../../components/Container'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import dayjs from 'dayjs'
import styles from './style.module.scss'

const HomePage = () => {
  const navigate = useNavigate()
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  useEffect(() => {
    setCurrentDate(new Date())
  }, [])
  const handleNavigate = () => {
    if (selectedDate) {
      const selectedDateTime = new Date(selectedDate).getTime()
      const currentDateTime = currentDate.getTime()

      if (selectedDateTime <= currentDateTime) {
        toast.error('The selected date must be later than the current date')
      } else {
        navigate(`countdown?date=${selectedDate}`)
      }
    } else {
      toast.error('Date must be filled in')
    }
  }

  const handleDateChange = (date: string | null) => {
    if (date) {
      const formattedDateWithTime = dayjs(date).format('YYYY-MM-DD')
      setSelectedDate(formattedDateWithTime)
    } else {
      setSelectedDate(null)
    }
  }

  return (
    <Container
      className={styles.home__container}
      className2={styles.content__home__wrapper}
    >
      <div className={styles.wrapper__content}>
        <h1>Welcome to Our Countdown Timer</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Pick Date for countdown"
              value={selectedDate}
              className={styles.date__picker}
              onChange={date => handleDateChange(date)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <div onClick={handleNavigate} className={styles.button__submit}>
          <span>Get Started</span>
        </div>
      </div>
    </Container>
  )
}

export default HomePage
