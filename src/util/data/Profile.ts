export const Profile = {
    email: 'maelferi04@gmail.com',
    github: 'https://github.com/Shawiizz',
    githubUsername: 'Shawiizz',
    linkedin: 'https://www.linkedin.com/in/ma%C3%ABl-feri-2b2177251/',
    birthYear: 2004,
    location: 'Lyon, France',
    cvUrl: '/cv.pdf',
    startYear: 2019,
    school: 'CPE Lyon',
}

export const getAge = () => new Date().getFullYear() - Profile.birthYear
