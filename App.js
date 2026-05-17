import React, { useState, useEffect } from 'react';
import './styles.css';


function RegisterPage({ onRegister, onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (username.trim() && password.trim()) {
      onRegister(username, password);
    } else {
      alert("Please fill in both fields!");
    }
  };

  return (
    <div className="register-page">
      <h1>Register 👇</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register 🆗</button>
      <p>
        Already have an account?{" "}
        <button onClick={onSwitchToLogin} className="link-button">
          Login Here👆
        </button>
      </p>
    </div>
  );
}

function LoginPage({ onLogin, onSwitchToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (onLogin(username, password)) {
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="login-page">
      <h1>Login🔑</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login </button>
      <p>
        Don’t have an account?{" "}
        <button onClick={onSwitchToRegister} className="link-button">
          Register Here®️
        </button>
      </p>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("login");
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeView, setActiveView] = useState("home");
  const [movies, setMovies] = useState(sampleMovies);
  const [backgroundImage, setBackgroundImage] = useState(""); 
  const [bgInput, setBgInput] = useState("");
  const [bucketList, setBucketList] = useState([]);

  const handleRegister = (username, password) => {
    setRegisteredUsers([...registeredUsers, { username, password }]);
    setActivePage("login");
    alert("Registration successful! Please log in.");
  };

  const handleLogin = (username, password) => {
    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setActivePage("login");
  };

  if (!isLoggedIn) {
    if (activePage === "login") {
      return (
        <LoginPage
          onLogin={handleLogin}
          onSwitchToRegister={() => setActivePage("register")}
        />
      );
    } else if (activePage === "register") {
      return (
        <RegisterPage
          onRegister={handleRegister}
          onSwitchToLogin={() => setActivePage("login")}
        />
      );
    }
  }

  return (
    <div
      className="app"
      style={
        backgroundImage
          ? {
              background: `url(${backgroundImage}) no-repeat center center/cover`
            }
          : {}
      }
    >
      <nav className="nav-bar">
        <button onClick={() => setActiveView("home")}>Home🏠</button>
        <button onClick={() => setActiveView("watchlist")}>Watchlist📃</button>
        <button onClick={() => setActiveView("bucketlist")}>Bucketlist🪣</button>
        <button onClick={() => setActiveView("news")}>News🗞️</button>
        <button onClick={() => setActiveView("quiz")}>Quiz🧪</button>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      {}
      <div className="bg-setting">
        <input
          type="text"
          placeholder="Enter Background Image URL"
          value={bgInput}
          onChange={(e) => setBgInput(e.target.value)}
        />
        <button onClick={() => setBackgroundImage(bgInput)}>Set Background🌄</button>
      </div>

      {activeView === "home" && (
        <HomePage onStart={() => setActiveView("watchlist")} />
      )}
      {activeView === "watchlist" && (
        <WatchListPage movies={movies} setMovies={setMovies} />
      )}
      {activeView === "bucketlist" && (
        <BucketListPage bucketList={bucketList} setBucketList={setBucketList} />
      )}
      {activeView === "news" && <NewsPage />}
      {activeView === "quiz" && <QuizPage />}

      <footer>
        <p>
          @2025 Welcome to Watch List – your hub for tracking, reviewing, and discovering movies and series.
        </p>
      </footer>
    </div>
  );
}

const sampleMovies = [
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    platform: "Prime Video",
    image: "https://c8.alamy.com/comp/2JH2PW0/movie-poster-inception-2010-2JH2PW0.jpg",
    link: "https://www.primevideo.com/detail/Inception/0KN3PDZAGPSCED6GLROBJP5A5X",
    ratings: [],
    reviews: []
  },
  {
    title: "The Boys",
    description:
      "A group of vigilantes, known as The Boys, take on corrupt, superpowered heroes who abuse their abilities for personal gain.",
    platform: "Prime Video",
    image: "https://i.ebayimg.com/images/g/Yx8AAOSwAlZkZz6K/s-l1600.jpg",
    link: "https://www.primevideo.com/detail/The-Boys/0KRGHGZCHKS920ZQGY5LBRF7MA",
    ratings: [],
    reviews: []
  },
  {
    title: "Breaking Bad",
    description:
      "A high school chemistry teacher turned meth producer partners with a former student to secure his family's future while descending into the criminal underworld.",
    platform: "Netflix",
    image: "https://th.bing.com/th/id/R.e4c8e5e7916219c024bb554fe59a544e?rik=nsBSwlq07RXWSQ&riu=http%3a%2f%2fwww.impawards.com%2fintl%2fgermany%2ftv%2fposters%2fdark_ver4_xxlg.jpg&ehk=mobAXRQhmnBDoZM8eFMKUEisPqeVlME6%2bOSmgP1iZMA%3d&risl=&pid=ImgRaw&r=0",
    link: "https://www.netflix.com/in/Title/70143836",
    ratings: [],
    reviews: []
  },
  {
    title: "Dark",
    description:
      "A small town’s search for missing children uncovers a time travel conspiracy spanning multiple generations.",
    platform: "Prime Video",
    image: "https://th.bing.com/th/id/R.e4c8e5e7916219c024bb554fe59a544e?rik=nsBSwlq07RXWSQ&riu=http%3a%2f%2fwww.impawards.com%2fintl%2fgermany%2ftv%2fposters%2fdark_ver4_xxlg.jpg&ehk=mobAXRQhmnBDoZM8eFMKUEisPqeVlME6%2bOSmgP1iZMA%3d&risl=&pid=ImgRaw&r=0",
    link: "https://www.netflix.com/in/title/80100172",
    ratings: [],
    reviews: []
  },
  {
    title: "There will be blood",
    description:
      "A ruthless oil prospector’s relentless pursuit of wealth leads to greed, betrayal, and destruction.",
    platform: "Prime Video",
    image: "https://tse2.mm.bing.net/th/id/OIP.bsoaU--yYmO7b-sPuSGH5AHaKi?rs=1&pid=ImgDetMain",
    link: "https://www.primevideo.com/detail/There-Will-Be-Blood/0KNDGJI4HRSR0UBC91JP9FW5WT",
    ratings: [],
    reviews: []
  },
  {
    title: "No country for old men",
    description:
      "A hunter’s discovery of a drug deal gone wrong sets off a deadly cat-and-mouse chase with a ruthless hitman.",
    platform: "Prime Video",
    image: "https://www.themoviedb.org/t/p/original/spnMmUIi3AlocdB4XS2MPlN9k0G.jpg",
    link: "https://www.primevideo.com/detail?gti=amzn1.dv.gti.9f1bcef7-2966-49b3-bdb4-f4eddec9e82d",
    ratings: [],
    reviews: []
  },
  {
    title: "Supernatural",
    description:
      "Two brothers hunt demons, ghosts, and other supernatural creatures while uncovering dark family secrets and cosmic battles.",
    platform: "Prime Video",
    image: "https://th.bing.com/th/id/R.7c3ea56dbc5f9a36d3ddd916d03b1fa3?rik=U8LnxcZ%2ff0BrPg&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f39500000%2fposter-supernatural-season-9-supernatural-39516573-1100-1500.jpg&ehk=y7ZWdjL8L42GUGjVNozFgt5SsHtoUCe8jjV6DHUQ%2frE%3d&risl=&pid=ImgRaw&r=0",
    link: "https://www.primevideo.com/detail/Supernatural/0JA6NNUMSIDKVMSN45URIWQFAC",
    ratings: [],
    reviews: []
  },
  {
    title: "The Walking Dead",
    description:
      "A group of survivors navigate a post-apocalyptic world overrun by zombies while facing human threats and moral dilemmas.",
    platform: "Prime Video",
    image: "https://th.bing.com/th/id/R.2eebcd980e9ac77f3e07f9612ed64eae?rik=L7aChJhj%2fQ0S5g&riu=http%3a%2f%2fcollider.com%2fwp-content%2fuploads%2fwalking_dead_one_sheet_poster.jpg&ehk=Np2rzCAvHTcaZXy6QDQyhjWxqWv6OZMgKCcdqUBA6M0%3d&risl=&pid=ImgRaw&r=0", 
    link: "https://www.primevideo.com/detail/The-Walking-Dead/0GHT3AGHJEBJM9ULPJ8PCRJJVI",
    ratings: [],
    reviews: []
  },
  {
    title: "Dictator",
    description: "A brutal dictator is suddenly exiled to New York City, where he must navigate the absurdity of democracy, fast food, and clueless hipsters, all while plotting his glorious return to power presented in funny tone.",
    platform: "Prime Video",
    image: "https://www.themoviedb.org/t/p/original/7NkfBiQWyCL3HPOskZNgcFslyCr.jpg",
    link: "https://www.primevideo.com/detail/The-Dictator/0SKP18IAOF20AXOUQ08B6PXHZP",
    ratings: [],
    reviews: []
  },
  {
    title: "Vikings",
    description:
      "The saga of Ragnar Lothbrok, a legendary Viking chieftain, as he rises to power, battles rivals, and explores new lands while grappling with family, loyalty, and destiny.",
    platform: "Netflix",
    image: "https://tse1.mm.bing.net/th/id/OIP.UFXlrkZRPQI-gCLMUQr0RAHaJ4?rs=1&pid=ImgDetMain",
    link: "https://www.netflix.com/in/title/70301870?source=35",
    ratings: [],
    reviews: []
  },
  {
    title: "Better call saul",
    description:
      "A small-time lawyer transforms into the morally ambiguous, fast-talking Saul Goodman, navigating crime, corruption, and his own descent into the underworld.",
    platform: "Netflix",
    image: "https://tse4.mm.bing.net/th/id/OIP.be86xJhAinIgZ5razWIbHgHaLH?rs=1&pid=ImgDetMain",
    link: "https://www.netflix.com/in/title/80021955",
    ratings: [],
    reviews: []
  },
  { title: "Avengers: Endgame", 
    description: "The epic conclusion to Marvel's Infinity Saga, where the Avengers unite to reverse Thanos' devastating actions.", 
    platform: "jio hotstar", 
    image: "https://th.bing.com/th/id/R.e955a1a4702bca3ea4da44898ee872dd?rik=y3Q%2bP3rY9f%2bAhA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2019%2f03%2favengers-endgame-poster.jpg&ehk=UoQckDV4roR6H27tbcXLyQV5qobxoM7kNAwoXFgcWhk%3d&risl=&pid=ImgRaw&r=0",
    link: "https://www.hotstar.com/in/movies/avengers-endgame/1260013556",
    ratings: [], 
    reviews: [] 
  },
  { title: "The Crown", 
    description: "A biographical drama exploring the reign of Queen Elizabeth II and the political and personal events that shaped the monarchy.", 
    platform: "Netflix", 
    image: "https://th.bing.com/th/id/R.999eb3a74bb373187b7fc1f7a1f079c6?rik=SQ7Z1067I61nvg&riu=http%3a%2f%2fwww.impawards.com%2fintl%2fuk%2ftv%2fposters%2fcrown_xlg.jpg&ehk=UbmPlyHAnAR%2bNVlYZivdXeXCLZUpfqriii8AqXYrmk0%3d&risl=&pid=ImgRaw&r=0",
    link: "https://www.netflix.com/title/80025678", 
    ratings: [], 
    reviews: [] 
  },
  { title: "The Mandalorian", 
    description: "A Star Wars spin-off series following a bounty hunter's adventures in a galaxy filled with danger and unexpected allies.", 
    platform: "jio hotstar", 
    image: "https://www.themoviedb.org/t/p/original/sovNinySiSUgv7xGr2ax803R5i8.jpg",
    link: "https://www.hotstar.com/in/shows/the-mandalorian/1260021071", 
    ratings: [], 
    reviews: [] 
  },
  { title: "Money Heist", 
    description: "A Spanish heist crime drama following a group of robbers as they execute meticulously planned heists on the Royal Mint and the Bank of Spain.", 
    platform: "Netflix", 
    image: "https://www.themoviedb.org/t/p/original/tyIcR0x05p4TWGVvcoAbEwVNzyj.jpg",
    link: "https://www.netflix.com/title/80192098", 
    ratings: [], 
    reviews: [] 
  },
  { title: "Chernobyl", 
    description: "A gripping miniseries that chronicles the catastrophic nuclear disaster of 1986 and the brave individuals who risked their lives to mitigate its impact.", 
    platform: "jio hotstar", 
    image: "https://www.themoviedb.org/t/p/original/tyIcR0x05p4TWGVvcoAbEwVNzyj.jpg",
    link: "https://www.hotstar.com/in/shows/chernobyl/1971002867", 
    ratings: [],
    reviews: [] 
  },
  { title: "The Irishman", 
    description: "A cinematic masterpiece chronicling the life of a hitman as he reflects on his involvement with organized crime and the consequences of his actions.", 
    platform: "Netflix", 
    image: "https://posterspy.com/wp-content/uploads/2019/09/The-Irishman-2-1200x1830.jpg",
    link: "https://www.netflix.com/title/80175798", 
    ratings: [], 
    reviews: [] 
  },
  { title: "The Witcher", 
    description: "A fantasy series following Geralt of Rivia, a monster hunter, as he navigates a world filled with magic, political intrigue, and personal destiny.", 
    platform: "Netflix", 
    image: "https://tse1.mm.bing.net/th/id/OIP.onTqxJXopC-Twdm1FntQQwHaK-?rs=1&pid=ImgDetMain",
    link: "https://www.netflix.com/title/80189685", 
    ratings: [], 
    reviews: [] 
  },
  { title: "Succession", 
    description: "A gripping drama about a wealthy and dysfunctional family vying for control of their global media empire.", 
    platform: "jio hotstar", 
    image: "https://tse4.mm.bing.net/th/id/OIP.XWAe57zlC2KTutRiSsw4hAHaJS?rs=1&pid=ImgDetMain",
    link: "https://www.hotstar.com/in/shows/succession/1971002875", 
    ratings: [], 
    reviews: [] 
  },
  { title: "Band of Brothers", 
    description: "A critically acclaimed war drama miniseries that follows the story of Easy Company, 506th Regiment of the 101st Airborne Division, from their training to their missions during World War II.", 
    platform: "HBO (Available on Jio Hotstar)", 
    image: "https://i.pinimg.com/736x/1c/45/b7/1c45b7e64675b0236d0f68b63d832360.jpg",
    link: "https://www.hotstar.com/in/shows/band-of-brothers/1971003127", 
    ratings: [], 
    reviews: [] 
  }
];



