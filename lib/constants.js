// src/lib/constants.js
export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@JunaidHussainMadina',
  youtubeSubscribe: 'https://www.youtube.com/@JunaidHussainMadina?sub_confirmation=1',
  instagram: 'https://www.instagram.com/junaidhussainmadina/',
  facebook: 'https://www.facebook.com/JunaidHussainMadina/',
  email: 'mailto:contact@junaidhussain.com',
  phone: 'tel:+966XXXXXXXXX'
}

export const NAV_ITEMS = [
  { name: 'Home', href: '/', icon: 'Home' },
  { name: 'About', href: '/about', icon: 'User' },
  { name: 'Videos', href: '/#videos', icon: 'PlayCircle' },
  { name: 'Blogs', href: '/blogs', icon: 'BookOpen' },
  { name: 'Contact', href: '/contact', icon: 'Mail' },
]

export const VIDEOS = {
  mostViewed: [
    {
      id: 1,
      title: 'Understanding Ramadan for Young Muslims',
      description: 'A complete guide to fasting and worship for young believers',
      thumbnail: 'https://images.unsplash.com/photo-1519146722175-9a7f7702f78e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: '1,200,000',
      likes: '85,000',
      duration: '15:42',
      date: '2 weeks ago',
      url: 'https://youtube.com/watch?v=example1',
      category: 'Ramadan'
    },
    {
      id: 2,
      title: '5 Daily Prayers Simplified',
      description: 'Step-by-step guide to perfect your Salah',
      thumbnail: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: '950,000',
      likes: '72,000',
      duration: '22:18',
      date: '1 month ago',
      url: 'https://youtube.com/watch?v=example2',
      category: 'Prayer'
    },
    {
      id: 3,
      title: 'Stories of the Prophets - Prophet Muhammad (PBUH)',
      description: 'Beautiful stories from the life of our beloved Prophet',
      thumbnail: 'https://images.unsplash.com/photo-1594818379494-675b4c8e3818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: '2,300,000',
      likes: '120,000',
      duration: '45:30',
      date: '3 months ago',
      url: 'https://youtube.com/watch?v=example3',
      category: 'Prophets'
    },
    {
      id: 4,
      title: 'Quran Memorization Techniques',
      description: 'Effective methods for young Hafiz-to-be',
      thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: '750,000',
      likes: '58,000',
      duration: '18:45',
      date: '2 months ago',
      url: 'https://youtube.com/watch?v=example4',
      category: 'Quran'
    }
  ],
  latest: [
    {
      id: 5,
      title: 'Friday Khutbah for Youth',
      description: 'Special message for the young generation',
      thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: '150,000',
      likes: '12,000',
      duration: '25:10',
      date: '3 days ago',
      url: 'https://youtube.com/watch?v=example5',
      category: 'Friday'
    },
    {
      id: 6,
      title: 'Islamic Etiquette for Social Media',
      description: 'How to be a good Muslim online',
      thumbnail: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: '210,000',
      likes: '18,000',
      duration: '20:35',
      date: '1 week ago',
      url: 'https://youtube.com/watch?v=example6',
      category: 'Social Media'
    },
    {
      id: 7,
      title: 'Madina Tour: Places of Historical Significance',
      description: 'Virtual tour of holy sites in Madina',
      thumbnail: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: '380,000',
      likes: '32,000',
      duration: '32:45',
      date: '2 weeks ago',
      url: 'https://youtube.com/watch?v=example7',
      category: 'Madina'
    },
    {
      id: 8,
      title: 'Q&A with Young Muslims',
      description: 'Answering questions from our young viewers',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: '290,000',
      likes: '24,000',
      duration: '28:20',
      date: '4 days ago',
      url: 'https://youtube.com/watch?v=example8',
      category: 'Q&A'
    }
  ]
}

