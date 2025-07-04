import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_5.jpg';
import { trainers } from '../../data';
import Trainer from '../../components/Trainer';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa6'
import './trainers.css'

const Trainers = () => {
  return (
    <>
      <Header title='Our Trainers' image={HeaderImage}>
        Facilis, iusto numquam unde laboriosam expedita qui exercitationem?  Dicta vero accusantium est aut molestiae
        fugit doloremque suscipit quod.
      </Header>

      <section className='trainers'>
        <div className="container trainer__container">
          {
            trainers.map(({id, name, image, job, socials}) => {
              <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon : <BsInstagram />, link : socials[0]},
                  {icon : <AiOutlineTwitter />, link : socials[1]},
                  {icon : <FaFacebookF />, link : socials[2]},
                  {icon : <FaLinkedinIn />, link : socials[3]}
                ]
              } />
            })
          }
        </div>
      </section>
    </>

  )
}

export default Trainers