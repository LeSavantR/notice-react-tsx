enum ContextTypes {
  AUTHUSER = 'AuthNoticeProvider'
}

const Contextinitial = {
  error: false,
  errorMessage: '',
  loading: true,
  userCredentials: { email: '', password: '' },
  user: undefined
}

export { ContextTypes, Contextinitial }