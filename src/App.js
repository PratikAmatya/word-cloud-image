import "./App.css";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

function App() {
  const logoData = [
    {
      img: "a.png",
      title: "A Image",
      value: 22,
    },
    {
      img: "b.png",
      title: "B Image",
      value: 42,
    },
    {
      img: "c.png",
      title: "C Image",
      value: 12,
    },
    {
      img: "d.png",
      title: "D Image",
      value: 25,
    },
    {
      img: "e.png",
      title: "E Image",
      value: 25,
    },
    {
      img: "f.png",
      title: "E Image",
      value: 25,
    },
    {
      img: "g.png",
      title: "E Image",
      value: 25,
    },
  ];

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const logoImages = importAll(
    require.context("./logos", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ width: 400, height: 329 }}>
          <Masonry columns={4} spacing={2}>
            {logoData.map((item, index) => (
              <div key={index}>
                <img
                  src={logoImages[`${item.img}`]}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                    // width: "100%",
                    height: `${item.value * 8}px`,
                  }}
                />
              </div>
            ))}
          </Masonry>
        </Box>
      </header>
    </div>
  );
}

export default App;
