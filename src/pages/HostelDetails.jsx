import { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/hostelDetails.css";

function HostelDetails() {
   const { id } = useParams();
  const hostelData = {

1:{

name:"Neha Flats",

rating:"4.8",

reviews:"96 Reviews",

location:"Near GLA University, Mathura",

distance:"5 Min Away from GLA",

rent:"₹12,000 / Month",

owner:"9058926490",

images:[

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784145180/neha-flats-2.jpg_ysu3jo.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784145182/neha-flats-1.jpg_w9uyic.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784145179/neha-flats-3.jpg_eidk1p.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784145178/neha-flats-4.jpg_tzdwzf.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784145174/neha-flats-6.jpg_cetaud.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784145173/neha-flats-9.jpg_n8vo63.jpg"

]

},

2:{

name:"Cozy Girls Hostel",

rating:"4.7",

reviews:"95 Reviews",

location:"Near GLA University, Mathura",

distance:"2 Min Away from GLA",

rent:"₹10,000 / Month (₹1,00,000 / Year)",

owner:"8679691985",

images:[

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784145623/Cozy-girls-hostels-1.jpg_z7tg5s.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784145651/Cozy-girls-hostels-3.jpg_efckeg.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784145652/Cozy-girls-hostels-2.jpg_syzitx.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784145650/Cozy-girls-hostels-4.jpg_xzqumz.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784145648/Cozy-girls-hostels-5.jpg_n52tl2.jpg"

]

},

3:{

name:"Rana Boys Hostel",

rating:"4.6",

reviews:"88 Reviews",

location:"Near GLA University, Mathura",

distance:"2 Min Away from GLA",

rent:"Non AC : ₹8,500 / Month | AC : ₹10,000 / Month",

owner:"9812343400",

images:[

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784146181/rana-boys-hostels-5.jpg_hbksnk.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784146187/rana-boys-hostels-1.jpg_obatjc.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784146183/rana-boys-hostels-3.jpg_x52k6i.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784199542/rana-boys-hostel-6.jpg_o1cvbd.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784199542/rana-boys-hostel-7.jpg_wnknrp.jpg"

]

},
4:{

name:"Vaishnavi Boys Hostel",

rating:"4.7",

reviews:"102 Reviews",

location:"Near GLA University, Mathura",

distance:"2 Min Away from GLA University",

rent:"₹5,000 / Month",

owner:"7533843905",

images:[

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784262084/Vaishnavi-Boys-Hostel-1.jpg_cn0fsb.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784262084/Vaishnavi-Boys-Hostel-2.jpg_txxtlb.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784262083/Vaishnavi-Boys-Hostel-3.jpg_bixtr3.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784262083/Vaishnavi-Boys-Hostel-4.jpg_lurlv9.jpg",

"https://res.cloudinary.com/ktatmqjd/image/upload/v1784262083/Vaishnavi-Boys-Hostel-5.jpg_mw3rzq.jpg"

]

},
5: {

  name: "Neha Girls Hostel",

  rating: "4.7",

  reviews: "89 Reviews",

  location: "Near GLA University, Mathura",

  distance: "5 Min Away from GLA University",

  rent: "₹3,500 / Month (Non AC) | ₹4,500 + Electricity (AC)",

  owner: "9058926490",

  images: [

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784264070/Neha-Girls-Hostel-1.jpg_qm1q4l.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784264071/Neha-Girls-Hostel-2.jpg_l1m89w.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784264070/Neha-Girls-Hostel-3.jpg_tv4i9a.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784264070/Neha-Girls-Hostel-4.jpg_wspnwh.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784264069/Neha-Girls-Hostel-5.jpg_nyssxr.jpg"

  ]

},
6: {

  name: "Shree Govindam Chhatrawas Nivas",

  rating: "4.7",

  reviews: "102 Reviews",

  location: "Near GLA University, Mathura",

  distance: "4 Min Away from GLA University",

  rent: "₹9,000 / Month (Non AC) | AC ₹9,000 + Electricity Bill",

  owner: "8920877022",

  images: [

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784266749/Shree-Govindam-Chhatrawas-Nivas-1.jpg_a7cos8.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784266809/Shree-Govindam-Chhatrawas-Nivas-2.jpg_fdiisg.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784266808/Shree-Govindam-Chhatrawas-Nivas-4.jpg_kkfmso.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784266808/Shree-Govindam-Chhatrawas-Nivas-3.jpg_qlcjrh.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784266805/Shree-Govindam-Chhatrawas-Nivas-5.jpg_fkdmy7.jpg"

  ]

},
7: {

  name: "LA LA LAND",

  rating: "4.8",

  reviews: "104 Reviews",

  location: "Near GLA University, Mathura",

  distance: "2 Min Away from GLA University",

  rent: "₹5,000 / Month",

  owner: "9501906552",

  images: [

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784354962/La-La-Land-Boys-hostel-2.jpg_mxjs5a.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784354963/La-La-Land-Boys-hostel-1.jpg_dn5uww.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784354963/La-La-Land-Boys-hostel-3.jpg_s39i5r.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784354963/La-La-Land-Boys-hostel-4.jpg_dc9vxn.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784354963/La-La-Land-Boys-hostel-5.jpg_tvawnf.jpg"

  ]

},
8: {

  name: "AV Boys Hostel",

  rating: "4.8",

  reviews: "99 Reviews",

  location: "Front of GLA University, Mathura",

  distance: "Front of GLA University",

  rent: "₹80,000 / Year (Non AC) | ₹1,20,000 / Year (AC)",

  owner: "8755774015",

  images: [

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784357002/Av-Boys-Hostel-1.jpg_ifzu05.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784357001/Av-Boys-Hostel-2.jpg_kvntbe.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784357001/Av-Boys-Hostel-3.jpg_dzjxkr.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784357000/Av-Boys-Hostel-4.jpg_tcivjr.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784357000/Av-Boys-Hostel-5.jpg_hycyxh.jpg"

  ]

},
9: {

  name: "Ladli Ji Girls Hostel",

  rating: "4.7",

  reviews: "96 Reviews",

  location: "Near GLA University, Mathura",

  distance: "2 Min Away from GLA University",

  rent: "₹7,500 / Month",

  owner: "9634246561",

  images: [

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784358779/Ladli-Ji-Girls-Hostel-1.jpg_nnshff.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784358777/Ladli-Ji-Girls-Hostel-2.jpg_qz93ig.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784358776/Ladli-Ji-Girls-Hostel-3.jpg_qwkx9v.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784358775/Ladli-Ji-Girls-Hostel-4.jpg_tzg6kz.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784358775/Ladli-Ji-Girls-Hostel-5.jpg_huv5zs.jpg"

  ]

},
10: {

  name: "Abhinandan Boys and Girls Hostel",

  rating: "4.8",

  reviews: "97 Reviews",

  location: "Near GLA University, Mathura",

  distance: "5 Min Away from GLA University",

  rent: "₹90,000 / Year (Non AC) | AC ₹90,000 + Electricity Bill",

  owner: "8679251595",

  images: [

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784361917/Abhinandan_Hostel-1.jpg_m4qads.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784361915/Abhinandan_Hostel-2.jpg_r9v0dx.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784361913/Abhinandan_Hostel-3.jpg_hhqnu9.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784361911/Abhinandan_Hostel-4.jpg_vho8rf.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784361910/Abhinandan_Hostel-5.jpg_pnpynk.jpg",

    "https://res.cloudinary.com/ktatmqjd/image/upload/v1784361909/Abhinandan_Hostel-6.jpg_do3b3n.jpg"

  ]

},

};
const hostel = hostelData[id];

const images = hostel.images;

const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section className="hostel-details">

      {/* Cover Image */}

      <div className="cover-section">
        <img
      src={images[0]}
     alt={hostel.name}
     className="cover-image"
    />
      </div>

      {/* Hostel Info */}

      <div className="details-container">

        <h1>🏠 {hostel.name}</h1>

        <p className="rating">
          ⭐ {hostel.rating}
          ({hostel.reviews})
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
  {hostel.name==="Cozy Girls Hostel" ||
   hostel.name === "Neha Girls Hostel" || hostel.name==="Ladli Ji Girls Hostel" ? (

<span>👧 Girls</span>

) : hostel.name==="Rana Boys Hostel" || hostel.name==="Vaishnavi Boys Hostel" || hostel.name==="Shree Govindam Chhatrawas Nivas" || hostel.name==="LA LA LAND" || hostel.name==="AV Boys Hostel"? (

<span>👦 Boys</span>

) : hostel.name === "Abhinandan Boys and Girls Hostel" ? (
<>
  <span>👦 Boys</span>
  <span>👧 Girls</span>
</>
  ) : (

<>

<span>👦 Boys</span>

<span>👧 Girls</span>

<span>👨‍👩‍👧 Family</span>

</>

)}
</div>
        <div className="sharing-box">
  {hostel.name==="Cozy Girls Hostel" ? (

<>

<span>🛏 Double Sharing</span>

<span>🛏 Triple Sharing</span>

</>

) : hostel.name==="Rana Boys Hostel" ? (

<>

<span>🛏 Double Sharing</span>

<span>🛏 Triple Sharing</span>

</>

) : hostel.name==="Vaishnavi Boys Hostel" ? (

<span>🛏 Double Sharing</span>

) :  hostel.name === "Neha Girls Hostel" ? (
<>
  <span>🛏 Single Sharing</span>
  <span>🛏 Double Sharing</span>
  <span>🛏 Triple Sharing</span>
</>
) : hostel.name === "Shree Govindam Chhatrawas Nivas" ? (
<>
  <span>🛏 Single Sharing</span>
  <span>🛏 Double Sharing</span>
</>
): hostel.name === "LA LA LAND" ? (
<>
  <span>🛏 Double Sharing</span>
  <span>🛏 Triple Sharing</span>
</>
) : hostel.name === "AV Boys Hostel" ? (
<>
  <span>🛏 Double Sharing</span>
</>
) : hostel.name === "Ladli Ji Girls Hostel" ? (
<>
  <span>🛏 Double Sharing</span>
  <span>🛏 Triple Sharing</span>
</>
) : hostel.name === "Abhinandan Boys and Girls Hostel" ? (
<>
  <span>🛏 Double Sharing</span>
</>
) : (

<>

<span>🛏 Single Sharing</span>

<span>🛏 Double Sharing</span>

<span>🛏 Triple Sharing</span>

</>

)}
</div>

      </div>

{/* Photo Gallery */}

      <div className="gallery-section">

        <h2>📷 Photo Gallery</h2>

        <div className="gallery-grid">

       {images.slice(1).map((image,index)=>(

          <img
          key={index}
         src={image}
        alt="Hostel"
     onClick={()=>setSelectedImage(image)}
   />

))}

</div>

      </div>

      {/* Facilities */}

      <div className="facility-section">

        <h2>🏠 Facilities</h2>

        <div className="facility-grid">

          <div className="facility-card">📶 Free WiFi</div>

          <div className="facility-card">❄️ AC</div>

          <div className="facility-card">🍽 Mess Available</div>

          <div className="facility-card">💧 RO Water</div>

          <div className="facility-card">🚗 Parking</div>

          <div className="facility-card">📹 CCTV Security</div>

          <div className="facility-card">⚡ Power Backup</div>

          <div className="facility-card">🚿 Attached Bathroom</div>

        </div>

      </div>
      {/* Description */}

      <div className="description-section">

        <h2>📝 About {hostel.name}</h2>

        <p>
{
  hostel.name === "Abhinandan Boys and Girls Hostel"
?
"Abhinandan Boys and Girls Hostel is a modern hostel located just 5 minutes from GLA University, Mathura. The hostel provides separate accommodation for both boys and girls in a safe and student-friendly environment. It offers Double Sharing rooms with WiFi, RO drinking water, CCTV surveillance, power backup, parking, laundry facilities, hygienic mess services, and attached bathrooms. A unique feature of this hostel is its swimming pool and well-maintained garden, providing students with opportunities for relaxation and recreation. The hostel also offers 24×7 emergency medical assistance, ensuring students receive immediate support whenever required. With quality facilities, security, and a peaceful atmosphere, Abhinandan Boys and Girls Hostel is an excellent choice for students near GLA University."
:
  hostel.name === "Ladli Ji Girls Hostel"
?
"Ladli Ji Girls Hostel is a secure and comfortable accommodation located just 2 minutes from GLA University, Mathura. The hostel is specially designed for girls and provides a safe, family-oriented environment where the owner's family lives on the premises, ensuring continuous care and supervision. Students benefit from 24×7 CCTV surveillance, WiFi, RO drinking water, power backup, parking, laundry facilities, hygienic mess services, and attached bathrooms. Double and Triple Sharing rooms are clean, spacious, and well-maintained. With its focus on safety, comfort, and a peaceful atmosphere, Ladli Ji Girls Hostel is an excellent choice for girls studying at GLA University."
:
  hostel.name === "AV Boys Hostel"
?
"AV Boys Hostel is located directly in front of GLA University, making it one of the most convenient accommodation options for students. The hostel offers Double Sharing rooms with both AC and Non-AC options. Students are provided with high-speed WiFi, RO drinking water, CCTV security, power backup, parking, laundry facilities, and hygienic mess services. The hostel has clean and well-maintained common bathrooms and toilets that are regularly cleaned for students' comfort. Its excellent location allows students to reach the university within a few minutes on foot, making it an ideal choice for those who prefer to stay very close to the campus."
:
  hostel.name === "LA LA LAND"
?
"LA LA LAND is a newly constructed boys hostel located just 2 minutes from GLA University, Mathura. Designed with modern facilities and student comfort in mind, the hostel offers clean and spacious Double and Triple Sharing rooms with attached bathrooms. Students enjoy high-speed WiFi, RO drinking water, CCTV security, power backup, parking, and laundry facilities, including washing machines for daily convenience. Popular restaurants and cafés are located nearby, making it easy for students to access food and hangout spots. With its fresh infrastructure, safe environment, and excellent location, LA LA LAND is a great choice for students looking for comfortable and affordable accommodation near GLA University."
:
  hostel.name === "Shree Govindam Chhatrawas Nivas"
?
"Shree Govindam Chhatrawas Nivas is a well-maintained boys hostel located just 4 minutes from GLA University, Mathura. The hostel offers a peaceful, safe, and student-friendly environment with 24×7 CCTV surveillance and warden support. It provides high-speed WiFi, RO drinking water, power backup, parking, attached bathrooms, and hygienic mess facilities. A special feature of this hostel is the availability of sweet water for bathing, making daily use more comfortable. Students staying in Non-AC rooms are also provided with coolers during the summer season for added comfort. With Single and Double Sharing options, this hostel is an excellent choice for students looking for quality accommodation near the university."
:
  hostel.name === "Neha Girls Hostel"
?
"Neha Girls Hostel is a safe and comfortable accommodation located just 5 minutes from GLA University, Mathura. The hostel is specially designed for girls and provides a secure, family-friendly environment. The owner's family lives on the premises, ensuring students receive continuous support and care. In case of any emergency, medical assistance is available 24×7. The hostel offers WiFi, RO drinking water, CCTV surveillance, power backup, parking, attached bathrooms, and both AC and Non-AC rooms with Single, Double, and Triple Sharing options. Its peaceful atmosphere and focus on student safety make it an excellent choice for girls studying at GLA University."
:
  hostel.name==="Vaishnavi Boys Hostel"
?
"Vaishnavi Boys Hostel is a newly constructed hostel near GLA University, Mathura, offering modern rooms and a comfortable living experience for students. The hostel provides a clean, peaceful, and secure environment with 24×7 CCTV surveillance, high-speed WiFi, RO drinking water, power backup, parking, laundry facilities, and attached bathrooms. Double Sharing rooms are spacious, well-ventilated, and designed to provide maximum comfort for students. Located just 2 minutes from GLA University, the hostel allows students to reach campus quickly while enjoying a safe and friendly atmosphere. Being a newly built property, the rooms and facilities are well-maintained, making it an excellent choice for students looking for quality accommodation at an affordable price."
:
hostel.name === "Rana Boys Hostel"
?
"Rana Boys Hostel is one of the most trusted and well-maintained accommodations for boys near GLA University, Mathura. Home to more than 100 students, the hostel offers a friendly, disciplined, and comfortable environment that helps students focus on their studies. The hostel provides spacious AC and Non-AC rooms in Double and Triple Sharing options at affordable prices. Students enjoy high-speed WiFi, RO drinking water, hygienic mess facilities, 24×7 CCTV surveillance, attached bathrooms, power backup, and parking. Located just 2 minutes from GLA University, the hostel ensures quick access to campus while maintaining a peaceful atmosphere. With excellent cleanliness, supportive management, and a secure environment, Rana Boys Hostel is an ideal choice for students looking for a safe and comfortable stay during their academic journey."
:
hostel.name === "Cozy Girls Hostel"
?
"Cozy Girls Hostel is a safe, comfortable, and well-maintained accommodation specially designed for girl students near GLA University, Mathura. The hostel provides a secure environment with 24×7 CCTV surveillance, attached bathrooms, high-speed WiFi, AC rooms, RO drinking water, power backup, and hygienic mess facilities. Double and Triple Sharing rooms are spacious, clean, and regularly maintained. Located just 2 minutes from GLA University, it offers a peaceful atmosphere with a strong focus on safety, cleanliness, and comfort, making it one of the best choices for girl students."
:
"Neha Flats is one of the most comfortable and well-maintained accommodations near GLA University, Mathura. It is suitable for boys, girls, and families. The property offers spacious rooms with modern facilities including high-speed WiFi, AC, RO drinking water, CCTV security, power backup, attached bathrooms, and hygienic mess services. Located just 5 minutes from GLA University, Neha Flats provides a peaceful, clean, and secure environment, making it an excellent choice for students and working professionals."
}
</p>
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
            href={`tel:+91${hostel.owner}`}
            className="call-btn"
          >
            📞 Call Owner
          </a>

          <a
            href={`https://wa.me/91${hostel.owner}`}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            💬 WhatsApp Owner
          </a>

        </div>

      </div>
      {selectedImage && (
       <div
    className="image-popup"
    onClick={() => setSelectedImage(null)}
     >
      <button
     className="close-popup"
      onClick={(e) => {
    e.stopPropagation();
    setSelectedImage(null);
  }}
 >
  ✖
</button>
    <img
      src={selectedImage}
      alt="Hostel"
      className="popup-image"
    />
     </div>
      )}
      </section>
  );
}

export default HostelDetails;
