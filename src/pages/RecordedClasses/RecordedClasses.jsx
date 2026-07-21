import { useEffect, useState } from "react";
import RecordedClassCard from "./RecordedClassCard";

export default function RecordedClasses() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setClasses([
      {
        _id: "1",
        title: "React Complete Course",
        subject: "React",
        faculty: "Rahul",
      },
      {
        _id: "2",
        title: "Node.js Backend",
        subject: "Node.js",
        faculty: "Rahul",
      },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Recorded Classes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((item) => (
          <RecordedClassCard
            key={item._id}
            recordedClass={item}
          />
        ))}
      </div>
    </div>
  );
}