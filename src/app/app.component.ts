import { Component, Inject, NgZone } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(@Inject(NgZone) ngZone: NgZone) {
    window['onSignIn'] = user => ngZone.run(
      () => {
        console.log("SIGN IN SUCCESS");
        //this.afterSignIn(user);
      }
    );
  }

  afterSignIn(googleUser: any) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

}
