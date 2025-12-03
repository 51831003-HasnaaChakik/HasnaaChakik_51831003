function Liu_contact() {
  return (
    <div className="container mt-5">
      <h2>Contact LIU University</h2>
      <p>Email: info@liu.edu.lb</p>
      <p>Phone: +961 1 234 567</p>

      <h4 className="mt-4">Send us a message</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Liu_contact;
