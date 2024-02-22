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
  <div class="h-full border-gray-200 bg-white shadow  border-opacity-60 rounded-lg overflow-hidden p-3">
  <img class="h-48 w-full rounded-lg object-cover object-center" src="${card.thumbnail}">
  <div class="p-6">
    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">NEWS</h2>
    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${card.title}</h1>
    <p class="leading-relaxed mb-3">
      ${card.description}
    </p>
    <div class="flex items-center justify-between flex-wrap">
                <a href="../DocumentPage/document_page.html" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    ${card.views}
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                </span>
            </div>
        </div>
    </div>
    
  `;
});
