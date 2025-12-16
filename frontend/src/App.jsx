import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebinarDashboard from "./components/WebinarDashboard";
import WebinarAlumniFeedbackForm from "./components/WebinarAlumniFeedbackForm";
import WebinarCompletedDetailsForm from "./components/WebinarCompletedDetailsForm";
import StudentRequestForm from "./components/StudentRequestForm";
import WebinarSpeakerAssignmentForm from "./components/WebinarSpeakerAssignmentForm";
import WebinarStudentFeedbackForm from "./components/WebinarStudentFeedbackForm";
import TopicApprovalForm from './components/TopicApprovalForm';
import WebinarCircular from './components/WebinarCircular';
import WebinarCertificate from './components/WebinarCertificate';
import WebinarEvents from './components/WebinarEvents';
import Adminpage from './components/Adminpage';
import WebinarDetails from './components/WebinarDetails';
import OverallWebinarReport from './components/OverallWebinarReport';
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router basename="/">
      <Routes>
         <Route path="/" element={<LoginPage/>} />
        <Route path="/Webinar-Dashboard" element={<WebinarDashboard />} />
        <Route path="/student-request/:email" element={<StudentRequestForm />} />
        <Route path="/speaker-assignment/:email" element={<WebinarSpeakerAssignmentForm />} />
        <Route path="/webinar-events/:email" element={<WebinarEvents />} />
        <Route path="/webinar-details/:id/:encodedUserEmail" element={<WebinarDetails />} />
        <Route path="/webinar-details-upload/:id/:encodedUserEmail" element={<WebinarCompletedDetailsForm />} />
        <Route path="/alumni-feedback/:email" element={<WebinarAlumniFeedbackForm />} />
        <Route path="/student-feedback" element={<WebinarStudentFeedbackForm />} />
        <Route path="/requested-topic-approval/:email" element={<TopicApprovalForm />} />
        <Route path="/webinar-circular" element={<WebinarCircular />} />
        <Route path="/student-certificate/:webinarId" element={<WebinarCertificate />} />
        <Route path="/admin" element={<Adminpage />} />
      </Routes>
    </Router>
  );
}

export default App;
