import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="my-3">
   
  <footer className="row row-cols-5 py-5 my-5  border-top footer-dark bg-dark ">
    <div className="col">
      <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
       
      </Link>
      <p className="text-muted">© 2021</p>
    </div>

    <div className="col">

    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>
  </footer>
</div>

        
    )
}
