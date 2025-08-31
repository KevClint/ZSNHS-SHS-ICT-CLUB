//Repeated things in teachers and officers
document.addEventListener("DOMContentLoaded", () => {
  const officers = [
    {name: "Mr. Edilmer Balbutin", role: "Club Adviser", img: "1.webp"},
    {name: "Mr. Adonis Pilongo", role: "Teacher", img: "2.webp"},
    {name: "Mr. Marjun Dela Rama", role: "Teacher", img: "3.webp"},
    {name: "Mr. Ariel Magsayon", role: "Teacher", img: "4.webp"},
    {name: "Mr. Marc Louie Jay Aniez", role: "Teacher", img: "5.webp"},
    {name: "Clint Justine Lorenzo", role: "President", img: "6.webp"},
    {name: "Antonio Jr. Soriano", role: "Vice President", img: "7.webp"},
    {name: "James Rhein Monton", role: "Secretary", img: "8.webp"},
    {name: "Gilbert Dumandos", role: "Treasurer", img: "9.webp"},
    {name: "Princes Divine Cantona", role: "Auditor", img: "10.webp"},
    {name: "Jhon Louie Semilla", role: "P.I.O", img: "11.webp"},
    {name: "Lee Martin Rosalim", role: "P.I.O", img: "12.webp"},
    {name: "Christian Paul Estrera", role: "Media Officer", img: "13.webp"},
    {name: "James Mark Cascajo", role: "Media Officer", img: "14.webp"},
    {name: "Althea Marie Pacoy", role: "Media Officer", img: "15.webp"},
    {name: "Vynnor Canacan", role: "Media Officer", img: "16.webp"},
    {name: "Jance Handugan", role: "Media Officer", img: "17.webp"},
    {name: "Princess Lavia Novela", role: "Media Officer", img: "18.webp"},
    {name: "Philip Joshua Enguito", role: "Representative", img: "19.webp"}
  ];

  const container = document.getElementById("officers-container");

  officers.forEach((officer) => {
    container.innerHTML += `
      <article class="card-off" role="group" aria-label="${officer.name} - ${officer.role}">
        <div class="avatar">
          <img loading="lazy" src="/assets/images/teachers-officers/${officer.img}" alt="${officer.name}" />
        </div>
        <div class="meta">
          <p class="name">${officer.name}</p>
          <p class="role">${officer.role}</p>
        </div>
      </article>
    `;
  });

  console.log("Nag load naba o nag load naba, bwesit Script loaded!");
});
