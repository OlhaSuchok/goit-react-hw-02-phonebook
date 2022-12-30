import PropTypes from 'prop-types';
import { NotificationTitle } from './Notification.styled';

export default function Notification({ message }) {
  return (
    <div>
      <NotificationTitle>{message}</NotificationTitle>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
