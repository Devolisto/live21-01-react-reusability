import instructors from "../instructors";
import Instructors from "./Instructors";

const InstructorTag = () => {
  // Create the InstructorTag component here
  const instructorTag = instructors.map(instructor => {
    return <Instructors key={instructor.id} instructor={instructor}/>
  })
  return <>{instructorTag}</>;
};

export default InstructorTag;
