import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io';
import './contact.css'

const Contact = () => {
  return (
    <div>
      <Header image={HeaderImage} title='Get In Touch'>
        Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil offica totam, 
        animi culpa nobis nemo natus doloremque?
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@adeleye@xyz.com" target='_blank' rel='noreferrer noopner'>{<MdEmail />}</a>
            <a href="http://m.me/ernest_achiver" target='_blank' rel='noreferrer noopner'>{<BsMessenger />}</a>
            <a href="https://wa.me/+2349056159803" target='_blank' rel='noreferrer noopner'>{<IoLogoWhatsapp />}</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact