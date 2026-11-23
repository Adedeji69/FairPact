import React from 'react'
import { useNavigate } from 'react-router-dom'
import PartnerNav from '../components/PartnerNav'
import '../styles/PartnerDashboard.css'
import shield from '../assets/hero-content-shield.png'

const PartnerDashboard = () => {
  const time = new Date().getHours()

  return (
    <div className='appLayout'>
      <PartnerNav />

      <main className='partnerMain'>
        <div className='partnerLayout'>

          <div className='partnerGreet'>
            <div className='partnerGreetLeft'>
              <span className='partnerBadge'>Logistics Partner</span>
              <h1>
                {time < 12 ? 'Good Morning,' : time < 17 ? 'Good Afternoon,' : 'Good Evening,'} Partner 👋
              </h1>
              <p className='partnerGreetSub'>Here's your delivery activity for today.</p>
            </div>

            <div className='partnerBanner'>
              <div className='partnerBannerIcon'>
                <img src={shield} alt='shield' />
              </div>
              <div className='partnerBannerText'>
                <p className='partnerBannerTitle'>You are verified.</p>
                <p className='partnerBannerDesc'>Your account is active and trusted.</p>
              </div>
            </div>
          </div>

          <div className='partnerStatsGrid'>
            <div className='partnerStat'>
              <div className='partnerStatIcon'>
                <span className='material-symbols-outlined'>package_2</span>
              </div>
              <div className='partnerStatText'>
                <p className='partnerStatLabel'>Assigned</p>
                <h2 className='partnerStatValue'>0</h2>
                <p className='partnerStatSub'>Total deliveries</p>
              </div>
            </div>

            <div className='partnerStat'>
              <div className='partnerStatIcon'>
                <span className='material-symbols-outlined'>check_circle</span>
              </div>
              <div className='partnerStatText'>
                <p className='partnerStatLabel'>Completed</p>
                <h2 className='partnerStatValue'>0</h2>
                <p className='partnerStatSub'>All time</p>
              </div>
            </div>

            <div className='partnerStat'>
              <div className='partnerStatIcon'>
                <span className='material-symbols-outlined'>schedule</span>
              </div>
              <div className='partnerStatText'>
                <p className='partnerStatLabel'>Pending</p>
                <h2 className='partnerStatValue'>0</h2>
                <p className='partnerStatSub'>Awaiting pickup</p>
              </div>
            </div>

            <div className='partnerStat'>
              <div className='partnerStatIcon'>
                <span className='material-symbols-outlined'>payments</span>
              </div>
              <div className='partnerStatText'>
                <p className='partnerStatLabel'>Total Earnings</p>
                <h2 className='partnerStatValue'>₦0</h2>
                <p className='partnerStatSub'>All time</p>
              </div>
            </div>
          </div>

          <div className='partnerTwoCol'>
            <div className='partnerSection'>
              <div className='partnerSectionHead'>
                <span className='partnerSectionTitle'>Active Deliveries</span>
                <span className='partnerSeeAll'>See all</span>
              </div>
              <div className='partnerEmptyState'>
                <span className='material-symbols-outlined'>delivery_truck_speed</span>
                <p>No active deliveries yet.</p>
              </div>
            </div>

            <div className='partnerSection'>
              <div className='partnerSectionHead'>
                <span className='partnerSectionTitle'>Quick Actions</span>
              </div>
              <div className='partnerActionList'>
                <div className='partnerActionItem'>
                  <div className='partnerActionIcon'>
                    <span className='material-symbols-outlined'>package_2</span>
                  </div>
                  <div>
                    <p className='partnerActionTitle'>View Deliveries</p>
                    <p className='partnerActionSub'>See all assigned deliveries</p>
                  </div>
                  <span className='material-symbols-outlined partnerActionArrow'>arrow_right_alt</span>
                </div>

                <div className='partnerActionItem'>
                  <div className='partnerActionIcon'>
                    <span className='material-symbols-outlined'>sync</span>
                  </div>
                  <div>
                    <p className='partnerActionTitle'>Update Status</p>
                    <p className='partnerActionSub'>Mark delivery progress</p>
                  </div>
                  <span className='material-symbols-outlined partnerActionArrow'>arrow_right_alt</span>
                </div>

                <div className='partnerActionItem'>
                  <div className='partnerActionIcon'>
                    <span className='material-symbols-outlined'>payments</span>
                  </div>
                  <div>
                    <p className='partnerActionTitle'>View Earnings</p>
                    <p className='partnerActionSub'>Track your payment history</p>
                  </div>
                  <span className='material-symbols-outlined partnerActionArrow'>arrow_right_alt</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default PartnerDashboard