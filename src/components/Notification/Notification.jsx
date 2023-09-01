import { NotificationMessage } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ text }) => {
  return <NotificationMessage>{text}</NotificationMessage>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
