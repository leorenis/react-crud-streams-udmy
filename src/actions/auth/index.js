export const TRY_SIGNIN_GOOGLE = '@actionAuth/TRY_SIGNIN_GOOGLE'
export const TRY_SIGNOUT_GOOGLE = '@actionAuth/TRY_SIGNOUT_GOOGLE'
export const CHANGE_AUTH = '@actionAuth/CHANGE_AUTH'

export const trySignIn = () => ({
  type: TRY_SIGNIN_GOOGLE
})

export const trySignOut = () => ({
  type: TRY_SIGNOUT_GOOGLE
})

export const changeAuth = () => ({
  type: CHANGE_AUTH
})
