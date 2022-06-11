import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
 import Title from '../components/Title';
// import Stores from '../components/Stores';

// import store1 from '../assets/images/store/store-1.jpg';
// import store2 from '../assets/images/store/store-2.jpg';
// import store3 from '../assets/images/store/store-3.jpg';
// import store4 from '../assets/images/store/store-4.jpg';

const ContactUs = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Liên hệ với chúng tôi" />
        <div className="row">
          <div className="col-10 col-md-3 mx-auto">
            <ContactInfo />
          </div>
          <div className="col-10 col-md-9 mx-auto">
            <ContactForm />
          </div>
        </div>
        {/* <div className="pt-5 pb-4">
          <Title title="Cửa hành của chúng tôi" />
        </div> */}
        {/* <div className="row">
          <div className="col-10 col-md-3 mx-auto">
            <Stores image={store4} title="Bình Thạnh" />
          </div>
          <div className="col-10 col-md-3 mx-auto">
            <Stores image={store2} title="Thủ Đức" />
          </div>
          <div className="col-10 col-md-3 mx-auto">
            <Stores image={store3} title="Bình Tân" />
          </div>
          <div className="col-10 col-md-3 mx-auto">
            <Stores image={store1} title="Tân Bình" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ContactUs;
