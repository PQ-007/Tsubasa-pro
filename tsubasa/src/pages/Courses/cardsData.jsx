import React, { useState } from "react";


const cardsData = [
  {
    id: 1,
    title: "Хичээл 1",
    description: "Туршилтын хичээл",
    lessons: 12,
    quizzes: 7,
    author: "Соронзонболд",
    category: "Category A",
  },
  {
    id: 2,
    title: "Хичээл 2",
    description: "Үйлдлийн систем",
    lessons: 10,
    quizzes: 5,
    author: "Золзаяа",
    category: "Category B",
  },
  {
    id: 3,
    title: "Хичээл 3",
    description: "Дискрет",
    lessons: 5,
    quizzes: 4,
    author: "Мөнхбат",
    category: "Category C",
  },
  {
    id: 4,
    title: "Хичээл 4",
    description: "Сүлжээний архитектур",
    lessons: 6,
    quizzes: 2,
    author: "Мөнхбаяр",
    category: "Category A",
  },
  {
    id: 5,
    title: "Хичээл 5",
    description: "Хэрэглээний математик",
    lessons: 6,
    quizzes: 2,
    author: "Мөнхбат",
    category: "Category A",
  },
  {
    id: 6,
    title: "Хичээл 6",
    description: "Хэрэглээний физик",
    lessons: 5,
    quizzes: 4,
    author: "Золбадрал",
    category: "Category C",
  },
  {
    id: 7,
    title: "Хичээл 7",
    description: "Япон хэл",
    lessons: 5,
    quizzes: 4,
    author: "Оюунчимэг",
    category: "Category B",
  },
  {
    id: 6,
    title: "Хичээл 8",
    description: "Англи хэл",
    lessons: 5,
    quizzes: 4,
    author: "Даваа",
    category: "Category C",
  },
  
];

const FilterableCards = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const categories = ["All", "Category A", "Category B", "Category C"];

  const filteredCards = cardsData.filter((card) => {
    const matchesCategory =
      selectedCategory === "All" || card.category === selectedCategory;
    const matchesSearch =
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="p-4">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-full border transition ${
              selectedCategory === category
                ? "bg-blue-50 text-blue-500 border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow p-4 border border-gray-200 cursor-pointer"
            onClick={() => handleCardClick(card)}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>
                {card.lessons} lessons · {card.quizzes} quizzes
              </p>
              <p>{card.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Card Content */}
      {selectedCard && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold">{selectedCard.title}</h2>
          <p className="mt-2">{selectedCard.content}</p>
        </div>
      )}
    </div>
  );
};

export default FilterableCards;
