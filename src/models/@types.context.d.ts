enum ContextTypes {
  AUTHUSER = 'AuthNoticeProvider',
  AUTHTOKEN = 'AuthTokenProvider'
}

const Contextinitial = {
  error: false,
  errorMessage: '',
  loading: true,
  userCredentials: { email: '', password: '' },
  user: undefined
}

export { ContextTypes, Contextinitial }