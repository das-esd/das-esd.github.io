var track = document.getElementById("track");
var thumbnail = document.getElementById("thumbnail");
var background = document.getElementById("background");
var trackArtist = document.getElementById("track-artist");
var trackTitle = document.getElementById("track-title");
var progressBar = document.getElementById("progressBar");
var currentTime = document.getElementById("currentTime");
var durationTime = document.getElementById("durationTime");

var play = document.getElementById("play");
var pause = document.getElementById("pause");
var next = document.getElementById("next-track");
var prev = document.getElementById("prev-track");
var tracks, thumbnails, trackArtists, trackTitles;
trackIndex = 0;
tracks = [
  /* 2nd Update- Sec-1*/

  "../audios/files/audio/bng/rabindra-ad/2AMER_JABER_SOMOY.MP3",
  "../audios/files/audio/bng/rabindra-ad/71BROZOGOPI_KHELE_HORI.MP3",
  "../audios/files/audio/bng/rabindra-ad/72AAGUNER%20PRASHMANI_SA.mp3",
  "../audios/files/audio/bng/rabindra-ad/77ami tomar songe bedhechi.mp3",
  "../audios/files/audio/bng/rabindra-ad/80EKTKU CHOA.mp3",
  "../audios/files/audio/bng/rabindra-ad/81JAKHAN PORBE  NA MR.mp3",
  "../audios/files/audio/bng/rabindra-ad/Aaj Dhaner Khete.mp3",
  "../audios/files/audio/bng/rabindra-ad/Aaj Jemon Kore Gaiche Aakash.mp3",
  "../audios/files/audio/bng/rabindra-ad/aaji nahi nahi nidra.mp3",
  "../audios/files/audio/bng/rabindra-ad/Aamar Din Phuralo.mp3",
  "../audios/files/audio/bng/rabindra-ad/Aamar Raat Pohalo.mp3",
  "../audios/files/audio/bng/rabindra-ad/Adheko Ghume (Bengali-Mp3.com).mp3",
  "../audios/files/audio/bng/rabindra-ad/Agnishikha Esho Esho-(Mr-Jatt.com).mp3",
  "../audios/files/audio/bng/rabindra-ad/Aguner Parashmoni.mp3",
  "../audios/files/audio/bng/rabindra-ad/Akash Bhara.mp3",
  "../audios/files/audio/bng/rabindra-ad/Akashe Aaj Kon Charaner.mp3",
  "../audios/files/audio/bng/rabindra-ad/Amar Din Phuralo.mp3",
  "../audios/files/audio/bng/rabindra-ad/Amar Mallika Bone.mp3",
  "../audios/files/audio/bng/rabindra-ad/Amar Mukti Aloy Aloy.mp3",
  "../audios/files/audio/bng/rabindra-ad/Amaro Parano Jaha Chay.mp3",
  "../audios/files/audio/bng/rabindra-ad/Ami Bahu Bashonaye - Sahana Bajpaie.mp3",
  "../audios/files/audio/bng/rabindra-ad/Ami Tarei Jani.mp3",
  "../audios/files/audio/bng/rabindra-ad/Ami Tomaro Sange (Bengali-Mp3.com).mp3",
  "../audios/files/audio/bng/rabindra-ad/Bani Tabo Dhay Ananta Gagane-(Mr-Jatt.com).mp3",
  "../audios/files/audio/bng/rabindra-ad/Baro Asha Kore.mp3",
  "../audios/files/audio/bng/rabindra-ad/bhalobasi bhalobasi.mp3",
  "../audios/files/audio/bng/rabindra-ad/Bhalobese Sakhi.mp3",
  "../audios/files/audio/bng/rabindra-ad/Bhenge Mor Gharer Chabi.mp3",
  "../audios/files/audio/bng/rabindra-ad/Darao Amar Ankhiro Aage.mp3",
  "../audios/files/audio/bng/rabindra-ad/har mana har.mp3",

  /* 2nd Update- Sec-2*/
  "../audios/files/audio/bng/rabindra-ad/Jadi Tare Nai Chinj Go.mp3",
  "../audios/files/audio/bng/rabindra-ad/Je Drubpad Deioco Badhi.mp3",
  "../audios/files/audio/bng/rabindra-ad/Jete Jete Ekla Pathe (Bengali-Mp3.com).mp3",
  "../audios/files/audio/bng/rabindra-ad/Jete Jete Ekla Pathe.mp3",
  "../audios/files/audio/bng/rabindra-ad/Jharo Jharo Barishe.mp3",
  "../audios/files/audio/bng/rabindra-ad/Jonaki Ki Sukhe  (Bengali-Mp3.com).mp3",
  "../audios/files/audio/bng/rabindra-ad/Madhur dhwani baje Sraboni Sen.mp3",
  "../audios/files/audio/bng/rabindra-ad/Majhe Majhe Tobo Dekha Pai Arnob.mp3",
  "../audios/files/audio/bng/rabindra-ad/Mamo Antaro Udase.mp3",
  "../audios/files/audio/bng/rabindra-ad/Megh Boleche Jabo Jabo (Bengali-Mp3.com).mp3",

  "../audios/files/audio/bng/rabindra-ad/Megh boleche jabo jabo- Debadrito.mp3",
  "../audios/files/audio/bng/rabindra-ad/Nibir Ama Timir Hote.mp3",
  "../audios/files/audio/bng/rabindra-ad/Nitya Tomar Je Phool (Bengali-Mp3.com).mp3",
  "../audios/files/audio/bng/rabindra-ad/Ore Griho Bashi.mp3",
  "../audios/files/audio/bng/rabindra-ad/Phoole Phoole Dhole Dhole.mp3",
  "../audios/files/audio/bng/rabindra-ad/Pohalo Pohalo Bibhabari.mp3",
  "../audios/files/audio/bng/rabindra-ad/Prano Bhoriye (Bengali-Mp3.com).mp3",
  "../audios/files/audio/bng/rabindra-ad/Purano sei diner kotha.mp3",
  "../audios/files/audio/bng/rabindra-ad/Saghana Gahana Ratri.mp3",
  "../audios/files/audio/bng/rabindra-ad/Sei Bhalo Sei Bhalo (Bengali-Mp3.com).mp3",

  "../audios/files/audio/bng/rabindra-ad/Sokhi Bhabona Kahare Bale.mp3",
  "../audios/files/audio/bng/rabindra-ad/Sudhu Jaoya Asa (Bengali-Mp3.com).mp3",
  "../audios/files/audio/bng/rabindra-ad/Sudhu Tomar Bani (Bengali-Mp3.com).mp3",
  "../audios/files/audio/bng/rabindra-ad/Tobu mone rekho Sraboni Sen.mp3",
  "../audios/files/audio/bng/rabindra-ad/Tomar Khola Haowa (Bengali-Mp3.com).mp3",
  "../audios/files/audio/bng/rabindra-ad/Tumi Dak Diyecho.mp3",
  "../audios/files/audio/bng/rabindra-ad/Tumi Rabe Nirabe.mp3",

  /*First Update Sec-1 */

  "../audios/files/audio/eng/AdoreYou.mp3",
  "../audios/files/audio/eng/All Of Me.mp3",
  "../audios/files/audio/eng/Counting Stars.mp3",
  "../audios/files/audio/eng/Am I Wrong.mp3",
  "../audios/files/audio/eng/A Sky Full Of Stars.mp3",
  "../audios/files/audio/eng/Bailando.mp3",
  "../audios/files/audio/eng/Chandelier.mp3",

  "../audios/files/audio/eng/Demons.mp3",
  "../audios/files/audio/eng/Happy.mp3",
  "../audios/files/audio/eng/Let Her Go.mp3",
  "../audios/files/audio/eng/Let It Go.mp3",
  "../audios/files/audio/eng/Play It Again.mp3",
  "../audios/files/audio/eng/Radioactive.mp3",
  "../audios/files/audio/eng/Say Something.mp3",
  "../audios/files/audio/eng/Stay With Me.mp3",
  "../audios/files/audio/eng/Story Of My Life.mp3",
  "../audios/files/audio/eng/Wiggle.mp3",

  "../audios/files/audio/eng/Wrecking Ball.mp3",
  "../audios/files/audio/eng/One Dance.mp3",
  "../audios/files/audio/eng/004. Fifth Harmony feat. Ty Dolla $ign - Work From Home - Copy.mp3",
  "../audios/files/audio/eng/005. The Chainsmokers feat. Daya - Don't Let Me Down.mp3",
  "../audios/files/audio/eng/006. Lukas Graham - 7 Years.mp3",
  "../audios/files/audio/eng/007. Mike Posner - I Took A Pill In Ibiza.mp3",
  "../audios/files/audio/eng/012. Zayn - Pillowtalk.mp3",
  "../audios/files/audio/eng/020. G-Eazy X Bebe Rexha - Me, Myself & I.mp3",
  "../audios/files/audio/eng/024. Sia feat. Sean Paul - Cheap Thrills.mp3",
  "../audios/files/audio/eng/030. Twenty One Pilots - Ride.mp3",

  "../audios/files/audio/eng/046. Charlie Puth - One Call Away.mp3",
  "../audios/files/audio/eng/049. Disturbed - The Sound Of Silence.mp3",
  "../audios/files/audio/eng/078. Major Lazer feat. Nyla - Light It Up.mp3",
  "../audios/files/audio/eng/080. Alan Walker - Faded.mp3",

  /*First Update Sec-2 */

  "../audios/files/audio/eng/6-8-2022/Adele - Hello.mp3",
  "../audios/files/audio/eng/6-8-2022/Adele - Someone like you live at Royal Albert Hall HD.mp3",
  "../audios/files/audio/eng/6-8-2022/At Last - Etta James with lyrics on screen.mp3",
  "../audios/files/audio/eng/6-8-2022/Blue Foundation - Eyes On Fire.mp3",
  "../audios/files/audio/eng/6-8-2022/Bob Marley - Is This Love (lyrics).mp3",
  "../audios/files/audio/eng/6-8-2022/Bob Marley - One Love [Lyrics].mp3",
  "../audios/files/audio/eng/6-8-2022/Broods - Sleep Baby Sleep.mp3",
  "../audios/files/audio/eng/6-8-2022/Brothers Under the Sun Lyrics.mp3",
  "../audios/files/audio/eng/6-8-2022/Chris Isaak Wicked Game.mp3",
  "../audios/files/audio/eng/6-8-2022/David Gilmour - Remember That Night.mp3",

  "../audios/files/audio/eng/6-8-2022/Eagles - Hotel California with lyrics.mp3",
  "../audios/files/audio/eng/6-8-2022/Emotional Beat ( Instrumental ).mp3",
  "../audios/files/audio/eng/6-8-2022/ENIGMA - Shadows in Silence.mp3",
  "../audios/files/audio/eng/6-8-2022/Evanescence - My Immortal.mp3",
  "../audios/files/audio/eng/6-8-2022/Five Hundred Miles - Justin Timberlake, Carey Mulligan, Stark Sands [Inside Llewyn Davis OST].mp3",
  "../audios/files/audio/eng/6-8-2022/Fleurie - Breathe (Lyric Video).mp3",
  "../audios/files/audio/eng/6-8-2022/Game of Thrones Theme _ The Indian Jam Project.mp3",
  "../audios/files/audio/eng/6-8-2022/George Michael - Careless Whisper (Official Video).mp3",
  "../audios/files/audio/eng/6-8-2022/Gun's N' Roses - Knockin On Heavens Door.mp3",
  "../audios/files/audio/eng/6-8-2022/Guns N' Roses - November Rain.mp3",

  "../audios/files/audio/eng/6-8-2022/Infected Mushroom - Heavyweight.mp3",
  "../audios/files/audio/eng/6-8-2022/James Arthur - Impossible - Official Single.mp3",
  "../audios/files/audio/eng/6-8-2022/James Arthur - Recovery.mp3",
  "../audios/files/audio/eng/6-8-2022/Jason Mraz - I Won't Give Up [LYRICS].mp3",
  "../audios/files/audio/eng/6-8-2022/John Lennon - Imagine - Lyrics.mp3",
  "../audios/files/audio/eng/6-8-2022/John Lennon - Stand By Me.mp3",
  "../audios/files/audio/eng/6-8-2022/Justin Bieber - I'll Show You_(1280x720).mp3",
  "../audios/files/audio/eng/6-8-2022/last of the mohicans(beautiful song version).mp3",
  "../audios/files/audio/eng/6-8-2022/Lionel Richie- LADY.mp3",
  "../audios/files/audio/eng/6-8-2022/Mariage D'amour ~George Davidson.mp3",

  "../audios/files/audio/eng/6-8-2022/Massive Attack - Teardrop.mp3",
  "../audios/files/audio/eng/6-8-2022/Metallica - Nothing else matter lyrics.mp3",
  "../audios/files/audio/eng/6-8-2022/Pink Floyd - Another Brick In The Wall (HQ).mp3",
  "../audios/files/audio/eng/6-8-2022/Pink Floyd - Coming Back to Life - Division Bell.mp3",
  "../audios/files/audio/eng/6-8-2022/Pink Floyd - Hey You.mp3",
  "../audios/files/audio/eng/6-8-2022/Pink Floyd - Wish You Were Here.mp3",
  "../audios/files/audio/eng/6-8-2022/Pirates Of The Caribbean Theme Song _ The Indian Jam Project.mp3",
  "../audios/files/audio/eng/6-8-2022/Poets of the Fall - Carnival of Rust (Official Video).mp3",
  "../audios/files/audio/eng/6-8-2022/Queen - The Show Must Go On (Official Video).mp3",
  "../audios/files/audio/eng/6-8-2022/Sam Smith - I'm Not The Only One.mp3",

  "../audios/files/audio/eng/6-8-2022/Scorpions - Send Me An Angel.mp3",
  "../audios/files/audio/eng/6-8-2022/Scorpions - Still Loving You (Official Video).mp3",
  "../audios/files/audio/eng/6-8-2022/Scorpions - Wind Of Change.mp3",
  "../audios/files/audio/eng/6-8-2022/SEAL - Stand By Me.mp3",
  "../audios/files/audio/eng/6-8-2022/Shontelle - Impossible ( piano rap ).mp3",
  "../audios/files/audio/eng/6-8-2022/Stairway to Heaven Led Zeppelin Lyrics.mp3",
  "../audios/files/audio/eng/6-8-2022/Stand By Me, Ben E King, 1961.mp3",
  "../audios/files/audio/eng/6-8-2022/Survivor - Eye Of The Tiger (Rocky OST).mp3",
  "../audios/files/audio/eng/6-8-2022/The Pineapple Thief - 'The Final Thing On My Mind'.mp3",
  "../audios/files/audio/eng/6-8-2022/The Police - Every Breath You Take.mp3",

  /* 2nd Update- Sec-3*/
  "../audios/files/audio/oth/'Hey Kaala!' by Parvathy Baul.mp3",
  "../audios/files/audio/oth/'Kichhu Din Mone Mone' by Parvathy Baul.mp3",
  "../audios/files/audio/oth/'Moner Manush' - Anupam Roy Feat. Satyaki Banerjee & Babul Supriyo - Coke Studio MTV Season 4_(1280x720).mp3",
  "../audios/files/audio/oth/'Sri Choron Paabo' by Parvathy Baul.mp3",
  "../audios/files/audio/oth/A.R. Rahman - MTV Unplugged 2 - Nenjukulle.mp3",
  "../audios/files/audio/oth/A.R. Rahman - MTV Unplugged 2 - Rehna Tu.mp3",
  "../audios/files/audio/oth/A.R. Rahman - MTV Unplugged Season 2 - Ye Jo Des - YouTube.mp3",
  "../audios/files/audio/oth/Aamay Bhashaili Rey. Alamgir, Fariha Pervez.mp3",
  "../audios/files/audio/oth/Abaar Ashibo Phire (Full Video) Shankhachil _ Goutam Ghose _ Prosenjit _ Kushum _ Rupankar _ Antara.mp3",
  "../audios/files/audio/oth/Aigiri Nandini - AR Rahman - Album - Chaturbhujam.mp3",

  "../audios/files/audio/oth/Amar o Parano Jaha Chay Arijit Singh Rabindra Sangeet New Song 2015 YouTube 720p.mp3",
  "../audios/files/audio/oth/Amazing Carnatic music by Jayanthi Kumaresh _ Raga Shanmukhapriya _ Music of India(1).mp3",
  "../audios/files/audio/oth/ANANDADHARA BOHICHE BHUBANE SRIKANTA ACHARYA.mp3",
  "../audios/files/audio/oth/Anoushka Shankar - Metamorphosis  Traces Of You 2013.mp3",
  "../audios/files/audio/oth/AR Rehman_The Dichotomy of Fame.wmv.mp3",
  "../audios/files/audio/oth/Baaju Band Khul Khul Jaaye by Rita Ganguly __ Thumri Revisited __ Indian Classical Music.mp3",
  "../audios/files/audio/oth/Bho Shambho Shiva Shambho Swayambho - Shiva, the Adhi Yogi.mp3",
  "../audios/files/audio/oth/Bob Marley Bum Bhole Nath.mp3",
  "../audios/files/audio/oth/Deep Storytelling Hip Hop_Rap Beat -Confessions- (Prod. Contrary Beats) 2016.mp3",
  "../audios/files/audio/oth/Eki Labonye Purna Pran'o.....Ustad Rashid khan _ Nachiketa.mp3",

  "../audios/files/audio/oth/Ghorete Bhromor elo gunguniye.mp3",
  "../audios/files/audio/oth/Gopono kothati [Susheela Raman].mp3",
  "../audios/files/audio/oth/Hoyto Tomari Jonno - Rupankar.mp3",
  "../audios/files/audio/oth/Jhumoor - Papon, Dulal Manki _ Simantha Shekhar - Coke Studio @ MTV Season 3 - YouTube.mp3",
  "../audios/files/audio/oth/Jiyaah Naahi Laage by Rita Ganguly __ Thumri Revisited __ Indian Classical Music.mp3",
  "../audios/files/audio/oth/Kaise Khelun Main Hori by Rita Ganguly __ Thumri Revisited __ Indian Classical Music.mp3",
  "../audios/files/audio/oth/Mahishasura Mardini Stotram - Uma Mohan.mp3",
  "../audios/files/audio/oth/MONE PORE RUBY ROYR.D.BURMANRARE Solo Bengali Modern Song.mp3",
  "../audios/files/audio/oth/Moner Moto Pagol (Ramkumar Chattopadhyay).mp3",
  "../audios/files/audio/oth/Nirvana Shatakam.mp3",

  "../audios/files/audio/oth/Piya Ke Milan Ki Aas __ Thumris Of The Kirana Gharana __ Indian Classical Music.mp3",
  "../audios/files/audio/oth/Raag Bhairavi on Shehnai by Ustad Bismillah Khan.mp3",
  "../audios/files/audio/oth/Raga Yaman Bismillah Khan.mp3",
  "../audios/files/audio/oth/Ratri by Pota.mp3",
  "../audios/files/audio/oth/Shiva Tandav __ Kaun Hai Wo __ Kailash Kher __ Mounima.mp3",
  "../audios/files/audio/oth/Shiva Tandava Stotram(New version).mp3",
  "../audios/files/audio/oth/Sounds of Isha - Amla.mp3",
  "../audios/files/audio/oth/Sounds Of Isha - Bloom.mp3",
  "../audios/files/audio/oth/Sounds Of Isha - Shiva Panchakshara Stotram.mp3",

  "../audios/files/audio/oth/Sounds Of Isha -The Leap.mp3",
  "../audios/files/audio/oth/Wholeness.mp3",
];
thumbnails = [
  /* 2nd Update- Sec-1*/

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  /* 2nd Update- Sec-2*/

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  /*First Update Sec-1 */

  "../audios/files/image/thumb-wo.gif",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-wo.gif",

  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",

  "../audios/files/image/thumb-wo.gif",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",

  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-1.jpg",
  "../audios/files/image/thumb-wo.gif",
  "../audios/files/image/thumb-wo.gif",

  /*First Update Sec-2 */

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  /* 2nd Update- Sec-3*/
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",

  "../audios/files/image/b-butter.jpeg",
  "../audios/files/image/b-butter.jpeg",
];
trackArtists = [
  /* 2nd Update- Sec-1*/

  "Jhankar",
  "Jhankar",
  "Srikanta Acharya",
  "Sraboni Sen",
  "Rabindra Sangeet",
  "Rabindra Sangeet",
  "Sraboni Sen",
  "Sraboni Sen",
  "Sraboni Sen",
  "Sraboni Sen",

  "Sraboni Sen",
  "Shaan",
  "Rakhi Sarkar",
  "Sraboni Sen",
  "Sraboni Sen",
  "Sraboni Sen",
  "Rabindra Sangeet",
  "Rabindra Sangeet",
  "Sraboni Sen",
  "Sraboni Sen",

  "Sahana Bajpaie",
  "Sraboni Sen",
  "Shaan",
  "Dwijen Mukherjee",
  "Sraboni Sen",
  "Rabindra Sangeet",
  "Rabindra Sangeet",
  "Sraboni Sen",
  "Sraboni Sen",
  "Sraboni Sen",

  /* 2nd Update- Sec-2*/

  "Sraboni Sen",
  "Sraboni Sen",
  "Shaan",
  "Sraboni Sen",
  "Sraboni Sen",
  "Shaan",
  "Sraboni Sen",
  "Arnob",
  "Sraboni Sen",
  "Shaan",

  "Debadrito Chattopadhya",
  "Sraboni Sen",
  "Shaan",
  "Sraboni Sen",
  "Rabindra Sangeet",
  "Sraboni Sen",
  "Shaan",
  "Indranil Sen",
  "Rabindra Sangeet",
  "Shaan",

  "Sraboni Sen",
  "Shaan",
  "Shaan",
  "Sraboni Sen",
  "Shaan",
  "Sraboni Sen",
  "Rabindra Sangeet",

  /*First Update Sec-1 */

  "Miley Cyrus",
  "John Legend",
  "OneRepublic",
  "Nico & Vinz",
  "Coldplay",
  "Enrique Iglesias",
  "Sia",
  "Imagine Dragons",
  "Pharrel Williams",
  "Passenger",
  "Robert Lopez",
  "Luke Bryan",
  "Imagine Dragon",
  "A Great Big World",
  "Sam Smith",
  "One Direction",
  "Jason Derulo",
  "Miley Cyrus",
  "Drake | Wizkid | Kyla",
  "Fifth Harmony",
  "The Chainsmokers feat. Daya ",
  "Lukas Graham",
  "Mike Posner",
  "Zayn",
  "G-Eazy X Bebe Rexha",
  "Sia feat. Sean Paul",
  "Twenty One Pilots",
  "Charlie Puth",
  "Disturbed",
  "Major Lazer feat. Nyla",
  "Alan Walker",
  /*First Update Sec-2 */

  "Adele",
  "Adele",
  "Etta James",
  "Blue Foundation",
  "Bob Marley",
  "Bob Marley",
  "Broods",
  "Bryan Adams",
  "Chris Isaak",
  "David Gilmour",

  "Eagles",
  "Instrumental Music",
  "ENIGMA",
  "Evanescence",
  "Justin Timberlake",
  "Fleurie",
  "TIJP",
  "George Michael",
  "Gun's N' Roses",
  "Gun's N' Roses",

  "Infected Mushroom",
  "James Arthur",
  "James Arthur",
  "Jason Mraz",
  "John Lennon",
  "John Lennon",
  "Justin Bieber",
  "Instrumental Music",
  "Lionel Richie",
  "George Davidson",

  "Massive Attack",
  "Metallica",
  "Pink Floyd",
  "Pink Floyd",
  "Pink Floyd",
  "Pink Floyd",
  "TIJP",
  "Poets of the Fall",
  "Queen",
  "Sam Smith",

  "Scorpions",
  "Scorpions",
  "Scorpions",
  "SEAL",
  "Shontelle",
  "Led Zeppelin",
  "Ben E King",
  "Survivor",
  "TPT",
  "The Police",

  /* 2nd Update- Sec-3*/

  "Parvathy Baul",
  "Parvathy Baul",
  "Anupam Roy",
  "Parvathy Baul",
  "A.R. Rahman",
  "A.R. Rahman",
  "A.R. Rahman",
  "Alamgir, Fariha Pervez",
  "Rupankar",
  "A.R. Rahman",

  "Arijit Singh",
  "Jayanthi Kumaresh",
  "Srikanta Acharya",
  "Anoushka Shankar",
  "A.R. Rahman",
  "Rita Ganguly",
  "The Adhi Yogi",
  "Bob Marley",
  "Hip Hop Rap Beat",
  "Ustad Rashid khan, Nachiketa",

  "Taser Desh",
  "Susheela Raman",
  "Rupankar",
  "Coke Studio @ MTV",
  "Rita Ganguly",
  "Rita Ganguly",
  "Uma Mohan",
  "R.D. Barman",
  "Ramkumar Chattopadhyay",
  "Sounds of Isha",

  "Indian Classical",
  "Ustad Bismillah Khan",
  "Ustad Bismillah Khan",
  "Pota",
  "Kailash Kher",
  "Indian Devotional",
  "Sounds of Isha",
  "Sounds of Isha",
  "Sounds of Isha",

  "Sounds of Isha",
  "Sounds of Isha",
];

