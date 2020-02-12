export function INCREMENT (state) {
  state.counter++
}

export function PCORPHONE (state, bool) {
  state.isPhone = bool
}

export function SETUSERNAME (state, value){
  state.username = value
}

export function ISLOGIN (state, bool){
  state.isLogin = bool
}