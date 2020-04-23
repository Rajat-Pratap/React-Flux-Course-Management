var courses = [
  {
    title: "course1",
    authorId: 123,
    category: "Study",
    id: 1,
    slug: "course1",
  },
  {
    title: "course2",
    authorId: 456,
    category: "Study",
    id: 2,
    slug: "course2",
  },
  {
    title: "course3",
    authorId: 789,
    category: "Study",
    id: 3,
    slug: "course3",
  },
  {
    title: "course4",
    authorId: 234,
    category: "Study",
    id: 4,
    slug: "course4",
  },
  {
    title: "course5",
    authorId: 345,
    category: "Study",
    id: 5,
    slug: "course5",
  },
];

function getCourses() {
  return courses;
}

function setCourses(course) {
  courses = [...courses, course];
}

module.exports = { getCourses, setCourses };
