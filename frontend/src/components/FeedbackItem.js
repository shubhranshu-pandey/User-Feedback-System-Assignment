import React from 'react';
import { format } from 'date-fns';

const FeedbackItem = ({ feedback }) => {
  return (
    <tr>
      <td>{feedback.name}</td>
      <td>{feedback.email}</td>
      <td>{feedback.feedback}</td>
      <td>{format(new Date(feedback.timestamp), 'MMM dd, yyyy HH:mm')}</td>
    </tr>
  );
};

export default FeedbackItem;
