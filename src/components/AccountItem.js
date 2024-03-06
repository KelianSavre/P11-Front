
function AccountItem({accountTitle, accountAmount, amountDescription}){

    return(
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{accountTitle}</h3>
          <p className="account-amount">{accountAmount}</p>
          <p className="account-amount-description">{amountDescription}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    )

}

export default AccountItem