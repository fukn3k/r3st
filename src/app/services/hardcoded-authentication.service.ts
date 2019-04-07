import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'admin' && password === '1337'){
      sessionStorage.setItem('authenticatedUser', username)
      sessionStorage.setItem('userRights', '5')
      return true
    }
    if (username === 'gast' && password === '123'){
      sessionStorage.setItem('authenticatedUser', username)
      sessionStorage.setItem('userRights', '1')
      return true
    }
    return false
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }
  isAdmin() {
    let admin = sessionStorage.getItem('userRights')
    if (admin === '5'){
      return !(admin < '5')
    }
  }
  getUserName() {
    let username = sessionStorage.getItem('authenticatedUser')
    return username
  }
  getUserRights() {
    let rights = sessionStorage.getItem('userRights')
    return rights
  }
  logout() {
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('userRights')
  }

}
