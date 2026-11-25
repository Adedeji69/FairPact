import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import '../styles/EscrowTabs.css';

function EscrowTabs() {
  const [activeTab, setActiveTab] = useState('buyer');

  return (
    <div className="escrowTabsWrapper">
      <div className="escrowTabsTop">
        <h2 className="escrowTitle">Your Escrows</h2>
        <Nav variant="pills" className="escrowPills">
          <Nav.Item>
            <Nav.Link
              className={`escrowPill ${activeTab === 'buyer' ? 'activePill' : ''}`}
              onClick={() => setActiveTab('buyer')}
            >
              As Buyer (0)
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={`escrowPill ${activeTab === 'seller' ? 'activePill' : ''}`}
              onClick={() => setActiveTab('seller')}
            >
              As Seller (0)
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div className="escrowTabContent">
        {activeTab === 'buyer' && (
          <div className="escrowTabEmpty">
            <span className="material-symbols-outlined">description</span>
            <p>No escrows yet. Create your first escrow to get started.</p>
          </div>
        )}
        {activeTab === 'seller' && (
          <div className="escrowTabEmpty">
            <span className="material-symbols-outlined">description</span>
            <p>No escrows yet. Start selling to create your first escrow.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EscrowTabs;