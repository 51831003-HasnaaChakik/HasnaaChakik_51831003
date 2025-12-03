function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to LIU Event Management System</h1>
      
      <img 
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        alt="LIU Events"
        className="img-fluid rounded mt-4"
        style={{ maxHeight: "350px" }}
      />

      <p className="mt-3">
        Explore all university events and participate in activities easily!
      </p>
    </div>
  );
}

export default Home;
