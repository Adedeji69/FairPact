import React from 'react'
import PartnerNav from '../components/PartnerNav'
import { useNavigate } from 'react-router-dom'
import '../styles/PartnerEarnings.css'

const PartnerEarnings = () => {
  const navigate = useNavigate()

  return (
    <div className='appLayout'>
      <PartnerNav />

      <main className='partnerEarnMain'>
        <div className='partnerEarnLayout'>

          <div className='partnerEarnHeader'>
            <div className='partnerEarnHeaderLeft'>
              <p className='backToDash' onClick={() => navigate('/partner/dashboard')}>
                <span className='material-symbols-outlined'>arrow_back</span>
                Back to Dashboard
              </p>
              <h1>Earnings</h1>
              <p className='partnerEarnSubText'>Track your delivery payments and withdrawal history.</p>
            </div>

            <button className='partnerWithdrawBtn' disabled>
              Withdraw Funds
            </button>
          </div>

          <div className='partnerEarnStatsGrid'>
            <div className='partnerEarnStat'>
              <div className='partnerEarnStatIcon'>
                <span className='material-symbols-outlined'>payments</span>
              </div>
              <div className='partnerEarnStatText'>
                <p className='partnerEarnStatLabel'>Total Earned</p>
                <h2 className='partnerEarnStatValue'>₦0</h2>
                <p className='partnerEarnStatSub'>All time</p>
              </div>
            </div>

            <div className='partnerEarnStat'>
              <div className='partnerEarnStatIcon'>
                <span className='material-symbols-outlined'>account_balance_wallet</span>
              </div>
              <div className='partnerEarnStatText'>
                <p className='partnerEarnStatLabel'>This Month</p>
                <h2 className='partnerEarnStatValue'>₦0</h2>
                <p className='partnerEarnStatSub'>November 2026</p>
              </div>
            </div>

            <div className='partnerEarnStat'>
              <div className='partnerEarnStatIcon'>
                <span className='material-symbols-outlined'>schedule</span>
              </div>
              <div className='partnerEarnStatText'>
                <p className='partnerEarnStatLabel'>Pending</p>
                <h2 className='partnerEarnStatValue'>₦0</h2>
                <p className='partnerEarnStatSub'>Awaiting release</p>
              </div>
            </div>

            <div className='partnerEarnStat'>
              <div className='partnerEarnStatIcon'>
                <span className='material-symbols-outlined'>arrow_upward</span>
              </div>
              <div className='partnerEarnStatText'>
                <p className='partnerEarnStatLabel'>Withdrawn</p>
                <h2 className='partnerEarnStatValue'>₦0</h2>
                <p className='partnerEarnStatSub'>All time</p>
              </div>
            </div>
          </div>

          <div className='partnerNoBankCard'>
            <div className='partnerNoBankIcon'>
              <span className='material-symbols-outlined'>account_balance</span>
            </div>
            <h5>No bank account linked</h5>
            <p>Add your bank account to receive payments and withdraw your earnings.</p>
            <button className='partnerAddBankBtn'>+ Add Bank Account</button>
          </div>

          <div className='partnerEarnSection'>
            <div className='partnerEarnSectionHead'>
              <span className='partnerEarnSectionTitle'>Payment History</span>
            </div>
            <div className='partnerEarnEmpty'>
              <span className='material-symbols-outlined'>receipt_long</span>
              <h5>No payments yet</h5>
              <p>Your payment history will appear here once you complete deliveries.</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default PartnerEarnings