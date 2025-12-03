import { Link } from "react-router-dom";

const events = [
  { id: 1, title: "Tech Bootcamp", date: "2025-02-10" },
  { id: 2, title: "Sports Festival", date: "2025-03-01" },
  { id: 3, title: "Cultural Day", date: "2025-04-15" },
];

function Liu_Events() {
  return (
    <div className="container mt-5">
      <h2>Upcoming Events</h2>

      {events.map(event => (
        <div key={event.id} className="card p-3 mt-3">
          <h4>{event.title}</h4>
          <p>Date: {event.date}</p>
          <Link to={`/events/${event.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Liu_Events;
