import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Noman Naeem</title>
        <meta name="description" content="Noman Naeem's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.png" />
  
      </Head>
      <NavBar />
      <main className={styles.root}>
        <section className={styles.intro}>
          <div className={styles.introP}>
            <h2>Hello, I am Noman Naeem</h2> {/* Updated name */}
            <p>A skilled full-stack web developer from Rampur, Uttar Pradesh, India. Seeking a challenging full-time Software Engineering role to apply and enhance skills in a dynamic environment.</p> {/* Updated introduction */}
          </div>
          <Image className={styles.introImage} src='/prg.png' alt="Profile Image" width={300} height={300} /> {/* Updated image */}
        </section>
        <section className={styles.Experience} id="experience">
          <h2>Experience</h2>
          <div className={styles.exContainer}>
            <div className={styles.exp}>
              <h3>Software Engineering Intern</h3> {/* Updated job title */}
              <p style={{textDecoration:"underline"}}>Lobecho, Moradabad, Uttar Pradesh</p> {/* Updated location */}
              <p>Developed a dynamic theme technique for the Lobecho website using ReactJS and GitHub, enhancing user experience.</p>
            </div>
            <div className={styles.exp}>
              <h3>Full Stack Web Intern</h3> {/* Updated job title */}
              <p style={{textDecoration:"underline"}}>NullClass</p>
              <p>Built a dynamic photo sharing web-app from scratch, learning and implementing full-stack development skills under experienced mentors.</p>
            </div>
          </div>
        </section>
        <section className={styles.techStack} id="skills">
          <h2>Skills</h2>
          <div className={styles.techimages}>
            <img src="/react.png" alt="" />
            <img src="/next.png" alt="" />
            <img src="/express.png" alt="" />
            <img src="/mongodb.png" alt="" />
            <img src="/node.png" alt="" />
            <img src="/javascript.png" alt="" />
            <img src="/python.png" alt="" />
            <img src="/java.png" alt="" />
            <img src="/firebase.png" alt="" />
            <img src="/redux.png" alt="" />
            <img src="/tailwind.png" alt="" />
            <img src="/html.png" alt="" />
            <img src="/css.png" alt="" />
            <img src="/git.png" alt="" />
          </div>
        </section>
        <section className={styles.Projects} id="projects">
          <h2>Projects</h2>
          <div className={styles.projectContainer}>
            <div className={styles.project}>
              <h3>RelaxByte.com</h3>
              <p>Next.js-built tech blog and development platform featuring tutorials, guides, and tech news.</p>
              <p className={styles.tech}>Next.js, Redux, Firebase, MongoDB, Vercel</p>
              <a target="_blank" href="https://www.relaxbyte.com">Checkout!</a>
            </div>
            <div className={styles.project}>
              <h3>SarteLiving.com</h3>
              <p>Stylish portfolio website for a business client, built with Next.js and deployed on a shared server.</p>
              <p className={styles.tech}>Next.js, Vercel</p>
              <a target="_blank" href="https://www.sarteliving.com">Checkout!</a>
            </div>
            <div className={styles.project}>
              <h3>House Price Prediction</h3>
              <p>Utilizes machine learning algorithms to forecast property selling prices based on factors like location, size, amenities, and market trends.</p>
              <p className={styles.tech}>Python - [NumPy, Pandas, Scikit-learn]</p>
            </div>
            <div className={styles.project}>
              <h3>Binary Converter</h3>
              <p>A Binary Converter in Swing Java is a user-friendly interface allowing binary,decimal,octal,hexadecimal conversion presenting results in desired format</p>
              <p className={styles.tech}>Java (Swing) </p>
            </div>
            <div className={styles.project}>
              <h3>StudyMania</h3>
              <p>StudyMania is a platform built using React.js and Firebase that allows students to share and access notes in various formats such as PDF, Word, PPT, etc. Users can upload, download, and collaborate on study materials, making learning more interactive and convenient.</p>
              <p className={styles.tech}>Reactjs, Firebase, Netlify </p>
              <a target="_blank" href="https://studymania.netlify.app">Checkout!</a>
            </div>
            <div className={styles.project}>
              <h3>ToDoList</h3>
              <p>ToDoList is a mobile app developed using React Native that helps users manage tasks by creating and updating them with status indicators like "done" or "not done." It provides a simple and intuitive interface for organizing tasks, improving productivity and task management on the go.</p>
              <p className={styles.tech}>React Native </p>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Copyright © Noman Naeem 2024</p> {/* Updated name */}
      </footer>
    </>
  );
}
