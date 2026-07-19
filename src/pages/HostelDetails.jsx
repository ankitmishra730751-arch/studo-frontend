import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/hostelDetails.css";

function HostelDetails() {

  const { id } = useParams();

  const [hostel, setHostel] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(`https://studo-backend-q8aw.onrender.com/hostels/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHostel(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!hostel) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  const images = hostel.galleryImages
    ? hostel.galleryImages.split(",")
    : [];

  return (
    <section className="hostel-details">

      {/* Cover Image */}

      <div className="cover-section">
        <img
          src={hostel.imageUrl}
          alt={hostel.name}
          className="cover-image"
        />
      </div>

      {/* Hostel Info */}

      <div className="details-container">

        <h1>🏠 {hostel.name}</h1>

        <p className="rating">
          ⭐ {hostel.rating} ({hostel.reviews})
        </p>

        <p className="location">
          📍 {hostel.location}
        </p>

        <p className="distance">
          🚶 {hostel.distance}
        </p>

        <h2 className="rent">
          {hostel.rent}
        </h2>

        <div className="type-box">
          <span>{hostel.hostelType}</span>
        </div>

        <div className="sharing-box">
          <span>{hostel.sharingType}</span>
        </div>

      </div>

      {/* Photo Gallery */}

      <div className="gallery-section">

        <h2>📷 Photo Gallery</h2>

        <div className="gallery-grid">

          {images.map((image, index) => (
            <img
              key={index}
              src={image.trim()}
              alt="Hostel"
              onClick={() => setSelectedImage(image.trim())}
            />
          ))}

        </div>

      </div>
      {/* Facilities */}

      <div className="facility-section">

        <h2>🏠 Facilities</h2>

        <div className="facility-grid">

          {hostel.facilities
            .split(",")
            .map((facility, index) => (
              <div className="facility-card" key={index}>
                ✅ {facility.trim()}
              </div>
            ))}

        </div>

      </div>

      {/* Description */}

      <div className="description-section">

        <h2>📝 About {hostel.name}</h2>

        <p>{hostel.description}</p>

      </div>

      {/* Contact Owner */}

      <div className="contact-section">

        <h2>📞 Contact Owner</h2>

        <p>
          Connect directly with the owner for room availability,
          rent details and hostel visit.
        </p>

        <div className="contact-buttons">

          <a
            href={`tel:+91${hostel.ownerPhone}`}
            className="call-btn"
          >
            📞 Call Owner
          </a>

          <a
            href={`https://wa.me/91${hostel.ownerPhone}`}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            💬 WhatsApp Owner
          </a>

        </div>

      </div>
      {/* Image Popup */}

      {selectedImage && (
        <div
          className="image-popup"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Hostel"
            className="popup-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
}

export default HostelDetails;