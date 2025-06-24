import axios from 'axios';

const API_URL = 'http://localhost:5050/feedback';

export const submitFeedback = (feedbackData) => {
  return axios.post(API_URL, feedbackData);
};

export const getFeedbacks = (params = {}) => {
  return axios.get(API_URL, { params });
};
