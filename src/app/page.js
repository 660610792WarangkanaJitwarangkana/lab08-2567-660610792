import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";

export default function Home() {

  const Tasks = [
  {id: 1, title: "Read a book", isDone: true},
  {id: 2, title: "Take a shower", isDone: true},
  {id: 3, title: "Sleep", isDone: true}
  ]

  return (
    // Main container
    <div className="container mx-auto">
      
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
      
        {/* task input */}
        <TaskInput />

        {/* task */}
        <Task {...Tasks[0]} />
        {/* task */}
        <Task {...Tasks[1]} />
        {/* task */}
        <Task {...Tasks[2]} />
      </div>

      {/* //footer section */}
      <Footer name="Warangkana Jitwarangkana" code="660610792"/>
    </div>
  );
}