function HomePage({ onStart }) {
  return (
    <div className="home">
      <h1>🎞️Welcome to Watch List🍿</h1>
      <p>
        📽️This app lets you track, review, and manage your favorite movies and series.
        You can create watchlists, add items to your bucketlist, stay updated with the latest news,
        and even take a fun quiz on film knowledge!🎬
      </p>
      <button onClick={onStart}>Get Started🎦</button>
    </div>
  );
}

function WatchListPage({ movies, setMovies }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [platformFilter, setPlatformFilter] = useState("All");
  const [sortCriterion, setSortCriterion] = useState("Default");
  const [currentPage, setCurrentPage] = useState(0);
  const PAGE_SIZE = 3;

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPlatform, setNewPlatform] = useState("");
  const [newLink, setNewLink] = useState("");
  const [newType, setNewType] = useState("Movie");
  const [newImage, setNewImage] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (platformFilter === "All" || movie.platform === platformFilter)
  );

  const sortedMovies = [...filteredMovies];
  if (sortCriterion === "titleAsc") {
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortCriterion === "ratingDesc") {
    sortedMovies.sort((a, b) => {
      const avgA = a.ratings.length
        ? a.ratings.reduce((acc, v) => acc + v, 0) / a.ratings.length
        : 0;
      const avgB = b.ratings.length
        ? b.ratings.reduce((acc, v) => acc + v, 0) / b.ratings.length
        : 0;
      return avgB - avgA;
    });
  }

  const totalPages = Math.ceil(sortedMovies.length / PAGE_SIZE);
  const paginatedMovies = sortedMovies.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  const handleReviewSubmit = (movieIndex, newRating, reviewText) => {
    const updatedMovies = [...movies];
    updatedMovies[movieIndex].ratings.push(newRating);
    updatedMovies[movieIndex].reviews.push(reviewText);
    setMovies(updatedMovies);
  };

  const calculateAverage = (ratings) =>
    ratings.length
      ? (ratings.reduce((acc, r) => acc + r, 0) / ratings.length).toFixed(1)
      : 0;

  const handleAddMovie = () => {
    if (
      newTitle.trim() === "" ||
      newDescription.trim() === "" ||
      newPlatform.trim() === "" ||
      newLink.trim() === ""
    ) {
      alert("Please fill in all fields for the new entry.");
      return;
    }
    const newMovie = {
      title: newTitle,
      description: newDescription,
      platform: newPlatform,
      link: newLink,
      type: newType,
      image: newImage || null,
      ratings: [],
      reviews: []
    };
    setMovies([...movies, newMovie]);
    setNewTitle("");
    setNewDescription("");
    setNewPlatform("");
    setNewLink("");
    setNewType("Movie");
    setNewImage("");
  };

  return (
    <div className="watchlist-page">
      <h2>Watchlist👀</h2>
      {}
      <div className="new-movie-form">
        <h3>Add New Movie/Series</h3>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Platform (e.g., Netflix, Prime Video)"
          value={newPlatform}
          onChange={(e) => setNewPlatform(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <select value={newType} onChange={(e) => setNewType(e.target.value)}>
          <option value="Movie">Movie</option>
          <option value="Series">Series</option>
        </select>
        <button onClick={handleAddMovie}>Add Entry➕</button>
      </div>

      {}
      <div className="controls">
        <input
          type="text"
          placeholder="Search movies or series..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(0);
          }}
        />
        <select
          value={platformFilter}
          onChange={(e) => {
            setPlatformFilter(e.target.value);
            setCurrentPage(0);
          }}
        >
          <option value="All">All Platforms</option>
          <option value="Netflix">Netflix</option>
          <option value="Prime Video">Prime Video</option>
          <option value="jio hotstar">jio hotstar</option>
        </select>
        <select value={sortCriterion} onChange={(e) => setSortCriterion(e.target.value)}>
          <option value="Default">Default</option>
          <option value="titleAsc">Title (A–Z)</option>
          <option value="ratingDesc">Rating (High–Low)</option>
        </select>
      </div>

      {}
      <div className="movie-list">
        {paginatedMovies.map((movie, index) => {
          const originalIndex = movies.findIndex((m) => m.title === movie.title);
          return (
            <div className="movie-card">
  <img src={movie.image} alt={`${movie.title} Poster`} className="movie-poster" />
  <h3>
    {movie.title} {movie.type && `(${movie.type})`}
  </h3>
  <p>{movie.description}</p>
  <a href={movie.link} target="_blank" rel="noopener noreferrer">
    Watch on {movie.platform}
  </a>
  <p>Average Rating: {calculateAverage(movie.ratings)} / 5</p>
  <ReviewForm
    onSubmit={(rating, review) => handleReviewSubmit(originalIndex, rating, review)}
  />
  <div className="reviews">
    <h4>Reviews:</h4>
    {movie.reviews.map((r, i) => (
      <p key={i}>"{r}"</p>
    ))}
  </div>
</div>
          );
        })}
      </div>

      {}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          Previous⬅️
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={currentPage >= totalPages - 1}
        >
          Next➡️
        </button>
      </div>
    </div>
  );
}

