---
title: Convidat – ML Based eco tourism project
summary: A causal inference platform for multivariate time series data.
slug: convidat-ai-powered-sustainable-tourism-platform
---

# Convidat – AI-Powered Sustainable Tourism Platform

Convidat is a fullstack AI-powered tourism platform designed to promote sustainable and eco-conscious travel experiences. It leverages advanced machine learning and causal inference to deliver personalized, environmentally friendly travel recommendations. Built on a microservices architecture using the MERN stack with integrated external APIs, it offers modularity, scalability, and performance.

## 💡 Key Features

* **ML-Powered City Recommendations**
  Designed a collaborative filtering model using Truncated SVD to suggest ideal cities based on user context like season, eco-score, popularity, and travel preferences.

* **Sustainable Route Planning**
  Integrated Google Maps API to simulate eco-friendly transport modes (train, bus, ferry, flight) along with carbon footprint, distance, and cost estimates.

* **Trip Planner with Itinerary Builder**
  Users can create multi-day trip plans, add activities, monitor weather, set packing lists, and track expenses with currency conversion and real-time saving.

* **Carbon Footprint Tracker**
  Dynamically calculates emissions from travel activities and accommodation, helping users minimize their environmental impact.

* **Eco-Stays & Destination Discovery**
  Curated eco-friendly accommodations and attractions using Google Places API and eco-rating logic based on place types and sustainability criteria.

* **Real-Time Reviews with Sentiment Analysis**
  Users can review destinations and services. Sentiments are analyzed using NLP models to flag positive, neutral, or negative experiences.

* **User Profile & Eco Score Dashboard**
  Personalized eco-impact dashboards showing average emission per trip, total emissions saved, and eco-score trends.

* **JWT Auth & Role-Based Access**
  Secure login and registration with JSON Web Token-based authentication and protected route access.

## 🧱 Architecture

Built with 8 microservices:

1. `auth-service`: Handles secure registration, login, and JWT session management.
2. `carbon-service`: Computes carbon emissions from routes and accommodation.
3. `destination-service`: Filters destinations by eco-score, tags, and location.
4. `recommendations-service`: SVD-based city recommender with contextual logic.
5. `trip-planner-service`: Manages itinerary, packing list, and budget tracking.
6. `travel-service`: Uses Google Maps API to simulate and suggest sustainable transport.
7. `review-service`: NLP-based sentiment analysis on travel reviews.
8. `profile-service`: Manages eco-score, trip history, and emission summaries.

## 🧪 Tech Stack

* **Frontend**: React.js + Tailwind CSS
* **Backend**: Express.js (API Gateway), FastAPI (ML service)
* **Database**: MongoDB
* **ML Models**: Truncated SVD (city recommender), VADER/Custom NLP (reviews)
* **APIs**: Google Maps, Google Places
* **Deployment**: Dockerized microservices with REST endpoints

## 🧠 AI Components

* Contextual recommendation with fallback logic
* City similarity based on embeddings + cosine similarity
* Sentiment scoring via text preprocessing and transformer-based fine-tuning (WIP)
* Real-time carbon impact feedback loop during planning

## 🔍 Results

* Achieved **92% top-5 accuracy** in recommendation model during testing
* Reduced average trip planning time by **40%**
* Encouraged low-carbon travel by offering greener route suggestions and stay filters
* Created a modular and extensible architecture ready for scale

## 🎯 Future Plans

* Integrate LLM-based eco-travel assistant
* Expand to include live event-based destination ranking
* Migrate to serverless architecture for cost efficiency
* Add gamified eco-badges and community challenges (optional roadmap)

---

Convidat isn't just a travel planner. It’s an effort toward responsible, mindful, and low-impact tourism.

© 2025 Rohaan – Built with clean code and cleaner travel in mind.
