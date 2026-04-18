import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("counter");

  return (
    <div style={{ padding: 20, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", maxWidth: 600, margin: "20px auto", backgroundColor: "#fff9f0", borderRadius: "20px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", border: "2px solid #e67e22" }}>
      <h1 style={{ textAlign: "center", color: "#d35400", textTransform: "uppercase", letterSpacing: "2px" }}>🍕 Pizza Admin SPA</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button 
          onClick={() => setPage("counter")} 
          style={{ padding: "10px 25px", margin: "0 10px", cursor: "pointer", backgroundColor: page === "counter" ? "#e67e22" : "#f39c12", color: "white", border: "none", borderRadius: "50px", fontWeight: "bold", transition: "0.3s" }}>
          Adagszámláló
        </button>
        <button 
          onClick={() => setPage("todo")} 
          style={{ padding: "10px 25px", margin: "0 10px", cursor: "pointer", backgroundColor: page === "todo" ? "#e67e22" : "#f39c12", color: "white", border: "none", borderRadius: "50px", fontWeight: "bold", transition: "0.3s" }}>
          Rendelési lista
        </button>
      </div>

      <hr style={{ border: "0", height: "2px", backgroundColor: "#f1c40f", marginBottom: "20px" }} />

      {page === "counter" && <Counter />}
      {page === "todo" && <Todo />}
    </div>
  );
}

// 🔢 Counter app - Pizza adagokhoz
function Counter() {
  const [num, setNum] = useState(1);

  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "white", borderRadius: "15px", boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)" }}>
      <h2 style={{ color: "#e67e22" }}>Hány pizzát süssünk?</h2>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <button onClick={() => num > 0 && setNum(num - 1)} style={{ width: "50px", height: "50px", fontSize: "24px", borderRadius: "50%", border: "2px solid #e74c3c", color: "#e74c3c", backgroundColor: "transparent", cursor: "pointer" }}>-</button>
        <span style={{ fontSize: "40px", fontWeight: "bold", minWidth: "60px", color: "#2c3e50" }}>{num}</span>
        <button onClick={() => setNum(num + 1)} style={{ width: "50px", height: "50px", fontSize: "24px", borderRadius: "50%", border: "2px solid #27ae60", color: "#27ae60", backgroundColor: "transparent", cursor: "pointer" }}>+</button>
      </div>
      <p style={{ marginTop: "15px", fontStyle: "italic", color: "#7f8c8d" }}>Jelenleg kiválasztott mennyiség</p>
    </div>
  );
}

// 📝 Todo app - Pizza típusokhoz
function Todo() {
  const [list, setList] = useState(["Margherita", "Prosciutto"]);
  const [text, setText] = useState("");

  function add() {
    if (!text) return;
    setList([...list, text]);
    setText("");
  }

  function del(i) {
    setList(list.filter((_, index) => index !== i));
  }

  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "white", borderRadius: "15px", boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)" }}>
      <h2 style={{ color: "#e67e22" }}>Kívánságlista</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Milyen pizzát kérsz?"
          style={{ padding: "10px 15px", borderRadius: "5px 0 0 5px", border: "1px solid #ccc", outline: "none", width: "60%" }}
        />
        <button onClick={add} style={{ padding: "10px 15px", borderRadius: "0 5px 5px 0", border: "none", backgroundColor: "#27ae60", color: "white", cursor: "pointer", fontWeight: "bold" }}>
          Hozzáadás
        </button>
      </div>

      <div style={{ textAlign: "left", maxWidth: "300px", margin: "auto" }}>
        {list.map((item, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", borderBottom: "1px solid #eee", fontSize: "18px" }}>
            <span>🍕 {item}</span>
            <button onClick={() => del(i)} style={{ backgroundColor: "#e74c3c", color: "white", border: "none", borderRadius: "4px", padding: "5px 8px", cursor: "pointer", fontSize: "12px" }}>
              Törlés
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}