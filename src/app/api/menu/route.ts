// /app/api/menu/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const menu = [
    {
      id: 1,
      name: "Poori",
      description: "Fluffy deep-fried Indian bread served with potato masala.",
      price: 60.00,
      image: "/images/poori.jpg",
      rating: 4.3,
    },
    {
      id: 2,
      name: "Plain Dosa",
      description: "Crispy thin rice crepe served with chutney and sambar.",
      price: 50.00,
      image: "/images/dosa.jpg",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Pongal",
      description: "Savory rice and moong dal dish with ghee and pepper.",
      price: 65.00,
      image: "/images/pongal.jpg",
      rating: 4.1,
    },
    {
      id: 4,
      name: "Kitchdi",
      description: "Light rice and lentil dish seasoned with Indian spices.",
      price: 50.00,
      image: "/images/kitchdi.jpg",
      rating: 4.2,
    },
    {
      id: 5,
      name: "Idli",
      description: "Soft steamed rice cakes served with sambar and chutney.",
      price: 40.00,
      image: "/images/idli.jpg",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Vada",
      description: "Deep-fried lentil fritters, crispy on the outside.",
      price: 35.00,
      image: "/images/vada.jpg",
      rating: 4.4,
    },
    {
      id: 7,
      name: "Coffee",
      description: "Freshly brewed South Indian filter coffee.",
      price: 25.00,
      image: "/images/coffee.jpg",
      rating: 4.7,
    },
    {
      id: 8,
      name: "Tea",
      description: "Traditional Indian milk tea with a hint of cardamom.",
      price: 20.00,
      image: "/images/tea.jpg",
      rating: 4.3,
    },
    {
      id: 9,
      name: "Biryani",
      description: "Aromatic rice dish cooked with spices and vegetables/meat.",
      price: 130.00,
      image: "/images/chicken-briyani.jpg",
      rating: 4.8,
    },
    {
      id: 10,
      name: "Fish Fry",
      description: "Crispy and spicy pan-fried fish.",
      price: 150.00,
      image: "/images/fish-fry.jpg",
      rating: 4.6,
    },
    {
      id: 11,
      name: "South Indian Meals",
      description: "Traditional full meal with rice, sambar, rasam, poriyal, etc.",
      price: 110.00,
      image: "/images/south-indian-meals.jpg",
      rating: 4.5,
    },
     {
    id: 12,
    "name": "Puttu",
    "description": "Steamed rice flour cylinders layered with grated coconut, a Kerala breakfast staple.",
    "price": 55.00,
    "quantity": 1,
    "rating": 4.5,
    "image": "/images/puttu.jpg"
  },
  {
    id: 13,
    "name": "Lemon Rice",
    "description": "Zesty South Indian rice dish infused with lemon juice, curry leaves, and mustard seeds.",
    "price": 55.00,
    "quantity": 1,
    "rating": 4.8,
    "image": "/images/lemon-rice.jpg"
  },
  {
    id: 14,
    "name": "Tomato Rice",
    "description": "A spicy and tangy rice preparation cooked with ripe tomatoes, spices, and herbs.",
    "price": 75.00,
    "quantity": 1,
    "rating": 4.6,
    "image": "/images/tomato-rice.jpg"
  },
  {
    id: 15,
    "name": "Semiya",
    "description": "Delicate roasted vermicelli stir-fried with vegetables and mild spices.",
    "price": 70.00,
    "quantity": 1,
    "rating": 4.7,
    "image": "/images/semiya.jpg"
  },
  {
    id: 16,
    "name": "Sambar Rice",
    "description": "Hearty mix of rice and tangy sambar made with lentils and vegetables.",
    "price": 60.00,
    "quantity": 1,
    "rating": 4.2,
    "image": "/images/sambar-rice.jpg"
  },
  {
    id: 17,
    "name": "Idiyappam",
    "description": "Soft string hoppers made from rice flour, typically served with coconut milk or curry.",
    "price": 80.00,
    "quantity": 1,
    "rating": 4.3,
    "image": "/images/idiyappam.jpg"
  }
  ];

  return NextResponse.json(menu);
}
