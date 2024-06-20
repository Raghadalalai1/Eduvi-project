import './PropsHero.css'

export default function PropsHero(props) {
  const {
    Textclass,
    Home,
    Shop,
    Textmainclass,
    H1,
    imageclass,
    imageclasstwo,
    imageclassthree,
    image,
    image2,
    showImage2
  } = props;

  return (
    <section className="BKH-Props">
      <div className={Textclass}>
        <h4>{Home} | <span>{Shop}</span></h4>
      </div>
      <div className='BKH-d-flex-all'>
        <div className={Textmainclass}>
          <h1>{H1}</h1>
        </div>
        <div className={imageclass}>
          {showImage2 && <img className={imageclassthree} src={image2} alt="Photo Hero" />}
          <img className={imageclasstwo} src={image} alt="Photo Hero" />
        </div>
      </div>
    </section>
  );
}