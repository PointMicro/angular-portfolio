import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Homepage';

  description =
    'My name is Gabriel, a passionate and detail-oriented Software Developer ' +
    'with a strong focus on creating secure, user-friendly, and innovative solutions. ' +
    'My expertise spans application security, mobile development, and full-stack ' +
    'development, where I use technical to deliver high-quality, scalable software.';

  githubUrl = 'https://github.com/pointmicro';
  linkedinUrl = 'https://www.linkedin.com/in/gabriel-a-234913248/';
  email = 'gabe720a@gmail.com';

  githubIcon = './imgs/github.png';
  linkedinIcon = './imgs/linkedin.png';
  heroImage = './imgs/pc1.gif';
}
