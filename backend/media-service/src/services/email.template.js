export const welcomeTemplate = (name) => ({
  subject: "Welcome to CodeYaan 🎉",
  html: `
    <h2>Hi ${name},</h2>
    <p>Welcome to <b>CodeYaan</b> 🚀</p>
  `,
});

export const courseTemplate = (course) => ({
  subject: "Course Enrolled 🚀",
  html: `
    <h2>Congratulations!</h2>
    <p>You enrolled in <b>${course}</b></p>
  `,
});

export const profileTemplate = () => ({
  subject: "Profile Updated",
  html: `
    <p>Your profile updated successfully ✅</p>
  `,
});