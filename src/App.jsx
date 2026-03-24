import React from 'react';

function App() {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center bg-light position-relative" style={{ minHeight: '100vh' }}>
      <div className="text-center animate__animated animate__fadeInDown">
        <h1 className="display-3 fw-bold mb-3">Hello Duniya</h1>
        <p className="lead mb-4">Welcome to your Vite + React project!</p>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Hello Duniya" className="rounded shadow animate__animated animate__zoomIn" style={{maxWidth: '300px'}} />
      </div>
      <footer className="w-100 text-center mt-auto py-3 bg-white border-top animate__animated animate__fadeInUp" style={{ position: 'absolute', left: 0, bottom: 0 }}>
        <small className="text-muted">&copy; {new Date().getFullYear()} Hello Duniya Vite React</small>
      </footer>
    </div>
  );
}

export default App;
