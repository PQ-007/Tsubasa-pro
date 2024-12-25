import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, ArrowLeft, X, Shuffle, Edit2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

const cardContainerStyles = "relative perspective-1000 w-full h-[400px]";
const cardStyles =
  "absolute inset-0 w-full h-full transform-style-3d transition-transform duration-500 cursor-pointer";
const cardFaceStyles =
  "absolute inset-0 w-full h-full backface-hidden flex items-center justify-center p-6 rounded-xl shadow-lg";

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
  const [studyMode, setStudyMode] = useState("learn");
  const [userAnswer, setUserAnswer] = useState("");
  const [completedCards, setCompletedCards] = useState(new Set());
  const [editingCard, setEditingCard] = useState(null);
  const [bulkUploadOpen, setBulkUploadOpen] = useState(false);
  const [bulkText, setBulkText] = useState("");

  const progress = activeSet
    ? (completedCards.size / activeSet.cards.length) * 100
    : 0;

  const handleBack = () => {
    navigate("/my-courses");
  };

  const handleCreateSet = () => {
    if (!newSetTitle.trim()) return;

    const newSet = {
      id: Date.now(),
      title: newSetTitle,
      cards: [],
    };

    setStudySets((prevSets) => [...prevSets, newSet]);
    setNewSetTitle("");
  };

  const handleAddCard = () => {
    if (!newCard.question.trim() || !newCard.answer.trim()) return;

    setStudySets((prevSets) =>
      prevSets.map((set) =>
        set.id === activeSet.id
          ? {
              ...set,
              cards: [...set.cards, { ...newCard, id: Date.now() }],
            }
          : set
      )
    );

    setActiveSet((prevSet) => ({
      ...prevSet,
      cards: [...prevSet.cards, { ...newCard, id: Date.now() }],
    }));

    setNewCard({ question: "", answer: "" });
    setShowNewCardForm(false);
  };

  const handleDeleteCard = (cardId) => {
    setStudySets((prevSets) =>
      prevSets.map((set) =>
        set.id === activeSet.id
          ? {
              ...set,
              cards: set.cards.filter((card) => card.id !== cardId),
            }
          : set
      )
    );

    setActiveSet((prevSet) => ({
      ...prevSet,
      cards: prevSet.cards.filter((card) => card.id !== cardId),
    }));
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setCompletedCards(
        (prev) => new Set([...prev, activeSet.cards[currentCard].id])
      );
    }
  };

  const handleShuffle = () => {
    const updatedSets = studySets.map((set) =>
      set.id === activeSet.id
        ? {
            ...set,
            cards: [...set.cards].sort(() => Math.random() - 0.5),
          }
        : set
    );
    setStudySets(updatedSets);
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const handleBulkUpload = () => {
    if (!bulkText.trim()) return;

    const newCards = bulkText
      .split("\n")
      .filter((line) => line.includes("|"))
      .map((line) => {
        const [question, answer] = line.split("|").map((str) => str.trim());
        return {
          id: Date.now() + Math.random(),
          question,
          answer,
        };
      });

    if (newCards.length === 0) return;

    setStudySets((prevSets) =>
      prevSets.map((set) =>
        set.id === activeSet.id
          ? {
              ...set,
              cards: [...set.cards, ...newCards],
            }
          : set
      )
    );

    setActiveSet((prevSet) => ({
      ...prevSet,
      cards: [...prevSet.cards, ...newCards],
    }));

    setBulkText("");
    setBulkUploadOpen(false);
  };

  const handleEditCard = (cardId, updatedCard) => {
    setStudySets((prevSets) =>
      prevSets.map((set) =>
        set.id === activeSet.id
          ? {
              ...set,
              cards: set.cards.map((card) =>
                card.id === cardId ? { ...card, ...updatedCard } : card
              ),
            }
          : set
      )
    );

    setActiveSet((prevSet) => ({
      ...prevSet,
      cards: prevSet.cards.map((card) =>
        card.id === cardId ? { ...card, ...updatedCard } : card
      ),
    }));

    setEditingCard(null);
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={() => navigate("/my-courses")}>
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
              <Select value={studyMode} onValueChange={setStudyMode}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="learn">Learn Mode</SelectItem>
                  <SelectItem value="test">Test Mode</SelectItem>
                  <SelectItem value="review">Review Mode</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={handleShuffle}>
                <Shuffle className="h-4 w-4 mr-2" /> Shuffle
              </Button>
              <Button variant="outline" onClick={() => setBulkUploadOpen(true)}>
                <Upload className="h-4 w-4 mr-2" /> Bulk Upload
              </Button>
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
              <div className="max-w-2xl mx-auto">
                <div className={cardContainerStyles}>
                  <div
                    className={`${cardStyles} ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                    onClick={handleFlip}
                  >
                    {/* Front of Card */}
                    <div className={`${cardFaceStyles} bg-white`}>
                      <p className="text-xl text-center">
                        {activeSet.cards[currentCard].question}
                      </p>
                    </div>

                    {/* Back of Card */}
                    <div
                      className={`${cardFaceStyles} bg-blue-50 rotate-y-180`}
                    >
                      <p className="text-xl text-center">
                        {activeSet.cards[currentCard].answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-between mt-6 gap-4">
                  <Button
                    onClick={() =>
                      setCurrentCard(
                        (prev) =>
                          (prev - 1 + activeSet.cards.length) %
                          activeSet.cards.length
                      )
                    }
                    disabled={activeSet.cards.length <= 1}
                  >
                    Previous Card
                  </Button>
                  <Button
                    onClick={() =>
                      setCurrentCard(
                        (prev) => (prev + 1) % activeSet.cards.length
                      )
                    }
                    disabled={activeSet.cards.length <= 1}
                  >
                    Next Card
                  </Button>
                </div>

                {/* Progress Indicator */}
                <div className="text-center mt-4">
                  Card {currentCard + 1} of {activeSet.cards.length}
                </div>
              </div>

              <div className="w-[300px] mt-4">
                <Progress value={progress} className="h-2" />
                <p className="text-center text-sm text-gray-600 mt-2">
                  {completedCards.size} of {activeSet.cards.length} cards
                  reviewed
                </p>
              </div>

              {studyMode === "test" && !isFlipped && (
                <div className="mt-4 w-[300px]">
                  <Input
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer..."
                    className="mb-2"
                  />
                  <Button onClick={handleFlip} className="w-full">
                    Check Answer
                  </Button>
                </div>
              )}

              {studyMode === "learn" && !isFlipped && (
                <Button variant="outline" onClick={handleFlip} className="mt-4">
                  Flip Card
                </Button>
              )}
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

      {bulkUploadOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[500px]">
            <h3 className="text-lg font-medium mb-4">Bulk Upload Cards</h3>
            <p className="text-sm text-gray-600 mb-4">
              Enter one card per line in the format: Question|Answer
            </p>
            <Textarea
              value={bulkText}
              onChange={(e) => setBulkText(e.target.value)}
              placeholder="What is React?|A JavaScript library for building user interfaces"
              className="mb-4"
              rows={10}
            />
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setBulkUploadOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleBulkUpload}>Upload</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardPage;
