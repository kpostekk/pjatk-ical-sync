import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { config } from 'dotenv'

config()

dayjs.extend(timezone)
dayjs.extend(utc)

process.env.TZ = 'Etc/Universal';
