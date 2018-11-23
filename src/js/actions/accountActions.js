
export function updateAccount(ethereum, account) {
  return {
    type: "ACCOUNT.UPDATE_ACCOUNT_PENDING",
    payload: { ethereum, account }
  }
}

export function updateTokenBalance(ethereum, address, tokens){
  return {
    type: "ACCOUNT.UPDATE_TOKEN_BALANCE",
    payload: { ethereum, address, tokens }
  }
}

export function updateAccountComplete(account) {
  return {
    type: "ACCOUNT.UPDATE_ACCOUNT_FULFILLED",
    payload: account
  }
}

export function importLoading() {
  return {
    type: "ACCOUNT.LOADING"
  }
}

export function checkTimeImportLedger() {
  return {
    type: "ACCOUNT.CHECK_TIME_IMPORT_LEDGER"
  }
}

export function resetCheckTimeImportLedger() {
  return {
    type: "ACCOUNT.RESET_CHECK_TIME_IMPORT_LEDGER"
  }
}

export function pKeyChange(value) {
  return {
    type: "ACCOUNT.PKEY_CHANGE",
    payload: value
  }
}

export function openPkeyModal() {
  return {
    type: "ACCOUNT.OPEN_PKEY_MODAL",
  }
}

export function closePkeyModal() {
  return {
    type: "ACCOUNT.CLOSE_PKEY_MODAL",
  }
}

export function throwPKeyError(error) {
  return {
    type: "ACCOUNT.PKEY_ERROR",
    payload: error
  }
}

export function promoCodeChange(value) {
  return {
    type: "ACCOUNT.PROMO_CODE_CHANGE",
    payload: value
  }
}

export function openPromoCodeModal() {
  return {
    type: "ACCOUNT.OPEN_PROMO_CODE_MODAL",
  }
}

export function closePromoCodeModal() {
  return {
    type: "ACCOUNT.CLOSE_PROMO_CODE_MODAL",
  }
}

export function throwPromoCodeError(error) {
  return {
    type: "ACCOUNT.PROMO_CODE_ERROR",
    payload: error
  }
}

export function importNewAccount(address, type, keystring, ethereum, tokens, walletType = null, metamask = null, walletName = "") {
  return {
    type: "ACCOUNT.IMPORT_NEW_ACCOUNT_PENDING",
    payload: { address, type, keystring, ethereum, tokens, walletType, metamask, walletName }
  }
}

export function importNewAccountComplete(account, walletName) {
  return {
    type: "ACCOUNT.IMPORT_NEW_ACCOUNT_FULFILLED",
    payload: {account, walletName}
  }
}

export function closeImportLoading() {
  return {
    type: "ACCOUNT.CLOSE_LOADING_IMPORT"
  }
}

export function throwError(error) {
  return {
    type: "ACCOUNT.THROW_ERROR",
    payload: error
  }
}


export function closeErrorModal() {
  return {
    type: "ACCOUNT.CLOSE_ERROR_MODAL"
  }
}

export function incManualNonceAccount(address) {
  return {
    type: "ACCOUNT.INC_MANUAL_NONCE_ACCOUNT",
    payload: address
  }
}

export function importAccountMetamask(web3Service, networkId, ethereum, tokens, translate, walletType = null) {
  return {
    type: "ACCOUNT.IMPORT_ACCOUNT_METAMASK",
    payload: { web3Service, networkId, ethereum, tokens, translate, walletType }
  }
}
