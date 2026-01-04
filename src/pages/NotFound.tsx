// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found">
    <h1>404 — Not Found</h1>
    <p>The page you’re looking for doesn’t exist.</p>
    <Link to="/" className="back-button">← Back to Projects</Link>
  </div>
);

export default NotFound;