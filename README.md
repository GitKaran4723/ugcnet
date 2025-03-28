# UGC NET Paper 1 Platform


# 🎓 UGC NET Paper 1 – Dynamic Course Platform


This is a **personal learning and sharing platform** for UGC NET Paper 1, built by an educator who cleared the NET (CSE) **on the first attempt**. It dynamically loads notes and video lectures from GitHub and is designed to scale for many subjects and topics.

---

## ✨ Features

- 📱 Fully responsive for mobile and desktop
- 🎥 Video lectures grouped by chapter
- 📚 Notes written in markdown, rendered beautifully
- 🎨 Traditional Indian color theme (Saffron, Maroon, Turmeric, Leaf Green)
- 🔄 Easily updatable via GitHub
- 🚀 Hosted on GitHub Pages

---

## 📁 Project Structure

ugcnet-platform/ 
├── index.html # Homepage 
├── note.html # Dynamic note viewer (markdown rendering) 
├── videos.html # Organized video lectures 
├── /data/ 
│ ├── notes.json # Notes metadata 
│ └── videos.json # Video metadata 
├── /js/ 
│ └── main.js # JavaScript for homepage dynamic loading 
├── /css/ 
│ └── style.css # Custom styles 
├── /assets/images/ # Logo, banner, profile, badge 
└── README.md


---

## 🛠 How to Use

1. **Add/Update Notes**
   - Write your notes in `.md` format.
   - Upload them to your GitHub repo.
   - Update `data/notes.json` with the structure:

     ```json
     {
       "chapter": "Teaching Aptitude",
       "files": [
         {
           "title": "Nature of Teaching",
           "url": "https://raw.githubusercontent.com/..."
         }
       ]
     }
     ```

2. **Add/Update Videos**
   - Upload videos to YouTube.
   - Add them to `data/videos.json`:

     ```json
     {
       "chapter": "Research Aptitude",
       "videos": [
         {
           "title": "Types of Research",
           "url": "https://www.youtube.com/embed/..."
         }
       ]
     }
     ```

3. **Push changes**
   - Commit your updates and push to GitHub.
   - Your platform will auto-update!

---

## 🌐 Deployment

This site is hosted via **GitHub Pages**:

1. Go to your GitHub repo → Settings → Pages
2. Set branch: `main` or `master` and folder: `/root`
3. Your site will be live at:


https://Gitkaran4723.github.io/ugcnet/


---

## 📌 Upcoming Features

- 🔐 Paid course access (Razorpay / Firebase)
- 🔍 Search/filter for notes and videos
- 📦 Subject switcher (e.g., CSE Paper 2, Sociology)
- 📝 Contact & query form

---

## 🙌 Author

Made with ❤️ by Karan Jadhav  
NET Qualified (CSA) | Educator | Developer
#   u g c n e t 
 
 