function BucketListPage({ bucketList, setBucketList }) {
  const [newBucketTitle, setNewBucketTitle] = useState("");
  const [newBucketDescription, setNewBucketDescription] = useState("");

  const handleAddBucketItem = () => {
    if (newBucketTitle.trim() === "") {
      alert("Please enter a title for the bucket list item.");
      return;
    }
    const newItem = { title: newBucketTitle, description: newBucketDescription };
    setBucketList([...bucketList, newItem]);
    setNewBucketTitle("");
    setNewBucketDescription("");
  };

  const handleDeleteBucketItem = (index) => {
    const updated = bucketList.filter((_, i) => i !== index);
    setBucketList(updated);
  };

  return (
    <div className="bucketlist-page">
      <h2>Your Bucket List</h2>
      <div className="new-bucket-form">
        <input
          type="text"
          placeholder="Bucket List Item Title"
          value={newBucketTitle}
          onChange={(e) => setNewBucketTitle(e.target.value)}
        />
        <textarea
          placeholder="Description (optional)"
          value={newBucketDescription}
          onChange={(e) => setNewBucketDescription(e.target.value)}
        ></textarea>
        <button onClick={handleAddBucketItem}>Add to Bucket List 🚮</button>
      </div>
      <div className="bucket-items">
        {bucketList.map((item, index) => (
          <div key={index} className="bucket-item">
            <h3>{item.title}</h3>
            {item.description && <p>{item.description}</p>}
            <button onClick={() => handleDeleteBucketItem(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsPage() {
  const sampleNews = [
    {
      title: <h2>Marvel Announces A New Team Up Superhero Movie</h2>,
      description:
        <h3><i>"Marvel Studios has revealed details about their upcoming film featuring an all-new cast."</i></h3>,
      link: "https://www.marvel.com/articles"
    },
    {
      title: <h2>Netflix Releases Sneak Peek at Upcoming Series and Movies"</h2>,
      description:
      <h3><i>"Netflix movies and series set to release next month.</i></h3>,
      link: "https://www.netflix.com/tudum/articles/new-on-netflix"
    },
    {
      title:<h2>Prime Video Series Gets Eyes All Over The World</h2>,
      description:
      <h3><i>"A newseries on Prime Video has been anticipated for its interesting storyline and for its star cast."</i></h3>,
      link: "https://www.aboutamazon.com/news/entertainment/prime-video-new-tv-series-movies-announcements-2024"
    },
    {
      title:<h2> Classic Film Remastered for Anniversary</h2>,
      description:
      <h3><i>"Some Cult Classic Films are about to get polished and released in theatres."</i></h3>,
      link: "https://screenrant.com/upcoming-movie-reboot-remake-exciting-2024/"
    },
    {
      title:<h2> Oscar Talks: Surprising Contenders Revealed</h2>,
      description:
      <h3><i>"As awards season nears, buzz builds around unexpected frontrunners for this year's Oscars."</i></h3>,
      link: "https://www.oscars.org/"
    }
  ];
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const shuffled = [...sampleNews].sort(() => 0.5 - Math.random());
    setNewsItems(shuffled);
  }, []);

  return (
    <div className="news-page">
      <h2>Movie & Series News</h2>
      {newsItems.map((news, index) => (
        <div key={index} className="news-card">
          <div className="news-background">
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          const shuffled = [...sampleNews].sort(() => 0.5 - Math.random());
          setNewsItems(shuffled);
        }}
      >
        Refresh News🔄️
      </button>
    </div>
  );  
}

function QuizPage() {
  const allQuestions = [
    {
      question: "What is the highest-grossing movie of all time?",
      options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
      correct: "Avatar",
    },
    {
      question: "Which actor has won the most Oscars?",
      options: ["Leonardo DiCaprio", "Meryl Streep", "Katharine Hepburn", "Tom Hanks"],
      correct: "Katharine Hepburn",
    },
    {
      question: "Which movie features the quote 'I'll be back'?",
      options: ["Terminator", "Die Hard", "Predator", "RoboCop"],
      correct: "Terminator",
    },
    {
      question: "Who directed 'Pulp Fiction'?",
      options: ["Steven Spielberg", "Martin Scorsese", "Quentin Tarantino", "Christopher Nolan"],
      correct: "Quentin Tarantino",
    },
    {
      question: "What year was the first Harry Potter movie released?",
      options: ["1999", "2001", "2003", "2005"],
      correct: "2001",
    },
    {
      question: "Which actor played the role of Jack in Titanic?",
      options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Matt Damon"],
      correct: "Leonardo DiCaprio",
    },
    {
      question: "What is the name of the fictional African nation in Black Panther?",
      options: ["Zamunda", "Latveria", "Wakanda", "Genovia"],
      correct: "Wakanda",
    },
    {
      question: "Who directed the The Lord of the Rings trilogy?",
      options: ["Steven Spielberg", "James Cameron", "Peter Jackson", "George Lucas"],
      correct: "Peter Jackson",
    },
    {
      question: "Which movie won the first-ever Oscar for Best Animated Feature?",
      options: ["Finding Nemo", "The Lion King", "Toy Story", "Shrek"],
      correct: "Shrek",
    },
    {
      question: "In the Harry Potter series, what is the name of Harry's owl?",
      options: ["Errol", "Crookshanks", "Hedwig", "Pigwidgeon"],
      correct: "Hedwig",
    },
    {
      question: "Which movie is about a group of dwarves, a hobbit, and a wizard on a journey to reclaim a mountain?",
      options: ["The Lord of the Rings", "The Hobbit", "Harry Potter and the Philosopher's Stone", "Narnia"],
      correct: "The Hobbit",
    },
    {
      question: "In which series do the characters reside in the fictional town of Hawkins?",
      options: ["Stranger Things", "Riverdale", "Twin Peaks", "Dark"],
      correct: "Stranger Things",
    },
    {
      question: "Which movie features the quote 'Why so serious?'",
      options: ["The Dark Knight", "Joker", "Sin City", "V for Vendetta"],
      correct: "The Dark Knight",
    },
    {
      question: "Which movie features the character Jack Dawson?",
      options: ["The Great Gatsby", "Titanic", "Inception", "Romeo Juliet"],
      correct: "Titanic",
    },
    {
      question: "In which series do characters navigate the post-apocalyptic zombie world?",
      options: ["The Walking Dead", "Supernatural", "The Last of Us", "Game of Thrones"],
      correct: "The Walking Dead",
    },
    {
      question: "Which movie is famous for the quote 'May the Force be with you'?",
      options: ["Star Trek", "Star Wars", "The Matrix", "Guardians of the Galaxy"],
      correct: "Star Wars",
    },
    {
      question: "Which movie has the iconic line 'Here's looking at you, kid'?",
      options: ["Casablanca", "Gone with the Wind", "Citizen Kane", "The Godfather"],
      correct: "Casablanca",
    },
    {
      question: "Which series features the character Walter White?",
      options: ["Breaking Bad", "Better Call Saul", "Dexter", "The Sopranos"],
      correct: "Breaking Bad",
    },
  ];

  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 3));
  }, []);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: selectedOption });
  };

  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correct) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
  };

  return (
    <div className="quiz-page">
      <h2>Quiz: Test Your Movie Knowledge 🧠</h2>
      {questions.map((q, index) => (
        <div key={index} className="quiz-question">
          <p>{q.question}</p>
          <div className="quiz-options">
            {q.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleAnswerChange(index, option)}
                  checked={userAnswers[index] === option}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmitQuiz}>Submit Quiz ✅</button>

      {score !== null && (
        <div className="quiz-result">
          <p>
            Your Score: {score} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}

const StarRating = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= (hover || rating) ? "star filled" : "star"}
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{ cursor: "pointer", fontSize: "24px" }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    if (rating === 0 || review.trim() === "") {
      alert("Please enter a rating and review.");
      return;
    }
    onSubmit(rating, review);
    setRating(0);
    setReview("");
  };

  return (
    <div className="review-form">
      <label>Rate the movie:</label>
      <StarRating rating={rating} onRatingChange={setRating} />
      <textarea
        placeholder="Write a review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit Review 📝</button>
    </div>
  );
};

export default App;
