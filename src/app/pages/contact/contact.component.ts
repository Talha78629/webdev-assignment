import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule], // ✅ Import ReactiveFormsModule
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

  }

  async sendMessage(){
    emailjs.init("-ZXEQ0vEaexo0cVHD");
let response=await emailjs.send("service_vqpcw8a","template_ntaxaej",{
name: this.contactForm.value.name,
subject: this.contactForm.value.subject,
message: this.contactForm.value.message,
email: this.contactForm.value.email,
});
alert("Message sent successfully!");
this.contactForm.reset();
  }
}

