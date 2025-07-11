import React from 'react';
import { Typography, Grid } from '@mui/material';
import Moviecard from './Moviecard';
 

const Movies = [
  {
    title: 'The Lion King',
    date: '19 July 2019',
    image: 'https://www.themoviedb.org/t/p/original/7e2XWBtDPZJwIDxHU3bV9OGlYod.jpg',
    shortdesc: 'A young lion must reclaim his throne after fleeing in guilt.',
    longdesc:'When Simba is blamed for his father’s death, he runs away. But with the kingdom in ruin under Scar’s rule, Simba must return to face his destiny and restore balance.',
  },
  {
    title: 'Kung Fu Panda 4',
    date: '2024',
    image: 'https://i.pinimg.com/736x/01/f8/19/01f819bc06166eda181ae4c3d5f21368.jpg',
    shortdesc:' A panda trains his successor while fighting a new villain.',
    longdesc:'After achieving legendary status as the Dragon Warrior, Po is unexpectedly chosen to become the Spiritual Leader of the Valley of Peace — a role he\'s unsure he\'s ready for. Tasked with training a new warrior to take his place, Po must also confront a powerful sorceress known as The Chameleon, who can absorb the abilities of defeated villains. As the fate of the valley hangs in the balance, Po embarks on a journey of growth, legacy, and self-discovery, proving that being a true hero means knowing when to lead and when to let go.',
  },
  {
    title: 'Padakalam',
    date: '2025',
    image: 'https://cdn.moviefone.com/image-assets/1251970/9m4lvnqvwppA4BIoxqcWsWna5is.jpg?d=360x540&q=60',
    shortdesc:'Four students uncover their professors secrets amid campus chaos.',
    longdesc:'A quirky, energetic blend of college comedy and supernatural fantasy, Padakkalam offers laughs, body‑swap confusion, and a playful twist on nerd culture—ideal for viewers who enjoy lighthearted, offbeat campus capers.'
  },
   {
    title: 'Rekhachithram',
    date: '2025',
    image : 'https://images.justwatch.com/poster/322825787/s718/rekhachithram.jpg',
    shortdesc:'A disgraced cop probes a cold case tied to a missing actress.',
    longdesc:'Rekhachithram (2025) is a Malayalam investigative thriller that follows CI Vivek Gopinath, a disgraced police officer drawn back into action to solve the 40-year-old murder of a young actress named Rekha. Set against the nostalgic backdrop of 1980s Malayalam cinema, the film blends mystery, emotion, and cinematic history as Vivek unravels secrets hidden within the film industry’s golden era. With a gripping narrative, strong performances, and a unique tribute to classic Malayalam films, Rekhachithram offers a haunting and heartfelt journey into the shadows of fame and forgotten stories.',
   
   },
   {

    title:'Gargi',
    date:'july 25,2022',
    image:'https://tse4.mm.bing.net/th/id/OIP.k--DMy8Q-Zba2qBy6_vicQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
    shortdesc:'A courageous woman fights to prove her fathers innocence in a sensitive legal battle',
    longdesc:'Gargi is a powerful Tamil legal drama that follows a schoolteacher whose life is turned upside down when her father is accused in a child abuse case. Determined to uncover the truth, she bravely navigates the legal system despite overwhelming social pressure and personal turmoil. With the help of a rookie lawyer, Gargi begins a relentless fight for justice. The film explores themes of trust, morality, and resilience with sensitivity and depth. Sai Pallavi delivers a standout performance in this emotional and thought-provoking courtroom drama',
   },
   {
     title:'Premalu',
     date:'february 9,2024',
     image:'https://tse4.mm.bing.net/th/id/OIP.3iH6vUVAmZz0YISuMlmO6wHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3',
     shortdesc:'A fun tale of love and laughter between two unlikely youngsters.',
     longdesc:'Premalu is a lighthearted romantic comedy that follows Sachin, a fun-loving youngster from Kerala, who moves to Hyderabad for a fresh start. There, he meets Reenu, an ambitious and independent woman who catches his eye. As Sachin awkwardly tries to impress her, he finds himself in a series of humorous and relatable situations. Their story unfolds with a mix of laughter, awkward charm, and emotional moments. The film beautifully captures the innocence of first love and the struggles of modern relationships. With endearing characters and breezy storytelling, Premalu is a delightful celebration of love and youth.',
   },
   {
    title:'Oppenheimer',
     date:'july 21, 2023',
     image:'https://tse2.mm.bing.net/th/id/OIP.HfmHx8gvutBDqmUzVLQ7iAHaK-?rs=1&pid=ImgDetMain&o=7&rm=3',
     shortdesc:'The story of the man who led the creation of the atomic bomb.',
     longdesc:'Oppenheimer is a gripping historical drama that follows J. Robert Oppenheimer, the physicist behind the creation of the atomic bomb. As he leads the Manhattan Project, he grapples with the immense power and ethical weight of his invention. The film explores the clash between science, politics, and personal conscience. With intense performances and Nolan’s signature storytelling, Oppenheimer delivers a powerful look at a man who changed the world forever.',
   },
   {
     title:'Suzume',
     date:'2022',
     image:'https://tse4.mm.bing.net/th/id/OIP.2q4E9kbnVbCjYpUVRDksLAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
     shortdesc:' A girl travels across Japan closing magical doors that bring disasters.',
     longdesc:'Suzume is a breathtaking fantasy adventure from Makoto Shinkai, the director of Your Name and Weathering With You. The story follows Suzume, a 17-year-old girl who encounters a mysterious traveler searching for magical doors that unleash disasters across Japan. When Suzume opens one such door, she embarks on a journey to close them before catastrophe strikes. Along the way, she meets strange creatures, faces emotional trials, and learns about love, loss, and letting go. With stunning visuals, heart-tugging music, and deep emotional themes, the film captures the beauty and fragility of life. Suzume is both an emotional coming-of-age story and a magical road trip through a world on the edge of collapse.'
   },
   {
    title:'The Pursuit of Happyness ',
     date:'2006',
     image:'https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg',
     shortdesc:'A struggling single father chases his dream against all odds.',
     longdesc:'The Pursuit of Happyness tells the true story of Chris Gardner, a struggling salesman who becomes homeless while caring for his young son. Despite overwhelming challenges, he fights to create a better future, driven by love and determination. He lands an unpaid internship at a top brokerage firm, working tirelessly while hiding his situation. The film is a powerful reminder that hope, persistence, and belief in yourself can change everything.',
   },
   {
     title:'Slumdog Millionaire ',
     date:'2008',
     image:'https://tse4.mm.bing.net/th/id/OIP.isg8m_cRaUPxigmEhZcBAQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
     shortdesc:'An underdog from the slums rises to fame through destiny and perseverance.',
     longdesc:'Slumdog Millionaire follows Jamal, a young man from the slums of Mumbai, who surprises everyone by advancing in a high-stakes quiz show. As hes interrogated for cheating, each answer reveals a part of his difficult yet extraordinary life. The film blends love, destiny, and resilience in a gripping narrative. Its a powerful story of how hope can thrive in the harshest conditions.',
   },

   


{
    title: 'The Godfather',
    date: '1972',
    image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/the-godfather-poster.jpeg',
    shortdesc: 'A reluctant son takes over his familys powerful crime empire in 1940s America.',
    longdesc:'The Godfather is a gripping crime drama that follows the powerful Corleone family in post-war New York. When aging mafia patriarch Vito Corleone is targeted by rival gangs, his youngest son, Michael—once an outsider—reluctantly steps into the violent world of organized crime. As Michael rises to power, he is drawn deeper into a life of betrayal, loyalty, and bloodshed. The film masterfully explores themes of family, corruption, and the cost of ambition. With iconic performances and unforgettable dialogue, it remains one of cinema’s greatest masterpieces. The Godfather is a haunting and immersive journey into the dark heart of power and legacy.',

  },
  {
    title: 'Parasite',
    date: '2019',
    image: 'https://image.tmdb.org/t/p/original/w9mfthwD5j8PQEexWTRXY7f2H7K.jpg',
    shortdesc: 'A poor family schemes to infiltrate a wealthy household, leading to unexpected and deadly consequences.',
    longdesc:'Parasite is a darkly comedic thriller that explores class divide, deception, and survival. The story follows the impoverished Kim family, who gradually infiltrate the lives of the wealthy Park family by posing as unrelated professionals. What begins as a clever con quickly spirals into a tense and unpredictable chain of events. As the Kims enjoy their new luxurious lifestyle, buried secrets and social tensions erupt into chaos. With sharp satire and masterful storytelling, Parasite exposes the fragility of privilege and the desperation of poverty. The film is a bold, genre-blending masterpiece that challenges viewers to question society’s deep-rooted inequalities.',


    
  },
  {
    title: 'Interstellar',
    date: '2014',
    image: 'https://tse1.mm.bing.net/th/id/OIP.IuuohBMqKkT8LCNUWL4W3QHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3',
    shortdesc: 'A team of explorers travels through a wormhole to save humanity from a dying Earth.',
    longdesc:'Interstellar is a visually stunning sci-fi epic that explores love, time, and survival across galaxies. In a future where Earth is slowly becoming uninhabitable, former pilot Cooper joins a secret NASA mission to find a new home for mankind. Traveling through a wormhole near Saturn, the crew explores distant planets while facing extreme time dilation and emotional challenges. As years pass on Earth, Coopers bond with his daughter Murph becomes the emotional core of the story. The film blends scientific theory with human emotion, examining the power of connection even across space and time. Directed by Christopher Nolan, Interstellar is both a thrilling adventure and a heartfelt meditation on humanits place in the universe.',

  },
  {
    title: 'The Sky Is Pink',
    date: '2019',
    image: 'https://tse4.mm.bing.net/th/id/OIP.6cFa9mXiAmyy_x080PIfVgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
    shortdesc: 'A familys journey through love, hope, and heartbreak as they raise their terminally ill daughter.',
    longdesc:'The Sky Is Pink is a heartfelt biographical drama based on the real-life story of motivational speaker Aisha Chaudhary and her family. Told from Aisha’s perspective after her death, the film follows her parents, Aditi and Niren, as they navigate the emotional highs and lows of raising a child with a life-threatening illness. Despite the looming presence of loss, the family chooses to embrace life with humor, love, and unwavering strength. The film beautifully captures the bond between parents and their child, showing how love can persist even in the face of tragedy. With powerful performances and an emotional narrative, The Sky Is Pink is a moving tribute to resilience, sacrifice, and the celebration of life. It’s a poignant reminder that even a short life can leave a lasting impact.',
  },
  {
    title: 'Alappuzha Gymkhana',
    date: '2025',
    image: 'https://tse4.mm.bing.net/th/id/OIP.6wmFHEgXz_oiZUKWzUg8uwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
    shortdesc: 'A group of passionate youngsters fights to revive the legacy of Alappuzha’s historic boxing club.',
    longdesc:'Alappuzha Gymkhana is an inspiring sports drama set in the heart of Keralas coastal town. The story follows a group of passionate young footballers who set out to revive the legacy of the once-glorious Alappuzha Gymkhana Club. As they battle local politics, personal struggles, and dwindling public interest, the team finds strength in unity and a shared dream. With the odds stacked against them, their journey becomes one of grit, hope, and redemption through the spirit of the game. The film blends nostalgia with modern ambition, capturing the essence of football as more than just a sport—it’s a lifeline. Alappuzha Gymkhana is a celebration of community, youth, and the unbreakable will to bring a legend back to life.',
  },
  {
    title: 'Thudarum',
    date: '2025',
    image: 'https://tse1.mm.bing.net/th/id/OIP.tH_GVUTz46O7ZNieeCDKyQHaKl?rs=1&pid=ImgDetMain&o=7&rm=3',
    shortdesc: 'A man’s life takes a mysterious turn as he uncovers secrets after his wife’s unexpected death.',
    longdesc:'Thudarum is a poignant Malayalam drama that delves into grief, love, and the mysteries left behind by those we lose. After the sudden death of his wife, the protagonist struggles to come to terms with her absence while caring for their young daughter. As he begins to uncover pieces of her past, buried truths come to light, forcing him to confront emotions he had long suppressed. Each revelation adds depth to his understanding of the woman he loved, reshaping his journey of healing. The film explores themes of memory, resilience, and the quiet strength found in unexpected places. Thudarum is a tender and emotional reflection on how endings can lead to new beginnings.',
  },
  {
    title: 'Bromance',
    date: '2025',
    image: 'https://tse2.mm.bing.net/th/id/OIP.XzhRVnD1pkGIfBtJM1LlSwHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3',
    shortdesc: 'A carefree bachelor’s life is turned upside down when his best friend falls in love.',
    longdesc:'Bromance is a lighthearted coming-of-age comedy that explores friendship, jealousy, and growing up. The story follows two inseparable best friends whose carefree lives take a twist when one of them falls in love. As romance enters the picture, the other begins to feel sidelined, leading to a hilarious and heartfelt battle for attention. What starts as petty rivalry slowly evolves into self-discovery and emotional growth. The film captures the complexities of male friendship in a fun and relatable way, balancing laughs with tender moments. Bromance is a fun, feel-good ride about letting go, adapting to change, and realizing that true friendship stands the test of time.',
  },
  {
    title: 'Ponman',
    date: '2025',
    image: 'https://tse4.mm.bing.net/th/id/OIP.QkO8lYOuZ0DkcK5Wmv5gwQHaDf?w=1110&h=524&rs=1&pid=ImgDetMain&o=7&rm=3',
    shortdesc: 'A quiet village is shaken when a mysterious boy with a golden touch appears.',
    longdesc:'Ponman is a mystical drama set in a serene village where life takes an unexpected turn with the arrival of a mysterious young boy. The villagers soon discover that the child possesses a strange golden touch—everything he connects with changes their fate. While some see him as a blessing, others grow fearful of his power, leading to tension and suspicion in the once-peaceful community. As secrets from the boy’s past begin to surface, the line between miracle and curse begins to blur. The film weaves together themes of belief, greed, and innocence, offering a rich, emotional journey through folklore and human nature. Ponman is a hauntingly beautiful tale about wonder, fear, and the price of miracles.',
  },
  {
    title: 'Tourist Family',
    date: '2025',
    image: 'https://tse2.mm.bing.net/th/id/OIP._oGu-_2R5O5WJ7PwfvqTBAHaJL?rs=1&pid=ImgDetMain&o=7&rm=3',
    shortdesc: 'A familys chaotic vacation turns into a journey of laughter, mishaps, and unexpected bonding.',
    longdesc:'Tourist Family is a heartwarming comedy-drama that follows a quirky familys chaotic vacation that turns into an unexpected journey of bonding and self-discovery. Hoping for a relaxing holiday, the family instead finds themselves caught in a series of hilarious misadventures across unfamiliar cities. From lost passports to language barriers and cultural clashes, every mishap reveals hidden tensions and long-suppressed emotions within the family. As they stumble their way through challenges, they begin to reconnect, laugh, and understand each other like never before. With its mix of humor, emotion, and scenic backdrops, the film offers a relatable take on modern family dynamics. Tourist Family reminds us that sometimes getting lost together is the best way to find what truly matters.',
  },
  {
    title: 'Abraham Ozler',
    date: '2024',
    image: 'https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/ozler-20230520093313-21802.jpg',
    shortdesc:'A seasoned cop reopens a cold case that leads him down a dark and personal path.',
    longdesc:'Abraham Ozler is a gripping psychological crime thriller centered around a veteran police officer haunted by a tragic past. When a series of mysterious murders shock the city, Ozler is drawn into the investigation of a chilling cold case that strikes closer to home than he expected. As he delves deeper, buried secrets resurface and the line between his personal trauma and professional duty begins to blur. With each clue, the case unravels into something far more sinister, forcing Ozler to confront both a dangerous killer and his own emotional scars. Featuring intense performances and a suspense-filled narrative, the film explores grief, guilt, and the weight of unfinished business. Abraham Ozler is a haunting tale of justice, redemption, and the darkness we carry within.',

  },
 



];

