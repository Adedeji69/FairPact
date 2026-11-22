import React from 'react'
import DashboardNav from '../components/DashboardNav'
import { useNavigate } from 'react-router-dom'
import shield from '../assets/hero-content-shield.png'
import '../styles/Transactions.css'

const Transactions = () => {
  const navigate = useNavigate()

  return (
    <div className='appLayout'>
      <DashboardNav />

      <main className='transMain'>
        <div className='transLayout'>

          <div className='transHeader'>
            <div className='transHeaderLeft'>
              <p className='backToDash' onClick={() => navigate('/user/dashboard')}>
                <span className='material-symbols-outlined'>arrow_back</span>
                Back to Dashboard
              </p>
              <h1>Transactions</h1>
              <p className='transSubText'>View your complete transaction history and activity.</p>
            </div>

            <div className='transHeaderRight'>
              <div className='transSecureBanner'>
                <div className='transSecureIcon'>
                  <img src={shield} alt='shield' />
                </div>
                <div className='transSecureText'>
                  <p className='transSecureTitle'>Secure transactions. Safer commerce.</p>
                  <p className='transSecureDesc'>Your payments and deliveries are protected by FairPact.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='transStatsGrid'>
            <div className='transStat'>
              <div className='transStatIcon'>
                <span className='material-symbols-outlined'>credit_card</span>
              </div>
              <div className='transStatText'>
                <p className='transStatLabel'>Total Transactions</p>
                <h2 className='transStatValue'>0</h2>
                <p className='transStatSub'>All time</p>
              </div>
            </div>

            <div className='transStat'>
              <div className='transStatIcon'>
                <span className='material-symbols-outlined'>database</span>
              </div>
              <div className='transStatText'>
                <p className='transStatLabel'>Total Value</p>
                <h2 className='transStatValue'>₦0</h2>
                <p className='transStatSub'>All time</p>
              </div>
            </div>

            <div className='transStat'>
              <div className='transStatIcon'>
                <span className='material-symbols-outlined'>check_circle</span>
              </div>
              <div className='transStatText'>
                <p className='transStatLabel'>Completed</p>
                <h2 className='transStatValue'>0</h2>
                <p className='transStatSub'>0% success rate</p>
              </div>
            </div>

            <div className='transStat'>
              <div className='transStatIcon'>
                <span className='material-symbols-outlined'>schedule</span>
              </div>
              <div className='transStatText'>
                <p className='transStatLabel'>Pending</p>
                <h2 className='transStatValue'>0</h2>
                <p className='transStatSub'>Awaiting action</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Transactions