trackTitles = [
  /* 2nd Update- Sec-1*/
  "Amar Jabar Somoi",
  "Brozogopi Khele Gori",
  "Aaguner Parasmani",
  "Ami Tomar Songe Bedhechi",
  "EKTUKU CHOA",
  "JAKHAN PORBE NA MOR",
  "Aaj Dhaner Khete",
  "Aaj Jemon Kore Gaiche Aakash",
  "Aaji nahi nahi nidra",
  "Aamar Din Phuralo",

  "Aamar Raat Pohalo",
  "Adheko Ghume",
  "Agnishikha Esho Esho",
  "Aguner Parashmoni",
  "Akash Bhara",
  "Akashe Aaj Kon Charaner",
  "Amar Din Phuralo",
  "Amar Mallika Bone",
  "Amar Mukti Aloy Aloy",
  "Amaro Parano Jaha Chay",

  "Ami Bahu Bashonaye",
  "Ami Tarei Jani",
  "Ami Tomaro Sange",
  "Bani Tabo Dhay Ananta",
  "Baro Asha Kore",
  "Bhalobasi Bhalobasi",
  "Bhalobese Sakhi",
  "Bhenge Mor Gharer Chabi",
  "Darao Amar Ankhiro Aage",
  "Har mana har",
  /* 2nd Update- Sec-2*/

  "Jadi Tare Nai Chini Go",
  "Je Drubpad Deiocho Badhi",
  "Jete Jete Ekla Pathe",
  "Jete Jete Ekla Pathe",
  "Jharo Jharo Barishe",
  "Jonaki Ki Sukhe",
  "Madhur dhwani baje",
  "Majhe Majhe Tobo Dekha Pai",
  "Mamo Antaro Udase",
  "Megh Boleche Jabo Jabo",

  "Megh Boleche Jabo Jabo",
  "Nibir Ama Timir Hote",
  "Nitya Tomar Je Phool",
  "Ore Griho Bashi",
  "Phoole Phoole Dhole Dhole",
  "Pohalo Pohalo Bibhabari",
  "Prano Bhoriye",
  "Purano sei diner kotha",
  "Saghana Gahana Ratri",
  "Sei Bhalo Sei Bhalo",

  "Sokhi Bhabona Kahare Bale",
  "Sudhu Jaoya Asa",
  "Sudhu Tomar Bani",
  "Tobu mone rekho Sraboni Sen",
  "Tomar Khola Haowa",
  "Tumi Dak Diyecho",
  "Tumi Rabe Nirabe",

  /*First Update Sec-1 */

  "Adore You",
  "All OF Me",
  "Counting Stars",
  "Am I Wrong",
  "A Sky Full of Stars",
  "Bailando",
  "Chandelier",
  "Demons",
  "Happy",
  "Let Her Go",
  "Let It Go",
  "Play It Again",
  "Radioactive",
  "Say Something",
  "Stay With Me",
  "Story Of My Life",
  "Wiggle",
  "Wrecking Ball",
  "One Dance",
  "Work From Home",
  "Don't Let Me Down",
  "7 Years",
  "I Took A Pill In Ibiza",
  "Pillowtalk",
  "Me, Myself & I",
  "Cheap Thrills",
  "Ride",
  "One Call Away",
  "The Sound Of Silence",
  "Light It Up",
  "Faded",
  /*First Update Sec-2 */

  "Hello",
  "Someone like you",
  "At Last",
  "Eyes On Fire",
  "Is This Love",
  "One Love",
  "Sleep Baby Sleep",
  "Brothers Under the Sun",
  "Wicked Game",
  "Remember That Night",

  "Hotel California",
  "Emotional Beat",
  "Shadows in Silence",
  "My Immortal",
  "Five Hundred Miles",
  "Breathe",
  "Game of Thrones Theme",
  "Careless Whisper",
  "Knockin On Heavens Door",
  "November Rain",

  "Heavyweight",
  "Impossible",
  "Recovery",
  "I Won't Give Up",
  "Imagine",
  "Stand By Me",
  "I'll Show You",
  "Last of the mohicans",
  "LADY",
  "Mariage D'amour",

  "Teardrop",
  "Nothing else matter",
  "Another Brick In The Wall",
  "Coming Back to Life",
  "Hey You",
  "Wish You Were Here",
  "Pirates Of The Caribbean",
  "Carnival of Rust",
  "The Show Must Go On",
  "I'm Not The Only One",

  "Send Me An Angel",
  "Still Loving You",
  "Wind Of Change",
  "Stand By Me",
  "Impossible",
  "Stairway to Heaven",
  "Stand By Me",
  "Eye Of The Tiger",
  "The Final Thing On My Mind",
  "Every Breath You Take",

  /* 2nd Update- Sec-3*/

  "Hey Kaala",
  "Kichhu Din Mone Mone",
  "Moner Manush",
  "Sri Choron Paabo",
  "Nenjukulle",
  "Rehna Tu",
  "Ye Jo Des",
  "Aamay Bhashaili Rey",
  "Abaar Ashibo Phire",
  "Aigiri Nandini",

  "Amar o Parano Jaha Chay",
  "Amazing Carnatic music",
  "ANANDADHARA",
  "Metamorphosis",
  "The Dichotomy of Fame",
  "Baaju Band Khul Khul Jaaye",
  "Bho Shambho Shiva Shambho Swayambho",
  "Bum Bhole Nath",
  "Deep Storytelling",
  "Eki Labonye",

  "Ghorete Bhromor elo gunguniye",
  "Gopono kothati",
  "Hoyto Tomari Jonno",
  "Jhumoor",
  "Jiyaah Naahi Laage",
  "Kaise Khelun Main Hori",
  "Mahishasura Mardini Stotram",
  "MONE PORE RUBY ROY",
  "Moner Moto Pagol",
  "Nirvana Shatakam",

  "Piya Ke Milan Ki Aas",
  "Raag Bhairavi",
  "Raga Yaman",
  "Ratri",
  "Kaun Hai Wo",
  "Shiva Tandava Stotram",
  "Amla",
  "Bloom",
  "Shiva Panchakshara",

  "The Leap",
  "Wholeness",
];

