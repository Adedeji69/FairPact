import React from 'react'
import PartnerNav from '../components/PartnerNav'
import { useNavigate } from 'react-router-dom'
import '../styles/PartnerDeliveries.css'

const PartnerDeliveries = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = React.useState('myDeliveries')

  return (
    <div className='appLayout'>
      <PartnerNav />

      <main className='partnerDelMain'>
        <div className='partnerDelLayout'>

          <div className='partnerDelHeader'>
            <p className='backToDash' onClick={() => navigate('/partner/dashboard')}>
              <span className='material-symbols-outlined'>arrow_back</span>
              Back to Dashboard
            </p>
            <h1>Deliveries</h1>
            <p className='partnerDelSubText'>Manage and track all your delivery assignments.</p>
          </div>

          <div className='partnerDelStatsGrid'>
            <div className='partnerDelStat'>
              <div className='partnerDelStatIcon'>
                <span className='material-symbols-outlined'>package_2</span>
              </div>
              <div className='partnerDelStatText'>
                <p className='partnerDelStatLabel'>Total Assigned</p>
                <h2 className='partnerDelStatValue'>0</h2>
                <p className='partnerDelStatSub'>All time</p>
              </div>
            </div>

            <div className='partnerDelStat'>
              <div className='partnerDelStatIcon'>
                <span className='material-symbols-outlined'>delivery_truck_speed</span>
              </div>
              <div className='partnerDelStatText'>
                <p className='partnerDelStatLabel'>In Transit</p>
                <h2 className='partnerDelStatValue'>0</h2>
                <p className='partnerDelStatSub'>Currently active</p>
              </div>
            </div>

            <div className='partnerDelStat'>
              <div className='partnerDelStatIcon'>
                <span className='material-symbols-outlined'>schedule</span>
              </div>
              <div className='partnerDelStatText'>
                <p className='partnerDelStatLabel'>Pending Pickup</p>
                <h2 className='partnerDelStatValue'>0</h2>
                <p className='partnerDelStatSub'>Awaiting pickup</p>
              </div>
            </div>

            <div className='partnerDelStat'>
              <div className='partnerDelStatIcon'>
                <span className='material-symbols-outlined'>check_circle</span>
              </div>
              <div className='partnerDelStatText'>
                <p className='partnerDelStatLabel'>Completed</p>
                <h2 className='partnerDelStatValue'>0</h2>
                <p className='partnerDelStatSub'>All time</p>
              </div>
            </div>
          </div>

          <div className='partnerDelSection'>
            <div className='partnerDelSectionHead'>
              <div className='partnerDelTabs'>
                <div
                  className={`partnerDelTab ${activeTab === 'myDeliveries' ? 'activeDelTab' : ''}`}
                  onClick={() => setActiveTab('myDeliveries')}
                >
                  My Deliveries
                </div>
                <div
                  className={`partnerDelTab ${activeTab === 'available' ? 'activeDelTab' : ''}`}
                  onClick={() => setActiveTab('available')}
                >
                  Available Pickups
                </div>
              </div>
            </div>

            <div className='partnerDelContent'>
              {activeTab === 'myDeliveries' && (
                <div className='partnerDelEmpty'>
                  <span className='material-symbols-outlined'>delivery_truck_speed</span>
                  <h5>No deliveries yet</h5>
                  <p>Your assigned deliveries will appear here.</p>
                </div>
              )}
              {activeTab === 'available' && (
                <div className='partnerDelEmpty'>
                  <span className='material-symbols-outlined'>package_2</span>
                  <h5>No available pickups</h5>
                  <p>Available pickup requests will appear here.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default PartnerDeliveries