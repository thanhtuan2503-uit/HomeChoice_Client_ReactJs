const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Thông tin liên hệ</h2>
      <p className="contact-form__text">
        Địa chỉ email của bạn sẽ được bảo mật! *
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="contact-form__form">
        <div className="contact-form__input d-flex justify-content-center align-items-center">
          <input
            className="contact-form__input-field"
            type="text"
            placeholder="Họ tên"
          />
          <input
            className="contact-form__input-field"
            type="email"
            placeholder="Địa chỉ email"
          />
        </div>
        <div className="contact-form__message mt-4">
          <textarea
            rows="10"
            className="contact-form__message"
            placeholder=" Góp ý"
          ></textarea>
        </div>
        <button size="block" color='#8ba9e6' className="contact-form__button">
          Gửi
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
