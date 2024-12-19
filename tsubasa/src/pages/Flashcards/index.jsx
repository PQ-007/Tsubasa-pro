import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FlashcardPage = () => {
  const navigate = useNavigate();
  const [studySets, setStudySets] = useState([
    {
      id: 1,
      title: "React Basics",
      cards: [
        {
          id: 1,
          question: "What is React?",
          answer: "A JavaScript library for building user interfaces",
        },
        {
          id: 2,
          question: "What is JSX?",
          answer: "A syntax extension for JavaScript",
        },
      ],
    },
  ]);
  const [activeSet, setActiveSet] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [newSetTitle, setNewSetTitle] = useState("");
  const [newCard, setNewCard] = useState({ question: "", answer: "" });
  const [showNewCardForm, setShowNewCardForm] = useState(false);

  const handleBack = () => {
    navigate("/my-courses");
  };

  const handleCreateSet = () => {
    if (!newSetTitle.trim()) return;
    setStudySets([
      ...studySets,
      { id: Date.now(), title: newSetTitle, cards: [] },
    ]);
    setNewSetTitle("");
  };

  const handleAddCard = () => {
    if (!newCard.question.trim() || !newCard.answer.trim()) return;
    const updatedSets = studySets.map((set) =>
      set.id === activeSet.id
        ? {
            ...set,
            cards: [...set.cards, { ...newCard, id: Date.now() }],
          }
        : set
    );
    setStudySets(updatedSets);
    setNewCard({ question: "", answer: "" });
    setShowNewCardForm(false);
  };

  const handleDeleteCard = (cardId) => {
    const updatedSets = studySets.map((set) =>
      set.id === activeSet.id
        ? {
            ...set,
            cards: set.cards.filter((card) => card.id !== cardId),
          }
        : set
    );
    setStudySets(updatedSets);
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={handleBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Flashcards</h1>
      </div>

      {!activeSet ? (
        <div>
          <div className="mb-6 flex gap-4">
            <Input
              value={newSetTitle}
              onChange={(e) => setNewSetTitle(e.target.value)}
              placeholder="New study set title..."
              className="max-w-xs"
            />
            <Button onClick={handleCreateSet}>
              <Plus className="h-4 w-4 mr-2" /> Create Set
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studySets.map((set) => (
              <div
                key={set.id}
                className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveSet(set)}
              >
                <h3 className="font-medium mb-2">{set.title}</h3>
                <p className="text-sm text-gray-600">
                  {set.cards.length} cards
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-medium">{activeSet.title}</h2>
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setShowNewCardForm(!showNewCardForm)}
              >
                <Plus className="h-4 w-4 mr-2" /> Add Card
              </Button>
              <Button variant="outline" onClick={() => setActiveSet(null)}>
                Back to Sets
              </Button>
            </div>
          </div>

          {showNewCardForm && (
            <div className="mb-6 p-4 border rounded-lg">
              <div className="space-y-4">
                <Input
                  value={newCard.question}
                  onChange={(e) =>
                    setNewCard({ ...newCard, question: e.target.value })
                  }
                  placeholder="Question"
                />
                <Input
                  value={newCard.answer}
                  onChange={(e) =>
                    setNewCard({ ...newCard, answer: e.target.value })
                  }
                  placeholder="Answer"
                />
                <Button onClick={handleAddCard}>Add Card</Button>
              </div>
            </div>
          )}

          {activeSet.cards.length > 0 ? (
            <div className="flex flex-col items-center">
              <div
                className={`relative w-[300px] h-[200px] cursor-pointer transition-transform duration-700 ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className="absolute inset-0 backface-hidden">
                  <div className="h-full border rounded-lg p-4 flex items-center justify-center text-center">
                    {activeSet.cards[currentCard].question}
                  </div>
                </div>
                <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden">
                  <div className="h-full border rounded-lg p-4 flex items-center justify-center text-center">
                    {activeSet.cards[currentCard].answer}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <Button
                  variant="outline"
                  onClick={() =>
                    setCurrentCard(
                      (prev) =>
                        (prev - 1 + activeSet.cards.length) %
                        activeSet.cards.length
                    )
                  }
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    setCurrentCard(
                      (prev) => (prev + 1) % activeSet.cards.length
                    )
                  }
                >
                  Next
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600">
              No cards yet. Add some cards to get started!
            </p>
          )}

          <div className="mt-8">
            <h3 className="font-medium mb-4">All Cards</h3>
            <div className="space-y-4">
              {activeSet.cards.map((card) => (
                <div
                  key={card.id}
                  className="border rounded-lg p-4 flex justify-between items-start"
                >
                  <div>
                    <p className="font-medium mb-2">{card.question}</p>
                    <p className="text-gray-600">{card.answer}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteCard(card.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardPage;
