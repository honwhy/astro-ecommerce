import { FormEvent, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Form() {
  const form = useRef<HTMLFormElement>(null);
  async function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('send Email...', form.current)
    emailjs
      .sendForm('service_vsji1f7', 'template_bzqteuu', form.current!, {
        publicKey: 'kQyCjKP2bqylCyFi_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
        <form ref={form} className="card-body" onSubmit={sendEmail}>
            <div className="form-group">
            <input type="text" className="form-control" id="first-name" name="first-name" placeholder="First Name" required/>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" id="last-name" name="last-name" placeholder="Last Name" required/>
            </div>
            <div className="form-group">
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email" required/>
            </div>
            <div className="form-group">
            <textarea className="form-control" id="message" name="message" rows={8} placeholder="How we can help you" required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
  );
}