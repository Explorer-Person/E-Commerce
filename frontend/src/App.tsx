import { Hub } from "@src/routes"
import { BrowserRouter as Router } from 'react-router-dom';
import ReactErrorBoundary from "@src/errors";


// Global error handler
window.onerror = function (message, source, lineno, colno, error) {
  // Log the error details or send them to a logging service
  console.error('Error:', message);
  console.error('Source:', source);
  console.error('Line Number:', lineno);
  console.error('Column Number:', colno);
  console.error('Error Object:', error);

  // Return true to prevent the default browser error handling
  return true;
};

function App() {
  return (
    <div>

      <Router>
        <ReactErrorBoundary>
          <Hub />
        </ReactErrorBoundary>
      </Router>


    </div>
  )
}

export default App