var alllen = trackTitles.length;
for (var a = [], i = 0; i < alllen - 1; ++i) a[i] = i;
function shuffle(array) {
  var tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
}
a = shuffle(a);
var fin;
for (var d = 0; d < a.length; d++) {
  fin = a[d];
  document.getElementById("playbody").innerHTML +=
    "<div class='playcon' onclick='playsong(this)'><span class='ttitle'>" +
    trackTitles[fin] +
    "</span><br><span class='tartist'>" +
    trackArtists[fin] +
    "</span></div>";
  var now = fin;
}
track.src = tracks[now];
thumbnail.src = thumbnails[now];
background.src = thumbnails[now];

trackArtist.textContent = trackArtists[now];
trackTitle.textContent = trackTitles[now];

var playing = true;
function playsong(label) {
  var list = document.getElementsByClassName("playcon");
  list = [].slice.call(list);
  var pos = list.indexOf(label);
  var ttitle = document.getElementsByClassName("ttitle");
  var tartist = document.getElementsByClassName("tartist");
  var title = ttitle[pos].innerText;
  var artist = tartist[pos].innerText;
  for (var k = 0; k < alllen; k++) {
    if (title == String(trackTitles[k]) && artist == String(trackArtists[k])) {
      track.src = tracks[k];
      thumbnail.src = thumbnails[k];
      background.src = thumbnails[k];

      trackArtist.textContent = trackArtists[k];
      trackTitle.textContent = trackTitles[k];

      trackIndex = k;
      playing = true;
      pausePlay();
    }
  }
  document.getElementById("playbody").style.display = "none";
}

function pausePlay() {
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";

    thumbnail.style.transform = "scale(1.25)";

    track.play();
    playing = false;
  } else {
    pause.style.display = "none";
    play.style.display = "block";

    thumbnail.style.transform = "scale(1)";

    track.pause();
    playing = true;
  }
}

play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);

track.addEventListener("ended", nextTrack);

function nextTrack() {
  trackIndex++;
  if (trackIndex > tracks.length - 1) {
    trackIndex = 0;
  }

  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
  background.src = thumbnails[trackIndex];

  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];

  playing = true;
  pausePlay();
}

next.addEventListener("click", nextTrack);

function prevTrack() {
  trackIndex--;
  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }

  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
  background.src = thumbnails[trackIndex];

  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];

  playing = true;
  pausePlay();
}

prev.addEventListener("click", prevTrack);

function progressValue() {
  progressBar.max = track.duration;
  progressBar.value = track.currentTime;

  currentTime.textContent = formatTime(track.currentTime);
  durationTime.textContent = formatTime(track.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
  var minutes = Math.floor(sec / 60);
  var seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  track.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);
otplaylist.addEventListener("click", showallsongs);

function showallsongs() {
  var elem = document.getElementById("playbody");
  if (elem.style.display != "block") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}
