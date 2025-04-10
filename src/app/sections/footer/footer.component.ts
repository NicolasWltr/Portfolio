import { Component } from '@angular/core';
import { EmailSenderService } from '../../injects/emailSender/email-sender.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year: number = new Date().getFullYear();

  public contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  constructor(private emailSender: EmailSenderService) {}

  sendMail() {
    if (this.contactForm.invalid) {
      alert('Please fill out all fields correctly.');
      return;
    }

    const { name, email, message } = this.contactForm.value;

    if (!name || !email || !message) {
      alert('Please fill out all fields correctly.');
      return;
    }

    this.emailSender.sendEmail(name, email, message).subscribe({
      next: data => {
        console.log(data);
        alert('Email sent successfully!');
      },
      error: err => console.error('Error:', err),
      complete: () => console.log('Request completed')
    });

    this.contactForm.reset();
    this.contactForm.markAsPristine();
    this.contactForm.markAsUntouched();
  }
}
