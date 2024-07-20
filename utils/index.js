import dayjs from 'dayjs';
import { toast } from 'react-hot-toast';

export const readableDateTime = (now) => {
  return dayjs(now).format('MMMM D, YYYY h:mm A');
};

export const formatTimeToAMPM = (timeString) => {
  const time = dayjs(timeString, 'HH:mm:ss');
  const formattedTime = time.format('h:mma');
  return formattedTime;
};

export const handleCopyToClipboard = (id, val, message) => {
  if (id) {
    navigator.clipboard.writeText(val);
    message ? toast.success(message) : '';
  }
};

export const generateRandomIntId = () => {
  return Math.floor(Math.random() * 1000);
};
