import { useParams } from "react-router-dom";

const events = {
  1: { title: "Tech Bootcamp", description: "Learn programming, AI tools, and web development." },
  2: { title: "Sports Festival", description: "Enjoy university sports competitions and games." },
  3: { title: "Cultural Day", description: "Music, food, and cultural performances at LIU." },
};

function Event_Details() {
  const { id } = useParams();
  const event = events[id];

  if (!event) {
    return (
      <div className="container mt-5">
        <h2>Event not found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </div>
  );
}

export default Event_Details;