export const BLOGS = [
  {
    id: 1,
    title: 'The Importance of Seeking Knowledge in Islam',
    excerpt: 'Learn why education is emphasized in Islam and how young Muslims can benefit from seeking knowledge both religious and worldly...',
    content: 'Full article content goes here...',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Education',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    author: 'Junaid Hussain',
    tags: ['Knowledge', 'Education', 'Islam']
  },
  {
    id: 2,
    title: 'Balancing Studies and Worship: A Guide for Students',
    excerpt: 'Practical tips for Muslim students to maintain academic excellence while fulfilling religious duties and spiritual growth...',
    content: 'Full article content goes here...',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Student Life',
    date: 'Mar 10, 2024',
    readTime: '6 min read',
    author: 'Junaid Hussain',
    tags: ['Student', 'Balance', 'Worship']
  },
  {
    id: 3,
    title: 'The Power of Morning Remembrance',
    excerpt: 'Start your day with the remembrance of Allah and see the blessings unfold in your daily life through consistent dhikr...',
    content: 'Full article content goes here...',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Spirituality',
    date: 'Mar 5, 2024',
    readTime: '4 min read',
    author: 'Junaid Hussain',
    tags: ['Dhikr', 'Morning', 'Spiritual']
  },
  {
    id: 4,
    title: 'Modern Dawah: Using Social Media for Good',
    excerpt: 'How young Muslims can use social media platforms to spread authentic Islamic knowledge and positive influence...',
    content: 'Full article content goes here...',
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Technology',
    date: 'Feb 28, 2024',
    readTime: '7 min read',
    author: 'Junaid Hussain',
    tags: ['Social Media', 'Dawah', 'Technology']
  },
  {
    id: 5,
    title: 'Understanding Zakat for Young Earners',
    excerpt: 'A simplified guide to Zakat for young Muslims who are starting their careers and want to fulfill this important pillar...',
    content: 'Full article content goes here...',
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Finance',
    date: 'Feb 20, 2024',
    readTime: '8 min read',
    author: 'Junaid Hussain',
    tags: ['Zakat', 'Finance', 'Charity']
  },
  {
    id: 6,
    title: 'The Beauty of Patience in Difficult Times',
    excerpt: 'Learning sabr (patience) through the teachings of Quran and Sunnah when facing challenges and hardships...',
    content: 'Full article content goes here...',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Character',
    date: 'Feb 15, 2024',
    readTime: '5 min read',
    author: 'Junaid Hussain',
    tags: ['Patience', 'Sabr', 'Character']
  }
]

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Madina Mosque',
    title: 'The Prophet\'s Mosque',
    description: 'A beautiful view of Masjid an-Nabawi at sunset'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1519146722175-9a7f7702f78e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Quran Study Session',
    title: 'Youth Quran Circle',
    description: 'Teaching Quran to young students at Madina University'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Content Creation',
    title: 'Recording Session',
    description: 'Creating Islamic content for YouTube channel'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Community Gathering',
    title: 'Community Event',
    description: 'Organizing Islamic events for youth in Madina'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Madina Streets',
    title: 'Streets of Madina',
    description: 'Walking through the blessed city near the mosque'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Teaching Session',
    title: 'Islamic Class',
    description: 'Teaching Islamic studies to children'
  }
]

export const STATS = [
  {
    id: 1,
    value: 125000,
    suffix: '+',
    label: 'YouTube Subscribers',
    icon: 'Youtube',
    color: 'text-red-500'
  },
  {
    id: 2,
    value: 5300000,
    suffix: '+',
    label: 'Total Views',
    icon: 'Eye',
    color: 'text-secondary'
  },
  {
    id: 3,
    value: 58000,
    suffix: '+',
    label: 'Instagram Followers',
    icon: 'Instagram',
    color: 'text-pink-500'
  },
  {
    id: 4,
    value: 32000,
    suffix: '+',
    label: 'Facebook Followers',
    icon: 'Facebook',
    color: 'text-blue-500'
  }
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ahmed R.',
    role: 'University Student',
    content: 'Junaid\'s videos have helped me understand Islam in a way that resonates with my generation. May Allah bless him!',
    rating: 5,
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Fatima K.',
    role: 'High School Student',
    content: 'As a young Muslim girl, I find Junaid\'s content very respectful and educational. He explains complex topics simply.',
    rating: 5,
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Omar S.',
    role: 'Parent',
    content: 'My children love watching Junaid\'s videos. They\'re learning about Islam in a safe, engaging way.',
    rating: 5,
    date: '3 weeks ago'
  }
]

export const COURSES = [
  {
    id: 1,
    title: 'Quran for Beginners',
    description: 'Learn to read Quran with proper tajweed',
    duration: '4 weeks',
    lessons: 12,
    level: 'Beginner',
    enrolled: 1500
  },
  {
    id: 2,
    title: 'Islamic Manners',
    description: 'Learn proper Islamic etiquette and manners',
    duration: '2 weeks',
    lessons: 8,
    level: 'All Levels',
    enrolled: 2300
  },
  {
    id: 3,
    title: 'Prophet Stories',
    description: 'Stories of the prophets for children',
    duration: '6 weeks',
    lessons: 18,
    level: 'Beginner',
    enrolled: 3100
  }
]

export const FAQS = [
  {
    question: 'How old is Junaid Hussain?',
    answer: 'Junaid Hussain is 12 years old and currently studying at Madina University while creating Islamic content.'
  },
  {
    question: 'Where is he located?',
    answer: 'He is based in Madinah, Saudi Arabia, studying at the prestigious Madina University.'
  },
  {
    question: 'What type of content does he create?',
    answer: 'He creates Islamic educational content focusing on Quran, Sunnah, youth guidance, and modern challenges.'
  },
  {
    question: 'How often does he upload videos?',
    answer: 'He uploads new videos weekly, with additional content on social media platforms.'
  },
  {
    question: 'Is the content suitable for all ages?',
    answer: 'Yes, his content is family-friendly and suitable for viewers of all ages, especially youth.'
  }
]

export const TIMELINE = [
  {
    year: 2020,
    title: 'Started YouTube Channel',
    description: 'Began creating Islamic content at age 9'
  },
  {
    year: 2021,
    title: 'First Viral Video',
    description: 'Reached 1 million views on Ramadan guide'
  },
  {
    year: 2022,
    title: 'Enrolled at Madina University',
    description: 'Started formal Islamic studies'
  },
  {
    year: 2023,
    title: '100K Subscribers',
    description: 'Built community of 100,000+ viewers'
  },
  {
    year: 2024,
    title: 'International Recognition',
    description: 'Featured in Islamic conferences worldwide'
  }
]