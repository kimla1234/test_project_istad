
// card
let card = [
    {
      title: "What is Cyber security ?",
      description:
        "Cybersecurity refers to the practice of protecting computer systems, networks ...",
      thumbnail: `https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png`,
      views: "1.7K",
    },
    {
      title: "What is WEB 3.0 ?",
      description: `Web 3.0, often referred to as the "Semantic Web," is a concept that ... `,
      thumbnail: `https://api.istad.co/media/image/eec0362f-380e-40f5-8799-56ca9b8cafb9.png`,
      views: "1.3K",
    },
    {
      title: "Join Official Telegram Channel",
      description:
        "Click above to receive updates, articles, or video shares on the latest and exclusive...",
      thumbnail: `https://api.istad.co/media/image/1e768a7f-873f-4bf2-8217-029f9bf6b12c.png`,
      views: "1.5K",
    },
    {
      title: "Flutter vs React Native",
      description: `Flutter and React Native are both popular frameworks for building cross-platform...`,
      thumbnail: `https://api.istad.co/media/image/aed02d47-329b-4493-89b9-56a93ed06946.png`,
      views: "1.4K",
    },
    {
      title: "Discussing Web 4",
      description: `As of my last knowledge update in January 2022, there is no widely... `,
      thumbnail: `https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg`,
      views: "1.2K",
    },
    {
      title: "Top Interesting Facts About C++",
      description:
        "Certainly! C++ is a powerful programming language with a rich history and... ",
      thumbnail: `https://api.istad.co/media/image/e391212d-aac5-460c-bd17-f95f468e4408.PNG`,
      views: "1.1K",
    },
  ];
  
  let SECTION = document.querySelector("#card");
  card.map((card) => {
    SECTION.innerHTML += ` 
    <div>
        <img src="${card.thumbnail}"
            class="block mx-auto">
        <p> ${card.title} </p>
    </div>
    `;
  });
  