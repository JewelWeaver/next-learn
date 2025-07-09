// pages/jazzy.js

export default function JazzyPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "serif", background: "#fffafc" }}>
      <h1 style={{ color: "#aa336a", fontSize: "2.5rem" }}>All Hail Queen Jazzy 👑</h1>
      
      <img 
        src="https://placekitten.com/300/300" 
        alt="Queen Jazzy" 
        style={{ borderRadius: "50%", margin: "1rem 0", border: "4px solid #aa336a" }} 
      />

      <h2>Jazzy’s Favorite Things:</h2>
      <ul>
        <li>Sunbeams 🌞</li>
        <li>Dramatic stares 👁️</li>
        <li>Warm laundry piles 🧺</li>
        <li>Her royal sister Tuba 🐈‍⬛</li>
      </ul>
    </div>
  );
}
