import { Link, useLocation, useNavigate } from 'react-router-dom'
import Container from '../../components/Container'
import useCountdown from '../../hooks/useCountdown'
import styles from './style.module.scss'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { FB, IG, PINT } from '../../assets'
const CountdownPage = () => {
  const navigate = useNavigate()
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const dateParam = queryParams.get('date')

  const targetDate = new Date(`${dateParam} 00:00:00`)
  const { days, hours, isTimeUp, minutes, seconds } = useCountdown(targetDate)
  useEffect(() => {
    if (!dateParam) {
      navigate('/')
    }
    return () => {
      toast.error('Date must be filled in')
    }
  }, [])
  return (
    <Container
      className={styles.timer__container}
      className2={styles.timer__wrapper}
    >
      {isTimeUp ? (
        <div className={styles.result__wrapper}>
          <h1>Congratulations, your time is over!</h1>
        </div>
      ) : (
        <>
          <div className={styles.content__text}>
            <h1>WE'RE LAUNCING SOON</h1>
          </div>
          <div className={styles.timer__inner}>
            <div className={styles.timer__segment}>
              <div className={styles.bg__timer}>
                <span className={styles.time}>{days}</span>
              </div>
              <span className={styles.label}>Days</span>
            </div>
            <div className={styles.timer__segment}>
              <div className={styles.bg__timer}>
                <span className={styles.time}>{hours}</span>
              </div>
              <span className={styles.label}>Hours</span>
            </div>
            <div className={styles.timer__segment}>
              <div className={styles.bg__timer}>
                <span className={styles.time}>{minutes}</span>
              </div>
              <span className={styles.label}>Minutes</span>
            </div>
            <div className={styles.timer__segment}>
              <div className={styles.bg__timer}>
                <span className={styles.time}>{seconds}</span>
              </div>
              <span className={styles.label}>Seconds</span>
            </div>
          </div>
          <div className={styles.icon__social__media}>
            <Link to={'/'}>
              <img src={FB} alt="Facebook" />
            </Link>
            <Link to={'/'}>
              <img src={PINT} alt="Pinterest" />
            </Link>
            <Link to={'/'}>
              <img src={IG} alt="Instagram" />
            </Link>
          </div>
        </>
      )}
    </Container>
  )
}

export default CountdownPage
