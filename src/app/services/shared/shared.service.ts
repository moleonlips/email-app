import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import MESS_DATA from '../../../assets/messages.json'
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private route: Router) { }

  curFolder = new Subject<string>();

  messages: any = []


  /////////////////////////////////
  // lấy ra tập các folders từ data
  // chỉ lấy các folders khác nhau, tránh lặp lại khi hiển thị
  folders = MESS_DATA
    .map(mess => mess.folder)
    .reduce((a: any, c) => {
      return (!a.includes(c) ? [...a, c] : [...a])
    }, []).sort()


  ////////////////////////////////////////////
  // lấy ra tập các người dùng thông qua DATA
  // chỉ lấy các user khác nhau, tránh lặp lại khi hiển thị
  users = MESS_DATA
    .map(mess => mess.to)
    .reduce((a: any, c) => {
      return (!a.includes(c) ? [...a, c] : [...a])
    }, [])


  ////////////////////////////////////////////////////////////////
  //  login service: do the following tasks:
  //    1. validate input: (username, password)
  //
  //    2. routing to myapp component
  //
  //    3. save login info to localStorage (included: current user & login status)
  //        < vì user không được nhận là param nên phải lưu để 
  //        component khác lấy thông tin hiển thị trên  header >
  //
  //    4. lọc, chỉ lấy các messages được gửi cho current user
  login(username: string, password: string) {
    // validate
    if (username && password === 'password') {

      // routing when login success
      setTimeout(() => {
        this.route.navigate(['/myapp'])
      }, 0);

      // save the login info to the localS
      localStorage.setItem('curUser', JSON.stringify(username))
      localStorage.setItem('isLoged', JSON.stringify(true))

      // filter email with current user, only emails sent to the current user are displayed
      this.messages = MESS_DATA.filter(mess => mess.to === username)
    }
  }

  // get a list of email
  getMessages(folder: string, user: string) {
    setTimeout(() => {
      this.curFolder.next(folder)
    }, 0);
    return MESS_DATA.filter(mess => mess.folder === folder && mess.to === user)
  }

  getMessageDetails(id: string) {
    return MESS_DATA.filter(mess => mess._id === id)[0]
  }
}
