import React, { useState, useEffect } from 'react';
import { Container, Table, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons';
import { getFeedbacks } from '../services/api';
import FeedbackItem from './FeedbackItem';

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filters, setFilters] = useState({
    email: '',
    sort: 'newest'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedbacks();
  }, [filters]);

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const params = {
        email: filters.email || undefined,
        sort: filters.sort
      };
      const { data } = await getFeedbacks(params);
      setFeedbacks(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Container className="mt-5">
      <h2>Feedback Dashboard</h2>
      
      {/* Filter Controls */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label><FontAwesomeIcon icon={faFilter} /> Filter by Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={filters.email}
              onChange={handleFilterChange}
              placeholder="Enter email"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label><FontAwesomeIcon icon={faSort} /> Sort By</Form.Label>
            <Form.Select
              name="sort"
              value={filters.sort}
              onChange={handleFilterChange}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Feedback Table */}
      {loading ? (
        <p>Loading feedbacks...</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Feedback</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.length > 0 ? (
              feedbacks.map(feedback => (
                <FeedbackItem key={feedback._id} feedback={feedback} />
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No feedback found</td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default FeedbackDashboard;
