import { Col, Row } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer } from './components';
import { Root, Introduction, Price, AboutUs } from './pages';

const App: React.FC = () => (
  <Row>
    <Col span={24}>
      <div className="root-container">
        <Header />
      </div>
    </Col>
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>

    <Footer />
  </Row>
);

export default App;
