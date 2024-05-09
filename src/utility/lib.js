export const studentQuery = `*[_type == "student"]{
    name,
    email,
    idNum,
    gender,
    role,
    _id
} `

export const courseQuery = `*[_type == "course"]{
    name,
    code,
    description
}`