const MovieList = () => {
  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to MovieHub
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Discover, Share, and Enjoy the Latest Movies
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Latest 20 Movies
      </Typography>
        <Grid container spacing={2} justifyContent="center">
  {Movies.slice(0, 4).map((movie, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
      <Moviecard {...movie} />
    </Grid>
  ))}
</Grid>

<Grid container spacing={2} justifyContent="center">
  {Movies.slice(4, 8).map((movie, index) => (
    <Grid item xs={12} sm={6} md={3} key={index + 4}>
      <Moviecard {...movie} />
    </Grid>
  ))}
</Grid>

<Grid container spacing={2} justifyContent="center">
  {Movies.slice(8, 12).map((movie, index) => (
    <Grid item xs={12} sm={6} md={3} key={index + 8}>
      <Moviecard {...movie} />
    </Grid>
  ))}
</Grid>

<Grid container spacing={2} justifyContent="center">
  {Movies.slice(12, 16).map((movie, index) => (
    <Grid item xs={12} sm={6} md={3} key={index + 12}>
      <Moviecard {...movie} />
    </Grid>
  ))}
</Grid>

<Grid container spacing={2} justifyContent="center">
  {Movies.slice(16, 20).map((movie, index) => (
    <Grid item xs={12} sm={6} md={3} key={index + 16}>
      <Moviecard {...movie} />
    </Grid>
  ))}
 </Grid>
  {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          // <Grid item xs={2} sm={4} md={4}>

          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <div>{index+1}</div>
            
          </Grid>
        ))}
      </Grid> */} 
<Grid container spacing={2}>
  {Array.from(Array(6)).map((_, index) => (
    <Grid item xs={6} sm={4} md={2} key={index}>
      <div>{index + 1}</div>
    </Grid>
  ))}
</Grid>


    </div>
  );
};

export default MovieList;
