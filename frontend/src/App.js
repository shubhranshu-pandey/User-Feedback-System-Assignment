import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [key, setKey] = useState('submit');

  return (
    <div className="App">
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="submit" title="Submit Feedback">
          <FeedbackForm />
        </Tab>
        <Tab eventKey="dashboard" title="Feedback Dashboard">
          <FeedbackDashboard />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
