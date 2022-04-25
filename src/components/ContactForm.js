import './ContactForm.css'

export default function ContactForm() {
  return (
    <form 
        method='POST' 
        name='contactform' 
        className='contactForm'>

        <input 
            type='hidden'
            name='form-name'
            value='contactForm' />

        <input 
            type='text' 
            name='name' 
            placeholder='Name' />

        <input 
            type='email' 
            name='email' 
            placeholder='Email' />

        <textarea 
            name='message' 
            placeholder='Messaage'></textarea>

        <button className='formButton' type='submit'>Submit</button>
    </form>
  )
}